# Find the First non repeating element in a given array

def first_non_repeating(arr):
    freq_map = {}

    for num in arr:
        if num in freq_map:
            freq_map[num] += 1
        else:
            freq_map[num] = 1
    for num in arr:
        if freq_map[num] == 1:
            return num
    return 0
arr1 = [2,3,2,4,5,4,6]
arr2 = [9, 4, 9, 6, 7, 4]
print(first_non_repeating(arr1))                        
print(first_non_repeating(arr2))