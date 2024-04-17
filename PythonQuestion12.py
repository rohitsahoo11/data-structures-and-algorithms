# Find the no. of elements that has appeared in an arrray even times

def appeared_even_times(arr):
    hash_map = {}
    even_ele = []
    for i in arr:
        if i in hash_map:
            hash_map[i] += 1
        else:
            hash_map[i] = 1
    for key, value in hash_map.items():
        if value % 2 == 0:
            even_ele.append(key)            
    return even_ele
arr1 = [1,1,2,3,3]            
print(appeared_even_times(arr1))