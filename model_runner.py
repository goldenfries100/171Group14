import sys
import argparse
import tensorflow as tf
# import keras 

CNN_MODEL_PATH = 'cnn_model.keras'
KNN_MODEL_PATH = 'knn_model.keras'



if __name__ == '__main__':
    # load models
    cnn_model = tf.keras.models.load_model(CNN_MODEL_PATH)
    cnn_model.summary()
    parser = argparse.ArgumentParser(sys.argv[0])
    parser.add_argument('model',type=str,
                      help = '''Select which model to run - Options:
                      knn
                      cnn''')
    parser.add_argument('data',nargs=3072,type=int, help = '''
                      Input image into the model. 3072 ints within 0-255 for each pixel's RGB values''')
    