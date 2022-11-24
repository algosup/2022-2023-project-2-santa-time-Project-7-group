import pycurl
import certifi
from io import BytesIO
import multiprocessing
from multiprocessing import Pool
import random



# prossess sound into pngs
def process(f):
    mainURL = f'http://13.73.147.115:2322/api?q={random.randint(0,90)}{random.randint(0,99) * 10}%20france'
    buffer = BytesIO()
    c = pycurl.Curl()
    c.setopt(c.URL, mainURL)
    c.setopt(c.WRITEDATA, buffer)
    c.setopt(c.CAINFO, certifi.where())
    c.perform()
    c.close()

    body = buffer.getvalue()
    print(f)


# Reserve cores
def thread():
    # alocate CPU
    max_processors = 8
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
    thread()
