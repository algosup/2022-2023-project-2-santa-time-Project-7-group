import pycurl
import certifi
from io import BytesIO
import multiprocessing
from multiprocessing import Pool

mainURL = 'https://bestiaever.ml/'

# prossess sound into pngs
def process(f):
    while True:
        c = pycurl.Curl()
        c.setopt(c.URL, mainURL)
        c.setopt(c.CAINFO, certifi.where())
        c.close()
        print(f)


# Reserve cores
def thread():
    # alocate CPU
    max_processors = multiprocessing.cpu_count()*4
    pool = Pool(processes=max_processors)
    f_list = []

    for i in range(64):
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
