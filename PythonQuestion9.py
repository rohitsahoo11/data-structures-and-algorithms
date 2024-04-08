# sum_of_arithmetic_series

def sum_of_arithmetic_series(n,a,d):
    total = int(n/2*(2*a + (n - 1)*d))
    
    return total
n = 5
a = 3
d = 2
print(sum_of_arithmetic_series(n,a,d))    