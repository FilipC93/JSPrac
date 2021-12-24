nums = [12, 22, 13, 15, 70]

numsA = [num + nums[1] for num in nums]
numsB = [num**2 for num in numsA]

print(numsA)
print(numsB)