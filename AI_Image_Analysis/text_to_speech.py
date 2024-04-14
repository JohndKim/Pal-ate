import requests
from IPython.display import Audio


API_URL = "https://api-inference.huggingface.co/models/suno/bark"
headers = {"Authorization": "Bearer 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"}

def query(payload):
	response = requests.post(API_URL, headers=headers, json=payload)
	return response.content

audio_bytes = query({
	"inputs": "The answer to the universe is 42",
})

import numpy as np
framerate = 44100
t = np.linspace(0,5,framerate*5)
data = np.sin(2*np.pi*220*t) + np.sin(2*np.pi*224*t)
# Audio(data, rate=framerate)

# # You can access the audio with IPython.display for example
# Audio(audio_bytes, autoplay=True)