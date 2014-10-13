from os import listdir as ls
valid_patterns="""markdown
mdown
mkdn
md
mkd
mdwn
mdtxt
mdtext
text"""

valid_patterns=set(valid_patterns.split('\n'))
print({i for i in ls() if i.split(".")[-1] in valid_patterns})