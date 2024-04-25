# Finding the delay or early of the current time with respect to actual time

def numberOfMinutesInTime(h,m):
    minutes = h*60 + m
    return minutes

h = int(input())
m = int(input())
h1 = int(input())
m1 = int(input())
x = int(input())

n = numberOfMinutesInTime(h,m)
m = numberOfMinutesInTime(h1,m1)

n = (x*60) + n
error_time = abs(n - m)
print(error_time)