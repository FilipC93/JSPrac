import numpy as np
from numpy import random
random.seed(545)
dice = np.random.randint(1, 7)
step = 0
if dice <= 2:
    step = step - 1
elif dice <= 5:
    step = step + 1
else:
    step = step + np.random.randint(1, 7)

print(dice)
print(step)
