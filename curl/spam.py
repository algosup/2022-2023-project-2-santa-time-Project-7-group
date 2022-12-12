import pycurl
import certifi
from io import BytesIO
from multiprocessing import Pool
import random
import csv
import urllib.parse
import time
import datetime

rep = 100

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

    for i in range(rep):
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
    dt = datetime.datetime.now()
    respons = [[float]]
    for i in range(10):
        start = time.time()
        thread(A)
        end = time.time()
        respons.append([(end-start),(start-t)])
    return respons, dt

def toFile(inp, dt):
    f = open(f"out{dt}.txt", "a")
    f.write(f"time for {rep} request\n")
    f.write(f"started at {dt}\n\n")
    f.write(f"[time for ex, time since start]\n")
    for i in inp:
        f.write(f"{i}\n")
    f.close()

if __name__ == "__main__":
    a, b = getTime(16)
    toFile(a, b)
    print('end')