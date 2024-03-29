def smallest_no(arr):

    if len(arr) == 0:
        return 0

    smallest = arr[0]
    for num in arr[1:]:
        if num < smallest:
            smallest = num
    return smallest        

arr1 = [22,17,23,18,25]
print(smallest_no(arr1))