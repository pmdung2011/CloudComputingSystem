#! /usr/bin/env python
#!/usr/bin/python
# open file
f = open ("/home/fumiyu/Desktop/text2.txt","r")

# Read whole file into data
data = f.read()

count = data.count('a') + data.count('o') + data.count('u') + data.count('i') 

str1= "Conso is " + str(count)

print str1

# final
f = open ("/home/fumiyu/Desktop/FinalText1.txt","w")
f.write(str1 + '\n')
f.close()
