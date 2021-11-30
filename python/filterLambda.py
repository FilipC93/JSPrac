pepegas = ['chaddy', 'shadow', 'prwktotoli', 'mike', 'doctori']

result = filter(lambda member: len(member) > 5, pepegas)
result_list = list(result)

print(result_list)