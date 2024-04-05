# Left Rotate Array By D place

def reverse_arr(arr,start,end):
    while start < end:
        arr[start], arr[end] = arr[end], arr[start]
        start += 1
        end -= 1
def rotate_array(arr,d):
    n = len(arr)
    d = d % n

    reverse_arr(arr,0,d-1)
    reverse_arr(arr,d,n-1)
    reverse_arr(arr,0,n-1)
    return arr
arr = [1, 2, 3, 4, 5]
d = 2
rotate_array(arr, d)
print("Array after left rotation by", d, "positions:", arr)