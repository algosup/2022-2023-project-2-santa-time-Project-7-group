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
cpu = 32
n = 20

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
    dt = dt.strftime('%Y-%m-%d %H-%M-%S')
    respons = [[float]]
    for i in range(n):
        start = time.time()
        thread(A)
        end = time.time()
        respons.append([round((end-start), 5),round((start-t), 5)])
    return respons, dt

def toFile(inp, dt):
    f = open(f"../Test-report/API_stress_test_{dt}.md", "a")
    f.write(f"#API test from the {dt} \n\n")
    f.write(f"The test measure the time it takes to respond to {rep} requests, with {cpu} simultaneous request.\n")
    f.write(f"The process is repeated {n} time to get an average process time.\n\n")
    f.write(f"##RESULT\n\nIt takes {round(getAvg(inp), 5)}s on average to process {rep} requests. it took {inp[len(inp)-1][1]}s in total\n")
    f.write(f"You can find more detailed result below\n\n")
    f.write(f"time to process {rep} requests, time since start of execution in second\n")
    for i in inp[1:]:
        f.write(f"{i}"[1:-1] + "\n")
    f.close()

def getAvg(inp):
    res = 0
    for i in inp[1:]:
        res += i[0]
    return (res / len(inp))

if __name__ == "__main__":
    a, b = getTime(cpu)
    toFile(a, b)
    print('end')
