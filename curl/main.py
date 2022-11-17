import pycurl
import certifi
from io import BytesIO

mainURL = 'https://bestiaever.ml/auth'

i = 0

while True:
    i += 1
    c = pycurl.Curl()
    c.setopt(c.URL, mainURL)
    c.setopt(c.CAINFO, certifi.where())
    c.close()
    print(i)
