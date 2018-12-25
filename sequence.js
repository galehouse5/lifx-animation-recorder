function Sequence(video, markers) {
    var that = this;
    let frames = [];

    let extractFrame = function (frame) {
        var colors = [];

        for (let i = 0; i < markers.length; i++) {
            colors.push(video.currentFrame.getImageData(markers[i].x, markers[i].y, 1, 1));
        }

        frames.push(colors);
    };

    that.getFrameCount = () => frames.length;
    that.getMarkerCount = () => markers.length;

    that.toImageDataUrl = function () {
        let image = document.createElement("canvas");
        image.height = markers.length;
        image.width = frames.length;

        let context = image.getContext("2d");

        for (let frameIndex = 0; frameIndex < frames.length; frameIndex++) {
            let frame = frames[frameIndex];

            for (let markerIndex = 0; markerIndex < markers.length; markerIndex++) {
                let colorData = frame[markerIndex];
                context.putImageData(colorData, frameIndex, markerIndex);
            }
        }

        return image.toDataURL("image/png");
    };

    that.clear = function () {
        frames = [];
    };

    video.addEventListener("frameChanged", extractFrame);
};