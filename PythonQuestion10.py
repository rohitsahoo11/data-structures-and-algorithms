# Equilibrium index of an array

def equilibrium(arr):

    total_sum = sum(arr)
    left = 0

    for i, num in enumerate(arr):
        total_sum -= num

        if left == total_sum:
            return i
        left += num
    return -1

arr1 = [-7, 1, 5, 2, -4, 3, 0]
print(equilibrium(arr1))