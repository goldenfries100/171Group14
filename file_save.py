import sys
import argparse
from PIL import Image


def unpickle(file):# -> Any:
    import pickle
    with open(file, 'rb') as fo:
        dict = pickle.load(fo, encoding='latin1')
    return dict

data = []
for i in range(1,6):
    filepath = f'./cifar-10-batches-py/data_batch_{i}'
    data.append(unpickle(f'./cifar-10-batches-py/data_batch_{i}'))

def saveImage(index: int, savename: str):
    assert(index < 50000)
    dataset = index // 10000
    image_RGB = data[dataset]['data'][index]
    image_RGB = image_RGB.reshape(3, 32, 32).transpose(1, 2, 0)
    # print(image_RGB.shape, image_RGB)
    # print(savename, index)
    image = Image.fromarray(image_RGB.astype('uint8')).convert('RGB')
    image.save(savename)
    pass

if __name__ == '__main__':
    parser = argparse.ArgumentParser(sys.argv[0])
    parser.add_argument('index',type=int)
    parser.add_argument('savename',nargs='?',type=str,default=None)
    args = parser.parse_args()
    if not args.savename:
        args.savename = f'image {args.index}.jpg'
    saveImage(args.index, args.savename)