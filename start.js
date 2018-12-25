let download = function (sequence) {
    let downloader = document.createElement("a");
    downloader.href = sequence.toImageDataUrl();
    downloader.download = `lifx-animator-sequence-${sequence.getMarkerCount()}x${sequence.getFrameCount()}.png`;
    document.body.appendChild(downloader);
    downloader.click();
    downloader.remove();
};

let elements = document.getElementsByTagName("video");

for (let i = 0; i < elements.length; i++) {
    let initialize = function () {
        let recorder = new Recorder(elements[i], elements[i].parentElement);
        recorder.addEventListener("recorded", download);
    }

    let hasData = elements[i].readyState >= 2;
    if (hasData) { initialize(); }
    else { elements[i].addEventListener("loadeddata", initialize); }
}