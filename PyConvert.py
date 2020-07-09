import boto3
import sys
from PyDictionary import PyDictionary
dictionary=PyDictionary()
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('ProjectTable')
quality = open(sys.argv[1])
desc=''
temp= quality.readlines()
for x in range(len(temp)):
    name=temp[x].rstrip("\n")
    try:
        meaning = dictionary.meaning(name)
        for x in meaning.values():
            desc=x[0]
    except:
        desc=""
    table.put_item( Item={'Quality':name, 'Meaning':desc,'Status':'0','Level':'1'})