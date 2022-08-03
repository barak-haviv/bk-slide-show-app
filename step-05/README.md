# Basic image display functionality

Data about the images is stored in an array.

Add a container for the current image and its details.

Add "next" and "prev" slideshow controls.

`updateCounter` function: updates the counter based on the provided offset; handles both positive and negative wraparound.

`renderPicture` function: updates the image and its details based on the current picture index.

Attach event listeners to the slideshow controls. The control will call the `updateCounter` function, and then the `renderPicture` function.