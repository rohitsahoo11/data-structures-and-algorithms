# Sort string on basis of the key

S = input()
key = input()

d = {}

for i in S:
    if i in d:
        d[i] += 1
    else:
        d[i] = 1

ans = ''
for i in key:
    if i in d:
        temp = i*d[i]
        ans += temp
        
        del d[i]    
        
print(ans)        