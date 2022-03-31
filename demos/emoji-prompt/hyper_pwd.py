#!/usr/bin/python3

import os

L=16

def get_pwd():
     d=os.getcwd()
     return ('...' if len(d) > L else '') + d[-L:]

if __name__ == "__main__":
    print(get_pwd())
