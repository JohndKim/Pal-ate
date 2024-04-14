# import numpy as np
# import pandas as pd 
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow_hub import KerasLayer
from keras.utils import custom_object_scope, register_keras_serializable
from keras.models import load_model
import tensorflow_hub as hub
from tensorflow_hub import KerasLayer
from PIL import Image

from transformers import AutoImageProcessor, AutoModelForImageClassification
import torch
import json
import torchvision.transforms as transforms




print("finish tf")

class_indices = {
    0: 'apple_pie', 1: 'baby_back_ribs', 2: 'baklava', 3: 'beef_carpaccio', 4: 'beef_tartare', 5: 'beet_salad', 6: 'beignets', 7: 'bibimbap', 8: 'bread_pudding', 9: 'breakfast_burrito', 10: 'bruschetta', 11: 'caesar_salad', 12: 'cannoli', 13: 'caprese_salad', 14: 'carrot_cake', 15: 'ceviche', 16: 'cheese_plate', 17: 'cheesecake', 18: 'chicken_curry', 19: 'chicken_quesadilla', 20: 'chicken_wings', 21: 'chocolate_cake', 22: 'chocolate_mousse', 23: 'churros', 24: 'clam_chowder', 25: 'club_sandwich', 26: 'crab_cakes', 27: 'creme_brulee', 28: 'croque_madame', 29: 'cup_cakes', 30: 'deviled_eggs', 31: 'donuts', 32: 'dumplings', 33: 'edamame', 34: 'eggs_benedict', 35: 'escargots', 36: 'falafel', 37: 'filet_mignon', 38: 'fish_and_chips', 39: 'foie_gras', 40: 'french_fries', 41: 'french_onion_soup', 42: 'french_toast', 43: 'fried_calamari', 44: 'fried_rice', 45: 'frozen_yogurt', 46: 'garlic_bread', 47: 'gnocchi', 48: 'greek_salad', 49: 'grilled_cheese_sandwich', 50: 'grilled_salmon', 51: 'guacamole', 52: 'gyoza', 53: 'hamburger', 54: 'hot_and_sour_soup', 55: 'hot_dog', 56: 'huevos_rancheros', 57: 'hummus', 58: 'ice_cream', 59: 'lasagna', 60: 'lobster_bisque', 61: 'lobster_roll_sandwich', 62: 'macaroni_and_cheese', 63: 'macarons', 64: 'miso_soup', 65: 'mussels', 66: 'nachos', 67: 'omelette', 68: 'onion_rings', 69: 'oysters', 70: 'pad_thai', 71: 'paella', 72: 'pancakes', 73: 'panna_cotta', 74: 'peking_duck', 75: 'pho', 76: 'pizza', 77: 'pork_chop', 78: 'poutine', 79: 'prime_rib', 80: 'pulled_pork_sandwich', 81: 'ramen', 82: 'ravioli', 83: 'red_velvet_cake', 84: 'risotto', 85: 'samosa', 86: 'sashimi', 87: 'scallops', 88: 'seaweed_salad', 89: 'shrimp_and_grits', 90: 'spaghetti_bolognese', 91: 'spaghetti_carbonara', 92: 'spring_rolls', 93: 'steak', 94: 'strawberry_shortcake', 95: 'sushi', 96: 'tacos', 97: 'takoyaki', 98: 'tiramisu', 99: 'tuna_tartare', 100: 'waffles'
}

Efficientnet_b0 = "https://tfhub.dev/google/efficientnet/b0/classification/1"
model_path = "./AI_Image_Analysis/palette24_efficientnet_model.keras"
model_path1 = "./AI_Image_Analysis/test2.h5"
model_path2 = "./AI_Image_Analysis/pytorch_model.bin"
preprocess_config_file = ""

def load_palette_model(Efficientnet_b0, model_path):
    model = torch.load(model_path2, map_location=torch.device('cpu'))
    print(type(model))
    model.eval()

    return model

def load_preprocess_config(preprocess_config_file):
    with open(preprocess_config_file, 'r') as f:
        config = json.load(f)
    return config

