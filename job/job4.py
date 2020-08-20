#! /usr/bin/env python
#!/usr/bin/python
import os
# open file
f1 = open ("/home/fumiyu/Desktop/test/FinalText1.txt","r")

# Read whole file into data
data1 = f1.read()
num1=[int(s) for s in data1.split() if s.isdigit()]
tmp = num1[0]
num1=tmp

# open file
f2 = open ("/home/fumiyu/Desktop/test/FinalText2.txt","r")

# Read whole file into data
data2 = f2.read()
num2=[int(s) for s in data2.split() if s.isdigit()]
tmp2=num2[0]
num2=tmp2

total = num1 + num2

str1 = "Number of word is ", total
tmp = str(str1)
str1=tmp
f1.close()
f2.close()

# Write new data
f = open ("/home/fumiyu/Desktop/FinalText.txt","w")
f.write(str1)
f.close()

#Remove File
os.remove('/home/fumiyu/Desktop/test/FinalText1.txt')
os.remove('/home/fumiyu/Desktop/test/FinalText2.txt')
os.remove('/home/fumiyu/Desktop/test/text3.txt')
os.remove('/home/fumiyu/Desktop/test/text2.txt')
