# Directory Listing and Attributes

What should the content file server provide to the client and what kind of attributes should be kept on the images?

While the structure may never be set in stone, it still makes sense to think about what may be useful for displaying the files and what kind of changes make sense to be persisted.

## Read-only

### Path to file

This goes without saying, this allows the client to get the original file.

### Path to thumbnail

Explicitly including path to the thumbnail, possibly at different levels of detail will avoid the need to use a specific contract between server and client when it comes to thumbnail location.

Exposing multiple sizes can also be useful, especially in 3D scenarios.

### Location

If available, providing GPS location would enable geospatial visualizations.

## Writable

### Tags and groups

### Shared flag

If the media has been shared and possibly to which networks.