import os
import glob


from skimage import io, transform



if not os.path.exists('full-resolution-bars'):
    os.mkdir('full-resolution-bars')

filenames = glob.glob('*png')

for filename in filenames:
    image = io.imread(filename)

    new_filename = 'full-resolution-bars/{}'.format(filename)
    os.rename(filename, new_filename)

    image_resized = transform.resize(image, (image.shape[0] // 4, image.shape[1] // 4))

    io.imsave(filename, image_resized)