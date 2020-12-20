# LIFX Animation Recorder
See a light show on YouTube that you'd like to reproduce with your LIFX bulbs? This Chrome extension lets you record light animation data in a format you can replay with your bulbs using [LIFX Animator](https://github.com/galehouse5/LifxAnimator).

## How to use
These steps assume the Chrome extension is already installed.
1. Navigate to a video on YouTube. For example, [Gary Davis's animation of Katy Perry's Dark Horse](https://www.youtube.com/watch?v=_u2c9H4stVk).
2. Stop the video and seek to a frame that reveals the position of a light you'd like to record. Click on the light's position and a marker is created over it. Create markers for other lights you'd like to record. (Drag a marker to fine-tune its position or double click a marker to remove it.)
![Light Markers Example](light-markers-example.png)
3. Seek to the start of the video or whatever frame you'd like to start the recording. Play the video through or stop it to end the recording. A sequence file containing light animation data is automatically downloaded and can be replayed using [LIFX Animator](https://github.com/galehouse5/LifxAnimator).
![Recorded Sequence Example](recorded-sequence-example.png)

## Post processing
It's a good idea to post process the recorded sequence with an image editor if the color signals contain environmental distortions like a colored or textured surface, pollution from a nearby light source, or shadows. Distortion can be reduced through careful marker placement and by using image filters in [paint.net](https://www.getpaint.net/) or your preferred image editor. Use the "Levels", "Hue / Saturation", and "Posterize" filters in [paint.net](https://www.getpaint.net/).
