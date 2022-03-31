#!/usr/bin/python3

import os
import json

def create_dir_listing():
    with open("dir.json", 'w') as fp:
        fp.write(json.dumps(os.listdir(), indent=2))

if __name__ == "__main__":
    create_dir_listing()
