# Right Rotate the array by k times

def right_rotate(arr,k):
    for _ in range(k):
        last_element = arr[-1]
        for i in range(len(arr)-1,0,-1):
            arr[i] = arr[i-1]
        arr[0] = last_element
    print(arr)
arr1 = [1,2,3,4,5]
k = 2
right_rotate(arr1,k)                