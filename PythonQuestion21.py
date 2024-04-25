# Find the actual price of the item from its code

code = int(input())
product = 1
sum = 0

string = str(code)
for i in string:
    product = product * int(i)
    sum = sum + int(i)

actual_price = abs(product - sum)
print(actual_price)