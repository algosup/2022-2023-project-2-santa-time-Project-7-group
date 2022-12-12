import pycurl
import certifi
from io import BytesIO
import multiprocessing
from multiprocessing import Pool
import random
import json
import csv
import urllib.parse
import time
import datetime

data: list[list[str]]
with open(f"./adressF.csv", newline='') as f:
    reader = csv.reader(f)
    data = list(reader)

for i in data:
    i[0] = urllib.parse.quote(i[0], safe='')

def process(f):
    mainURL = f'https://noel.gq/api?q={data[f][0]}'
    buffer = BytesIO()
    c = pycurl.Curl()
    c.setopt(c.URL, mainURL)
    c.setopt(c.WRITEDATA, buffer)
    c.setopt(c.CAINFO, certifi.where())
    c.perform()
    c.close()


# Reserve cores
def thread(A):
    # alocate CPU
    max_processors = A
    pool = Pool(processes=max_processors)
    f_list = []

    for i in range(200):
        # pass the df to process function
        f = pool.apply_async(process, [random.randint(0,9535)])
        f_list.append(f)

        # safe gard from OOM
        if len(f_list) == max_processors:
            for f in f_list:
                f.get()
                del f_list[:]

def getTime(A):
    t = time.time()
    respons = [[float]]
    for i in range(20):
        start = time.time()
        thread(A)
        end = time.time()
        respons.append([(end-start),(start-t)])
    return respons

def toFile(inp):
    f = open(f"out{datetime.datetime.now()}.txt", "a")
    for i in inp:
        f.write(f"{i}\n")
    f.close()

if __name__ == "__main__":
    toFile(getTime(16))
    print('end')