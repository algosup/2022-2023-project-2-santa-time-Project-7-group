import pycurl
import certifi
from io import BytesIO
import multiprocessing
from multiprocessing import Pool
import random
import json
import csv

data: list[list[str]]
with open(f"../database-generation/adress0.csv", newline='') as f:
    reader = csv.reader(f)
    data = list(reader)
print(data[2][0])
# prossess sound into pngs
def process(f):
    mainURL = f'http://13.73.147.115/api?q={"aa"}'
    buffer = BytesIO()
    c = pycurl.Curl()
    c.setopt(c.URL, mainURL)
    c.setopt(c.WRITEDATA, buffer)
    c.setopt(c.CAINFO, certifi.where())
    c.perform()
    c.close()

    print(f)


# Reserve cores
def thread():
    # alocate CPU
    max_processors = 128
    pool = Pool(processes=max_processors)
    f_list = []

    for i in range(6400000):
        # pass the df to process function
        f = pool.apply_async(process, [i])
        f_list.append(f)

        # safe gard from OOM
        if len(f_list) == max_processors:
            for f in f_list:
                f.get()
                del f_list[:]

if __name__ == "__main__":
    #thread()
    print("end")
