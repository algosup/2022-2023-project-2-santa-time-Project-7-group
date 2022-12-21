sudo apt update
sudo apt install pbzip2
sudo apt install letsencrypt
sudo apt install wget
mkdir noel.gq
sudo mv /home/louisdechoulot/*.pem noel.gq/
sudo mv /home/louisdechoulot/README noel.gq/
sudo chmod 755 noel.gq
sudo chmod 755 serverDB
mkdir /etc/letsencrypt/live
sudo cp -r noel.gq /etc/letsencrypt/live/

sudo apt install --yes openjdk-11-jdk

cd /datadrive
# create dbboot.sh that execute sudo wget -O - https://download1.graphhopper.com/public/photon-db-latest.tar.bz2 | sudo pbzip2 -cd | sudo tar x
echo "#!/bin/bash
cd /datadrive
sudo wget -O - https://download1.graphhopper.com/public/photon-db-latest.tar.bz2 | sudo pbzip2 -cd | sudo tar x 
sudo wget https://github.com/komoot/photon/releases/download/0.4.2/photon-0.4.2.jar 
" > /dbdl.sh

sudo chmod +x /dbdl.sh

#echo text in new service file
echo " [Unit]
Description=start db on boot

After=sys-kernel-tracing.mount

[Service]
ExecStart=/dbdl.sh
KillMode=process
Type=oneshot

[Install]
WantedBy=multi-user.target
" > /etc/systemd/system/dbdl.service
sudo systemctl daemon-reload
#run service only once and exit command
sudo systemctl start dbdl.service --no-block

#create dbboot.sh that execute sudo java -jar /datadrive/photon-*.jar -data-dir /datadrive/ -cors-any -listen-port 2505
echo "#!/bin/bash
sudo java -jar /datadrive/photon-*.jar -data-dir /datadrive/ -cors-any -listen-port 2505" > /dbboot.sh

sudo chmod +x /dbboot.sh

#create service that runs after dbdl.service and starts /dbboot.sh
echo "[Unit]
Description=start db on boot

After=dbdl.service

[Service]
ExecStart=/dbboot.sh
KillMode=process
Restart=on-failure

[Install]
WantedBy=multi-user.target
" > /etc/systemd/system/dbboot.service

#install docker on debian
sudo apt update
sudo apt install --yes apt-transport-https ca-certificates curl gnupg2 software-properties-common
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"
sudo apt update
sudo apt install --yes docker-ce
# pull image
sudo docker pull ghcr.io/noandrea/geo2tz:2.0.0
# create dbboot2.sh that execute sudo docker run -d -p 2004:2004 ghcr.io/noandrea/geo2tz:2.0.0

echo "#!/bin/bash
sudo docker run -d -p 2004:2004 ghcr.io/noandrea/geo2tz
" > /dbboot2.sh

sudo chmod +x /dbboot2.sh

#echo text in new service file
echo " [Unit]
Description=start db on boot

After=sys-kernel-tracing.mount

[Service]
ExecStart=/dbboot2.sh
KillMode=process
Restart=on-failure

[Install]
WantedBy=multi-user.target
" > /etc/systemd/system/dbboot2.service

#create website service that starts /home/louisdechoulot/serverDB
echo " [Unit]
Description=start db on boot

After=dbboot2.service

[Service]
ExecStart=/home/louisdechoulot/serverDB
KillMode=process
Restart=on-failure

[Install]
WantedBy=multi-user.target
" > /etc/systemd/system/website.service

#enable services
sudo systemctl daemon-reload
sudo systemctl enable dbboot.service
sudo systemctl enable dbboot2.service
sudo systemctl enable website.service
sudo systemctl restart dbboot.service --no-block
sudo systemctl restart dbboot2.service --no-block
sudo systemctl restart website.service --no-block


