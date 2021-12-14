import pandas as pd
from pandas import DataFrame
dotaDict = [
    {
        "name": "Filip",
         "pos": "Carry",
         "favHero": "Phantom-Lancer",
         "nickname": "CHADDYDADDY"
    },
    {
        "name": "Nemanja",
        "pos": "Middle",
        "favHero": "Storm-Spirit",
        "nickname": "Bobanus"
    },
    {
        "name": "Mike",
        "pos": "Offlane",
        "favHero": "Mars",
        "nickname": "Igger"
    },
    {
        "name": "Stelios",
        "pos": "Support",
        "favHero": "Bounty-Hunter",
        "nickname": "MrShadow"
    },
    {
        "name": "Tolis",
        "pos": "Hard-Support",
        "favHero": "Keeper-of-the-Light",
        "nickname": "NekronasLa"
    }
]

df = DataFrame(data = dotaDict)
df_ind = df.set_index('name')
df_ind.to_csv('D:\df_ind.csv')
print(df_ind)


