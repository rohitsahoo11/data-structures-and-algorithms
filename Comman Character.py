# s1 = input("")
# s2 = input("")

# comman = []
# for i in s1:
#     if i in s2:
#         comman.append(i)
            
        
# print(comman)

# s1 = input("")
# s2 = input("")

# Set1 = set(s1)
# Set2 = set(s2)

# comman = []

# for i in Set1:
#     if i in Set2:
#         comman.append(i)
# comman_str = "".join(comman)        
# print(comman_str)        

s1 = input("Enter string 1: ")
s2 = input("Enter string 2: ")

# Convert strings to sets
Set1 = set(s1)
Set2 = set(s2)

# Initialize an empty list to store common characters
common = []

# Iterate through unique characters in Set1
for i in s1:
    # Check if character is common to Set2
    if i in Set2:
        common.append(i)

# Join the list of common characters into a string
common_string = ''.join(common)

print("Common characters:", common_string)
