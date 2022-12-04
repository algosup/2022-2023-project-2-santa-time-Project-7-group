import pycurl
import certifi
from io import BytesIO
import multiprocessing
from multiprocessing import Pool
import random
import time



# prossess sound into pngs
def process(f):
    mainURL = f'http://13.73.147.115:80/api?q={random.randint(0,90)}{random.randint(0,99) * 10}%20france'
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

    for i in range(1000):
        # pass the df to process function
        f = pool.apply_async(process, [i])
        f_list.append(f)

        # safe gard from OOM
        if len(f_list) == max_processors:
            for f in f_list:
                f.get()
                del f_list[:]

def getTime(A):
    res: float = 0
    for i in range(10):
        start = time.time()
        thread(A)
        end = time.time()
        res += end-start
    return res

if __name__ == "__main__":
    print(getTime(8))
