# Toggle the bits of the given number.

N = 12

binary = bin(N)[2:]

st = ""
for i in binary:
    
    if i == '1':
        st += '0'
    else:
        st += '1'
print(int(st, 2))  