# String is palindrome or not

def srting(S):
    to_string = ''.join(char.lower() for char in S if char.isalnum())

    start = 0
    end = len(to_string)-1

    while start < end:
        if to_string[start] != to_string[end]:
            return f'{S} not a palindrome'
        start += 1
        end -= 1
    return f'{S} is a palindrome'
S1 = "Abba"
S2 = "rohit"

print(srting(S1))
print(srting(S2))