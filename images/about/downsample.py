import os
import glob
import numpy as np


from skimage import io, transform



if not os.path.exists('full-resolution-images'):
    os.mkdir('full-resolution-images')

filenames = sorted(glob.glob('*jpeg'))

for filename in filenames:
    image = io.imread(filename)
    
    new_filename = 'full-resolution-images/{}'.format(filename)
    os.rename(filename, new_filename)

    image_resized = (255 * transform.resize(image, (800, 800))).astype(np.uint8)
    
    io.imsave(filename, image_resized)
