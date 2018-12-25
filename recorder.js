function Recorder(videoElement, containerElement) {
    let that = this;
    let video = new Video(videoElement);
    let markers = [];
    let sequence = new Sequence(video, markers);

    let removeMarker = function () {
        this.removeEventListener("removed", removeMarker);
        markers.splice(markers.indexOf(this), 1);

        for (let i = 0; i < markers.length; i++) {
            markers[i].setNumber(i + 1);
        }
    };

    let addMarker = function (event) {
        let marker = new Marker(
            event.offsetX, event.offsetY, markers.length + 1,
            containerElement, video.currentFrame);
        marker.addEventListener("removed", removeMarker);
        markers.push(marker);
    };

    let updateMarkerColors = function () {
        for (let i = 0; i < markers.length; i++) {
            markers[i].updateColor();
        }
    };

    let clearSequence = function () {
        sequence.clear();
    };

    let recorded = function () {
        if (sequence.getMarkerCount() === 0) return;
        if (sequence.getFrameCount() === 0) return;

        that.raiseEvent("recorded", [sequence]);
    };

    videoElement.addEventListener("click", addMarker);
    videoElement.addEventListener("play", clearSequence);
    videoElement.addEventListener("ended", recorded);
    videoElement.addEventListener("pause", recorded);
    video.addEventListener("frameChanged", updateMarkerColors);

    let suppressYouTubePauseOnClick = (event) => event.stopPropagation();
    containerElement.addEventListener("click", suppressYouTubePauseOnClick);
};