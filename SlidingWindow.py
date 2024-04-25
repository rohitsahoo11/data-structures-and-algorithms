# Sliding Window For constant Window

def sliding_window(arr, k):
    l = 0
    r = k-1
    n = len(arr)
    
    max_sum = sum(arr[l:r+1])
    current_sum = max_sum
    
    while r < n-1:
        current_sum = current_sum - arr[l] + arr[r+1]
        max_sum = max(max_sum,current_sum)
        l += 1
        r += 1
    return max_sum

arr = [-1,2,3,3,4,5,-1]
k = 4
print(sliding_window(arr,k))