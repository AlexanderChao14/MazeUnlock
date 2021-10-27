import os
import sys
import re


def main(flag: bool, directory: str):
    """
    Fixes the directory structure of the assets folder.
    :param flag: subtract one from all files
    :param directory: The directory to fix.
    :return: None
    """
    remove = 0
    if flag:
        remove = 1

    for root, dirs, files in os.walk(directory):
        files.sort()
        for file in files:
            if file.endswith(".png"):

                name = int(re.search('(\d*).png', file).group(1)) - remove

                os.rename(os.path.join(root, file), os.path.join(root, str(name) + ".png"))
                

if __name__ == '__main__':
    if len(sys.argv) >= 2:
        if(sys.argv[1] == "-m"):
            main(True, sys.argv[2])
        else:
            main(False, sys.argv[1])
    else:
        print("Usage: fix.py [-minus] <directory>")
        print("-minus: subtract one from the all the file names")
