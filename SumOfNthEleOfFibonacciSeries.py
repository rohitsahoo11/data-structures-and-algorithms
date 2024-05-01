def sum_of_nth_fibo(N):
    if N <= 0:
        return 0
    
    fibo_prev = 0
    fibo_curr = 1
    fibo_sum = fibo_prev
    
    for _ in range(1, N):
        fibo_sum += fibo_curr
        fibo_next = fibo_prev + fibo_curr
        fibo_prev, fibo_curr = fibo_curr, fibo_next
    return fibo_sum

N = int(input())
print(sum_of_nth_fibo(N))


