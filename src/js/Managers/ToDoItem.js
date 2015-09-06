(function() {
    'use strict';

    var states = require('./States');
    var Emiter = require('./Emiter');

    function ToDoItem(date) {
        this.id = date.id;
        this.text = date.text;
        this.status = date.status || states.INCOMPLETE;
        this.dueTime = date.dueTime;
        this.isArchive = date.isArchive;
    }

    ToDoItem.prototype = new Emiter();

    ToDoItem.prototype.toggleComplete = function(isComplete) {
        if (arguments.length > 0) {
            this.status = isComplete ? states.COMPLETE : states.INCOMPLETE;
        } else {
            this.status = this.status === states.COMPLETE ? states.INCOMPLETE : states.COMPLETE;
        }
        this.emit('change', this);
    };

    ToDoItem.prototype.rename = function(text) {
        this.text = text;
        this.emit('change', this);
    };

    ToDoItem.prototype.archive = function() {
        this.isArchive = true;
        this.emit('change', this);
    };

    ToDoItem.prototype.remove = function() {
        this.emit('remove', this)
    };

    ToDoItem.prototype.toJSON = function() {
        return {
            id: this.id,
            text: this.text,
            status: this.status,
            dueTime: this.dueTime,
            isArchive: this.isArchive
        };
    };

    module.exports = {
        create: function(date) {
            return new ToDoItem(date);
        }
    }
})();