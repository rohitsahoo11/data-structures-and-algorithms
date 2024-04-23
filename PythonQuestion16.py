# sorting the array

def sorting_two_pointer(arr):
    left = 0
    right = len(arr)-1

    while left < right:
       while left < right and arr[left] <= arr[right]:
        left += 1

       while left < right and arr[right] >= arr[left]:
        right -= 1

       arr[left], arr[right] = arr[right], arr[left]  
    return arr
arr1 = [0,1,2,1,3,2,1]
print(sorting_two_pointer(arr1))            