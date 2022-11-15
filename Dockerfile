FROM selenium/standalone-chrome:107.0

WORKDIR /home

COPY ./app/main.py /app
COPY ./app/Python-3.9.0.tar.xz /home

RUN sudo apt update
RUN sudo apt-get install xz-utils
RUN sudo tar -xf Python-3.9.0.tar.xz
RUN sudo mv Python-3.9.0 /opt/
RUN sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev pkg-config make -y
WORKDIR /opt/Python-3.9.0/
RUN sudo ./configure --enable-optimizations --enable-shared
RUN sudo make -j 4
RUN sudo make altinstall
RUN sudo ldconfig /opt/Python-3.9.0
RUN sudo apt install python3-pip -y
RUN pip install selenium
RUN sudo rm /home/Python-3.9.0.tar.xz

WORKDIR /