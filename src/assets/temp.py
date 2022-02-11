f = open("dictionary.txt", "r")
newList = []
for x in f:
    newList.append(x)
f.close()
f = open("dictionary.txt", "w")
for x in newList:
    f.write("\""+x+"\",\s")
f.close()
