import numpy as np
import base64
from io import BytesIO
from PIL import Image
import keras 
from flask import Flask, jsonify, request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
CNN_MODEL_PATH = 'cnn_model.keras'
KNN_MODEL_PATH = 'knn_model.keras'
RNN_MODEL_PATH = 'rnn_cnn.keras'
LABEL_NAMES = ['Airplane','Automobile','Bird','Cat','Deer'
               ,'Dog','Frog','Horse','Ship','Truck']

rnn_model = keras.models.load_model(RNN_MODEL_PATH)
@app.route('/model', methods=["POST"])
def hello_world():
    # out = {}
    # out['hello'] = 'world'
    file =request.get_data(as_text=True) 
    print(file)
    # printDict(request.args)
    starter = file.find(',')
    image_data = file[starter+1:]
    image_data = bytes(image_data, encoding="ascii")
    image = Image.open(BytesIO(base64.b64decode(image_data)))
    # processImage(image)
    return jsonify({'label':processImage(image)})
    
def processImage(image: Image) -> str:
    image = image.convert("RGB")
    r, g, b = image.split()
    rgb_flat = [0] * 3072
    # print(list(image.getdata()))
    for i, rgb in enumerate(list(image.getdata())):
        rgb_flat[i] = rgb[0]
        rgb_flat[i + 1024] = rgb[1]
        rgb_flat[i + 2048] = rgb[2]
    # print(rgb_flat)
    array = np.asarray(rgb_flat).reshape(3, 32, 32).transpose(1, 2, 0)
    # print(array)
    labels = rnn_model.predict(np.array([array/255]))
    # print(labels)
    return LABEL_NAMES[np.argmax(labels)]

if __name__ == '__main__':
    print(processImage(Image.open('./image.jpg')))