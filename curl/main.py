import pycurl
import certifi
from io import BytesIO
import multiprocessing
from multiprocessing import Pool
import random
import time



# prossess sound into pngs
def process(f):
    mainURL = f'https://13.73.147.115:443/api?q={random.randint(0,90)}{random.randint(0,99) * 10}%20france'
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
    start = time.time()
    thread()
    end = time.time()
    print(end-start)
