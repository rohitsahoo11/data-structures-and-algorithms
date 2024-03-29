# Find the second Smallest And Second Largest in the Array

# Brute Force

# def second_small_large(arr):
#     n = len(arr)
#     if n == 0 or n == 1:
#         return 0
#     arr.sort()
#     second_smallest = arr[1]
#     second_largest = arr[n-1]
#     return second_smallest, second_largest        

# arr = [1, 2, 3, 4, 5]
# print(second_small_large(arr))

# Optimal Approach

def getSecondOrderElements(n: int,  a: [int]) -> [int]:
    # Write your code here.
    
        large = float('-inf')
        sec_large = float('-inf')
        small = float('inf')
        sec_small = float('inf')

        for i in range(n):
            if (a[i]> large):
                sec_large = large
                large = a[i]
                
            elif(a[i]> sec_large and a[i] != large):
                sec_large = a[i]
         
        
        for i in range(n):
            if (a[i] < small):
                sec_small = small
                small = a[i]
                
            elif (a[i]< sec_small and a[i] != small):
                sec_small = a[i]
         
        return [sec_large, sec_small]       
pass