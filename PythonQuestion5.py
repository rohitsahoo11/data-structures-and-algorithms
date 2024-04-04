# Count vowels, Consonants, digits, special_characters in a string

def count(str):
    vowels = 0
    consonants = 0
    digits = 0
    special_characters = 0

    for char in str:
        if char.isalpha():
            if char.lower() in 'a,e,i,o,u':
                vowels += 1
            else:
                consonants += 1
        elif char.isdigit():
            digits += 1
        else:
            special_characters += 1                        
    return vowels, consonants, digits, special_characters
str1 = " A1 B@ d  adc"
vowels, consonants, digits, special_characters = count(str1)
print("vowels: ", vowels)
print("Consonants: ", consonants)
print("Digits: ", digits)
print("Special_characters: ", special_characters)            