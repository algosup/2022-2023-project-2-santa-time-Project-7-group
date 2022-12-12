import pycurl
import certifi
from io import BytesIO
import multiprocessing
from multiprocessing import Pool
import random
import json
import csv

data: list[list[str]]
with open(f"./adressF.csv", newline='') as f:
    reader = csv.reader(f)
    data = list(reader)


def process(f):
    mainURL = f'https://noel.gq/api?q={data[f][0]}'
    buffer = BytesIO()
    c = pycurl.Curl()
    c.setopt(c.URL, mainURL)
    c.setopt(c.WRITEDATA, buffer)
    c.setopt(c.CAINFO, certifi.where())
    c.perform()
    c.close()
    body = buffer.getvalue()
    print(body.decode('iso-8859-1'))


# Reserve cores
def thread(A):
    # alocate CPU
    max_processors = A
    pool = Pool(processes=max_processors)
    f_list = []

    for i in range(1000):
        # pass the df to process function
        f = pool.apply_async(process, [i])
        f_list.append(f)

        # safe gard from OOM
        if len(f_list) == max_processors:
            for f in f_list:
                f.get()
                del f_list[:]

if __name__ == "__main__":
    thread(32)
    print('end')