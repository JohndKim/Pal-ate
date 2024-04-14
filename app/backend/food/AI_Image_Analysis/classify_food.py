import requests

API_URL = "https://api-inference.huggingface.co/models/nateraw/food"
headers = {"Authorization": "Bearer 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"}

def query(filename):
    # with open(filename, "rb") as f:
    data = filename.read()
    response = requests.post(API_URL, headers=headers, data=data)
    return response.json()

# q = "./AI_Image_Analysis/input/lobster_roll.jpg"
# output = query(q)
# print(output)