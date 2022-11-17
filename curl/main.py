import pycurl
import certifi
from io import BytesIO

mainURL = 'https://bestiaever.ml/auth'

c = pycurl.Curl()

while True:
    c.setopt(c.URL, 'https://python.org/')
    c.setopt(c.CAINFO, certifi.where())
    c.close()
