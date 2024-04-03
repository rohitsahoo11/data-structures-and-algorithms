# Quick Sort

def quick_sort(arr,low,high):
    if low < high:

        pivot_index = partition_index(arr,low,high)

        quick_sort(arr,low,pivot_index - 1)

        quick_sort(arr,pivot_index + 1, high)

def partition_index(arr,low,high):
    pivot = arr[low]
    i = low + 1
    j = high

    while True:
        while i <= j and arr[i] <= pivot:
            i += 1
        while j >= i and arr[j] > pivot:
            j -= 1
        if i >= j:
            break
        arr[i], arr[j] = arr[j], arr[i]
            
    arr[low], arr[j] = arr[j], arr[low]
    return j
    

arr1 = [4,6,2,5,7,9,1,3]
quick_sort(arr1, 0, len(arr1)-1)
print(arr1)