(function() {
    'use strict';

    function Emiter() {
    }

    Emiter.prototype.emit = function(event) {
        var args = Array.prototype.slice.call(arguments, 1);
        if (this.callbacks && this.callbacks[event]) {
            this.callbacks[event].forEach(function (callback) {
                callback.apply(null, args);
            });
        }
    };

    Emiter.prototype.on = function(event, callback) {
        if (!this.callbacks) {
            this.callbacks = {};
        }
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }
        this.callbacks[event].push(callback);
    };

    Emiter.prototype.off = function(event, callback) {
        if (!this.callbacks) {
            return;
        }
        if (callback) {
            if (this.callbacks[event] && this.callbacks[event].indexOf(callback) !== -1) {
                this.callbacks[event].splice(this.callbacks[event].indexOf(callback))
            }
        } else {
            this.callbacks[event] = [];
        }
    };

    module.exports = Emiter;
})();

