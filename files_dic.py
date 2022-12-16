from matplotlib import pyplot as plt
import json 

data_dic = '''[
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
]
'''

with open('data.json', 'r') as file:
    text = file.read()


data = json.loads(data_dic)
print(data)


# import json 
# with open('data.json', 'r') as file:
#     data = json.load(file)

#     print(data)