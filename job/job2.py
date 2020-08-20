#! /usr/bin/env python
#!/usr/bin/python
# open file
f = open ("/home/fumiyu/Desktop/test/text2.txt","r")

# Read whole file into data
data = f.read()

#Count string
chars_no_spaces = sum([not x.isspace() for x in data])

str2 = "No of characters: " + str(chars_no_spaces)

# final
f = open ("/home/fumiyu/Desktop/test/FinalText1.txt","w")
f.write(str2 + '\n')
f.close()
