function Marker(x, y, number, containerElement, currentFrame) {
    let that = this;
    that.x = x;
    that.y = y;

    that.setNumber = function (value) {
        element.dataset.number = value;
        number = value;
    };

    that.updateColor = function () {
        let colorData = currentFrame.getImageData(that.x, that.y, 1, 1);
        element.style.backgroundColor = `rgb(${colorData.data[0]}, ${colorData.data[1]}, ${colorData.data[2]})`;
    };

    let startMove = function () {
        let continueMove = function (event) {
            that.x += event.movementX;
            that.y += event.movementY;

            element.style.left = `${that.x}px`;
            element.style.top = `${that.y}px`;

            that.updateColor();
        };

        let stopMove = function () {
            containerElement.removeEventListener("mouseup", stopMove);
            containerElement.removeEventListener("mousemove", continueMove);
        };

        containerElement.addEventListener("mouseup", stopMove);
        containerElement.addEventListener("mousemove", continueMove);
    };

    let remove = function () {
        element.removeEventListener("mousedown", startMove);
        element.removeEventListener("dblclick", remove);
        element.remove();
        that.raiseEvent("removed");
    };

    let element = document.createElement("div");
    element.className = "lifx-animation-recorder__marker";
    element.style.left = `${that.x}px`;
    element.style.top = `${that.y}px`;
    that.setNumber(number);
    that.updateColor();
    element.addEventListener("mousedown", startMove);
    element.addEventListener("dblclick", remove);
    containerElement.appendChild(element);
};