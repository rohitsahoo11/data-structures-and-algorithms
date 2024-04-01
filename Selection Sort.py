# Selection sort

def selection_sort(arr):
    for i in range(len(arr)):
        min_ele = i

        for j in range(i+1,len(arr)):
            if arr[min_ele]> arr[j]:
                min_ele = j
        arr[i], arr[min_ele] = arr[min_ele], arr[i]        
    return arr    

arr1 = [13,46,24,52,20,9]    
print(selection_sort(arr1))