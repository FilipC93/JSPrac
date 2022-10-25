import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("something.csv")
sns.countplot(x="what_of", data=df)
plt.show()

tips = sns.load_dataset("tips")
tips.head()

hue_colors = {"Yes": "black", "No": "Red"}
sns.scatterplot(x="total", y="tip", data=tips,
                hue="smoker", hue_order=["Yes", "No"], palette=hue_colors)
plt.show()