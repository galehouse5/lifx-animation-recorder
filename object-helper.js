// Credit: SLaks (https://stackoverflow.com/a/2086981)
Object.prototype.addEventListener = function (name, listener) {
    if (!this.events) { this.events = {} };
    if (!this.events[name]) { this.events[name] = []; }

    this.events[name].push(listener);
};

// Credit: SLaks (https://stackoverflow.com/a/2086981)
Object.prototype.removeEventListener = function (name, listener) {
    if (!this.events) return;
    if (!this.events[name]) return;

    for (let i = this.events[name].length - 1; i >= 0; i--)
    {
        if (this.events[name][i] !== listener) continue;
        this.events[name].splice(i, 1);
    }
};

// Credit: SLaks (https://stackoverflow.com/a/2086981)
Object.prototype.raiseEvent = function (name, args) {
    if (!this.events) return;
    if (!this.events[name]) return;

    for (let i = 0; i < this.events[name].length; i++)
    {
        this.events[name][i].apply(this, args);
    }
};