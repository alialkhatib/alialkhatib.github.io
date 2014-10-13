import re
MARKDOWN_PATTERN=".*\.(m(?:d(?:te?xt|o?wn)?|arkdown|kdn?)|text)$"
from os import listdir as ls

testfile="2014-09-25-online-labor-markets-and-the-failure-to-compete.md"

def getLinks(filename=testfile):
    with open(filename) as thefile:
        thefile=thefile.read()
    return re.findall("\[\d+\]:.+",thefile)

search=re.compile(MARKDOWN_PATTERN)

x=ls()
for i in x:
    #print(i)
    lol=search.search(i)
    if lol:
        print(lol.group(0,1))
#print("\n".join(filter(lambda x:search.match(x),ls())))
#getLinks()