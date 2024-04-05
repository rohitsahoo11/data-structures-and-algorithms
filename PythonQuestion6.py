# Prime No.s
from math import sqrt

def is_prime(n):
    if n <= 1:
        return False
    for i in range (2,int(sqrt(n))+ 1 ):
        if n % i == 0:
            return False
    return True
def fnd_primes(n):
    primes = []
    for num in range(2, n+1):
        if is_prime(num):
            primes.append(num)
    return primes

limits = 30
print("Prime Numbers till 30 are: ",limits, fnd_primes(limits))