def pre_process_image(image_path, preprocess_config_file):
    config = load_preprocess_config(preprocess_config_file)

    # converts to array (height, width, channel) --> e.g. (1600, 900, 3)
    image_array = Image.open(image_path)
    
    # resizes image to appropriate dimensions
    w, h = image_array.size
    bx, by = (w - config['image_size']) // 2, (h - config['image_size']) // 2
    resized_image_array = image_array.crop((bx, by, bx + config['image_size'], by + config['image_size']))
    # resizes image to (255, 255, 3)
    # resized_img_array = image_array.resize((config['image_size'], config['image_size']))
    
    # convert the image to a tensor and normalize
    transform = transforms.ToTensor()
    image_tensor = transform(resized_image_array)
    image_tensor = (image_tensor - torch.tensor(config['image_mean'])) / torch.tensor(config['image_std'])

    # reshape the image tensor
    image_tensor = image_tensor.view(1, config['num_channels'], config['image_size'], config['image_size'])

    # add a batch dimension
    image_tensor = image_tensor.unsqueeze(0)

    return image_tensor

def show_image(image_array):
    plt.imshow(image_array)
    plt.axis('off')  # Turn off axis
    plt.title("Food Image")
    plt.show()

def run_palette_model(Efficientnet_b0, model_path, image_path):
    model = load_palette_model(Efficientnet_b0, model_path)
    image_tensor = pre_process_image(image_path)
    
    output = model(image_tensor)
    predicted_class = torch.argmax(output, dim=1)
    return predicted_class
    print(f"Predicted class: {predicted_class}")


    
    # # predictions = model.predict(image_tensor)
    # # predicted_label = tf.argmax(predictions, axis=1)[0]
    
    # # convert to get the index
    # value = predicted_label.numpy()
    # index = value[()]
    
    return class_indices[index]
    
    
def main():
    image_path = "./AI_Image_Analysis/input/tacos_fish.jpg"
    # image_input = pre_process_image(image_path)
    prediction = run_palette_model(Efficientnet_b0, model_path, image_path)
    print(prediction)
    
if __name__ == "__main__":
    main()


# hub_layer = hub.KerasLayer("https://tfhub.dev/google/imagenet/mobilenet_v2_100_224/classification/4")
    # # Create a Sequential model
    # model = tf.keras.Sequential()
    # # Add the TensorFlow Hub layer to the Sequential model
    # model.add(hub_layer)
    
    # hub_layer = hub.KerasLayer(Efficientnet_b0)
    
    # with custom_object_scope({'KerasLayer': KerasLayer}):
    # Register the KerasLayer class as a custom object
    # Register the KerasLayer class as a custom object
    
    # @tf.keras.utils.register_keras_serializable()
    # class KerasLayer(tf.keras.layers.Layer):
    #     def __init__(self, spec, batch_input_shape=None, **kwargs):
    #         super(KerasLayer, self).__init__(**kwargs)
    #         self.spec = spec
    #         self.batch_input_shape = batch_input_shape

    #     def build(self, input_shape):
    #         self.hub_layer = hub.KerasLayer(self.spec, trainable=self.trainable, name=self.name)
    #         super(KerasLayer, self).build(input_shape)

    #     def call(self, inputs):
    #         return self.hub_layer(inputs)

    #     def get_config(self):
    #         config = super(KerasLayer, self).get_config()
    #         config.update({'spec': self.spec, 'batch_input_shape': self.batch_input_shape})
    #         return config

    #     @classmethod
    #     def from_config(cls, config):
    #         spec = config.pop('spec')
    #         batch_input_shape = config.pop('batch_input_shape')
    #         return cls(spec, batch_input_shape=batch_input_shape, **config)
    
# Register the KerasLayer class as a custom object
    # @register_keras_serializable()
    # class KerasLayer(tf.keras.layers.Layer):
    #     def __init__(self, spec, **kwargs):
    #         super(KerasLayer, self).__init__(**kwargs)
    #         self.spec = spec

    #     def build(self, input_shape):
    #         self.hub_layer = hub.KerasLayer(self.spec, trainable=self.trainable, name=self.name)
    #         super(KerasLayer, self).build(input_shape)

    #     def call(self, inputs):
    #         return self.hub_layer(inputs)

    #     def get_config(self):
    #         config = super(KerasLayer, self).get_config()
    #         config.update({'spec': self.spec})
    #         return config

    #     @classmethod
    #     def from_config(cls, config):
    #         spec = config.pop('spec')
    #         return cls(spec, **config)
    
    