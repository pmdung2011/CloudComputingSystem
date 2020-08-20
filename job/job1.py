#! /usr/bin/env python
#!/usr/bin/python
# open file
f = open ("/home/fumiyu/Desktop/text.txt","r")

# Read whole file into data
data = f.read()

#Split text
job2, job3 = data[:len(data)/2], data[len(data)/2:]

# Write new data
f = open ("/home/fumiyu/Desktop/test/text2.txt","w")
f.write(job2)
f.close()

f = open ("/home/fumiyu/Desktop/test/text3.txt","w")
f.write(job3)
f.close()
#close data
f.close()
