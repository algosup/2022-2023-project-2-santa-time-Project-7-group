import multiprocessing
from multiprocessing import Pool
import random
import string

def remove_unecesary_lines():
    r = open("../adress.txt", 'r')
    contents = r.readlines()
    r.close()

    w = open("../adress.txt", 'w')
    for line in contents:
        if not line == '\n':
            w.write(line)
    w.close

def uplow_case_randomizer(address):
    s = list(address)
    for i in range(random.randint(0, (len(address) - 1))):
        n = random.randint(0, (len(address) - 1))
        if not s[n].isupper():
            s[n] = s[n].upper()
        else:
            s[n] = s[n].lower()
    return("".join(s))       

def remove_info(address):
    s = address.split(",")
    for i in range(random.randint(0, (len(s) - 1))):
        n = random.randint(0, (len(s) - 1))
        del s[1]
    return("".join(s))

def wrong_char_randomizer(address):
    s = list(address)
    for i in range(random.randint(0, (len(address) - 1))):
        n = random.randint(0, (len(address) - 1))
        s[n] = random.choice(string.ascii_letters)
    return("".join(s))

def randomize_string(address):
    s = [""]
    for i in range(random.randint(20, 200)):
        n = random.randint(0, 35)
        if n > 9 :
            n = random.choice(string.ascii_letters)
        s.append(str(n))
    return("".join(s))

def process(line):
    print("i")

# Reserve cores
def multi_process():
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
    a = randomize_string("0956 Rath Loaf, Apt. 811, 13224, Janiceborough, Arizona, United States")
    print(a)