# What is Ddosify

Dsosify is a load testing tool. it alows us to see our server response time and response rate 
by alowing us to send many thouthands of request on our website.

## How do we use it

For ease of use we use Docker. The docker image for Ddosify is ``docker pull ddosify/ddosify`` <br>
We launch the image with ``docker run -it --rm ddosify/ddosify`` <br>

You can find extensive Documentation at https://hub.docker.com/r/ddosify/ddosify
Short version is ``ddosify -t <target_site.com> -n <requests number> -d <spread in s>

## Example

- ``-t https://34.140.78.108/`` is our loadbalancer IP
- ``-n 10000`` we make 10,000 request
- ``-m GET`` use a GET Methode, 
- ``-d 5`` requests sent over 5s
- ``-l waved`` create spike of load

<img width="686" alt="Screenshot 2022-12-14 at 10 01 05" src="https://user-images.githubusercontent.com/80251657/207552700-3a206b51-9dc4-4514-9cf5-101033dc915e.png">
