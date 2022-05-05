#!/bin/bash

# Using -n 1 seems to add an extra empty command at the end
find . -name '*.JPG' -print0 | xargs -0 -I % -P 0 generate_thumbnail.sh % 
