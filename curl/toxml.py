import csv

src = "out2022-12-12 16-37-14.txt"

data: list[list[str]]
with open(f"../Test-report/{src}", newline='') as f:
    lines_after_4 = f.readlines()[4:]
    for i in lines_after_4:
        i = i.replace("[", "")
        i = i.replace("]", "")
    reader = csv.reader(f)
    data = list(reader)

print(data)