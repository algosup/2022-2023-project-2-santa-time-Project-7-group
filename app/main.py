from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium import webdriver
from selenium.webdriver.common.by import By

options = Options()

service = Service(executable_path="/app/chromedriver")
options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--disable-gpu")


driver = webdriver.Chrome(service=service, options=options)

driver.get("https://fr.wikipedia.org/wiki/Mozilla_Firefox")
text = driver.find_element(By.CLASS_NAME, "mw-page-title-main")

print(text)