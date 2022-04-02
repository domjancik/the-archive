#!/bin/bash
# Generate thumbnail, following original folder structure but placing in a separate subdirectory

THUMBPATH=the-archive/thumbs/$(dirname $1)

# Extra info https://legacy.imagemagick.org/Usage/thumbnails/ 

echo "Generating thumbnail for $1"
mkdir -p $THUMBPATH
mogrify -path $THUMBPATH -format png -quality 95 -thumbnail 300x300 $1

