from PyDictionary import PyDictionary
dictionary=PyDictionary()
quality = open('File.txt')
qualities = open("js/qualities.js","w")
desc=''
temp= quality.readlines()
qualities.write("var file_source=[\n")
for x in range(len(temp)):
    name=temp[x].rstrip("\n")
    try:
        meaning = dictionary.meaning(name)
        for x in meaning.values():
            desc=x[0]
    except:
        desc=""
    qualities.write('[\n"'+name+'",\n"'+desc+'",\n"0",\n"1"\n],\n')
qualities.write('[\n"",\n"",\n"0",\n"1"\n]\n];')
