import sys
import argparse
# import tensorflow as tf
import base64
from io import BytesIO
from PIL import Image
# import keras 
from flask import Flask, request
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app)

@app.route('/model', methods=["POST"])
def hello_world():
    out = {}
    out['hello'] = 'world'
    file =request.get_data(as_text=True) 
    print(file)
    # printDict(request.args)
    starter = file.find(',')
    image_data = file[starter+1:]
    image_data = bytes(image_data, encoding="ascii")
    image = Image.open(BytesIO(base64.b64decode(image_data)))
    processImage(image)
    return out
    
def processImage(image: Image):
    image = image.convert("RGB")
    r, g, b = image.split()
    rgb_flat = [0] * 3072
    print(list(image.getdata()))
    for i, rgb in enumerate(list(image.getdata())):
        rgb_flat[i] = rgb[0]
        rgb_flat[i + 1024] = rgb[1]
        rgb_flat[i + 2048] = rgb[2]
    print(rgb_flat)
    image.save('image.jpg')
    

CNN_MODEL_PATH = 'cnn_model.keras'
KNN_MODEL_PATH = 'knn_model.keras'



# if __name__ == '__main__':
    # processImage(Image.open('./image.jpg'))