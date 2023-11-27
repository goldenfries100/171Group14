from math import ceil
import sys
import argparse
from PIL import Image
import numpy as np

def unpickle(file):# -> Any:
    import pickle
    with open(file, 'rb') as fo:
        dict = pickle.load(fo, encoding='latin1')
    return dict

data = []
for i in range(1,6):
    filepath = f'./cifar-10-batches-py/data_batch_{i}'
    data.append(unpickle(f'./cifar-10-batches-py/data_batch_{i}'))

print(data[0].keys())
def saveImage(index: int, savename: str):
    for index in range(100):
        assert(index < 50000)
        dataset = index // 10000
        image_RGB = data[dataset]['data'][index].reshape(3, 32, 32).transpose(1, 2, 0)
        image = Image.fromarray(image_RGB.astype('uint8')).convert('RGB')
        image.save(".\\images\\" + data[dataset]['filenames'][index])
    pass

def galleryGenerator(x:int, y:int, start:int, scale = 1):
    # assert(start < 9500)
    tile_size = 32 * scale
    x = ceil(x / tile_size)
    y = ceil(y / tile_size)
    img = Image.new('RGB', (x * 32 * scale, y * 32 * scale))
    j = 0
    k = 0
    for i in range(start, start + ((x+ 1) * (y+1))):
        # print(i, j, k)
        image_RGB = data[i // 10000]['data'][i].reshape(3, 32, 32).transpose(1, 2, 0)
        image = Image.fromarray(image_RGB.astype('uint8')).convert('RGB')
        image = image.resize((tile_size, tile_size))
        img.paste(im=image, box=(j * tile_size, k * tile_size))
        if j < x:
            j += 1
        else:
            j = 0
            k += 1

    # image = Image.fromarray(image_RGB.astype('uint8')).convert('RGB')
    img.save(r'171-project\src\assets\gallery.jpg')

if __name__ == '__main__':
    parser = argparse.ArgumentParser(sys.argv[0])
    parser.add_argument('index',type=int)
    parser.add_argument('savename',nargs='?',type=str,default=None)
    args = parser.parse_args()
    if not args.savename:
        args.savename = f'image {args.index}.jpg'
    # saveImage(args.index, args.savename)
    galleryGenerator(1920,1080,0,3)