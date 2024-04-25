# Print which year belong to which century
year = int(input("Enter the year: "))

if year % 100 == 0:
    century = year//100
    print(f'{year} is from {century} century')
else:
    century = (year // 100) + 1
    print(f'{year} is from {century} century')