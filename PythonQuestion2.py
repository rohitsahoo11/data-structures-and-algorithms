def largest_no(arr):
    if len(arr) == 0:
        return 0
    largest = arr[0]

    for num in arr[1:]:
        if num > largest:
            largest = num     
    return largest
arr = [22,17,23,18,25]
print(largest_no(arr))            