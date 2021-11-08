import matplotlib.path as mplPath
import numpy as np


poly = [190, 50, 500, 310]

bbPath = mplPath.Path(np.array([[poly[0], poly[1]],
                                [poly[1], poly[2]],
                                [poly[2], poly[3]],
                                [poly[3], poly[0]]]))

bbPath.contains_point((200, 100))
i = np.array([0.99])
j = np.array([0.99])
mplPath.contains_point(i, j)
for i in np.array:
    if i >= 1 and i<=500:
        print(i)
    else:
        print(False)

for j in np.array:
    if j >= 1 and j<=310:
        print(j)
    else:
        print(False)
res(i, j) = bbPath.contains_point
print(i, j)