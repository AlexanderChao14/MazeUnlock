import os
import sys
import re


def main(directory: str):
    """
    Fixes the directory structure of the assets folder.
    :param directory: The directory to fix.
    :return: None
    """
    for root, dirs, files in os.walk(directory):
        files.sort()
        for file in files:
            if file.endswith(".png"):
                name = int(re.search('(\d*).png', file).group(1)) - 1

                os.rename(os.path.join(root, file), os.path.join(root, str(name) + ".png"))
                

if __name__ == '__main__':
   main(sys.argv[1])
