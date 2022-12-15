from multiprocessing import Pool
from multiprocessing import Process
from selenium.webdriver.firefox.service import Service
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.relative_locator import locate_with
from time import sleep
import csv

service = Service(executable_path="C:/Users/light/Documents/geckodriver-v0.32.0-win64/geckodriver")
driver = webdriver.Firefox(service=service)

#fields = ['Adress', 'Lat/Lon']


#write.writerow(fields)

def process(i):
    driver.get("https://generate.plus/en/address")
    driver.find_element(By.ID, "ez-accept-all").click()

    while True:
        f = open(f"adress{i}.csv", "a")
        write = csv.writer(f)
        a = True
        b = 0
        driver.get("https://generate.plus/en/address")

        while a:
            if driver.find_element(By.ID, "street").text == '':
                sleep(0.1)
                b += 1
                if b > 100:
                    driver.refresh()
            else:
                a = False
                b = 0

        street = driver.find_element(By.ID, "street").text
        loc = driver.find_element(By.ID, "locality").text
        country = driver.find_element(locate_with(By.CLASS_NAME, "col-sm-8").below({By.ID: "locality"})).text
        lat = driver.find_element(By.ID, "latlng-map").text.replace('\n','')
        adress = ""
        if '*' in street:
            adress = ",".join([loc, country]).encode("ascii", "ignore").decode()
        else:
            adress = ",".join([street, loc, country]).encode("ascii", "ignore").decode()

        write.writerow([adress.replace(',','/'), lat.replace(',','/')])
        f.close
        print(i)
    
    

    

def multi_process():
    # alocate CPU
    max_processors = 4
    pool = Pool(processes=max_processors)
    f_list = []

    for i in range(max_processors):
        # pass the df to process function
        f = pool.apply_async(process, [i])
        f_list.append(f)

        # safe gard from OOM
        if len(f_list) == max_processors:
            for f in f_list:
                f.get()
                del f_list[:]

if __name__ == "__main__":
    p1 = Process(target=process, args=(0, ))
    p2 = Process(target=process, args=(1, ))
    p3 = Process(target=process, args=(2, ))
    p4 = Process(target=process, args=(3, ))

    p1.start()
    p2.start()
    p3.start()
    p4.start()
