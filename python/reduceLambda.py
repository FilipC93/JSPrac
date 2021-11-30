from functools import reduce

family = ['filip', 'franceska', 'tom', 'matilda']

result = reduce(lambda item1, item2: item1 + item2, family)

print(result)