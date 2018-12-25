function Video(element) {
    var that = this;
    let lastFrameTime = null;
    let frameBuffer = document.createElement("canvas");

    let extractFrame = function () {
        frameBuffer.width = element.clientWidth;
        frameBuffer.height = element.clientHeight;
        that.currentFrame.drawImage(element, 0, 0, element.clientWidth, element.clientHeight);
    };

    let monitorFrame = function () {
        window.requestAnimationFrame(monitorFrame);
        if (element.currentTime === lastFrameTime) return;

        extractFrame();
        lastFrameTime = element.currentTime;
        that.raiseEvent("frameChanged");
    };
    window.requestAnimationFrame(monitorFrame);

    that.currentFrame = frameBuffer.getContext("2d");
};