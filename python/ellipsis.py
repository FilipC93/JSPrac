import numpy as np
import matplotlib.pyplot as plt
N = 4
x = 362.81818181818164, 409.20779220779195, 440.134199134199, 407.27489177489156
y = 175.39393939393938, 163.79653679653677, 188.92424242424238, 204.3874458874459

plt.plot(x, y, '.')     

xmean = x.mean
ymean = y.mean
x -= xmean()
y -= ymean()
U, S, V = np.linalg.svd(np.stack((x, y)))

tt = np.linspace(0, 2*np.pi, 1000)
circle = np.stack((np.cos(tt), np.sin(tt)))    
transform = np.sqrt(2/N) * U.dot(np.diag(S))   
fit = transform.dot(circle) + np.array([[xmean], [ymean]])
plt.plot(fit[0, :], fit[1, :], 'r')
plt.show()