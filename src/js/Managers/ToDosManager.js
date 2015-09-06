(function() {
    'use strict';

    var states = require('./States');
    var Item = require('./ToDoItem');
    var Emiter = require('./Emiter');

    var tasks = require('./ItemsConverter').convert(localStorage.getItem('todo'));

    function Manager() {
        this.applyExistingTasks = function() {
            tasks.forEach(function(task) {
                task.on('change', this.onChangeTask);
                task.on('remove', this.onRemoveTask);
            }.bind(this));
        };

        this.getIncompleteTasksCount = function() {
            var count = 0;
            tasks.forEach(function(item) {
                if (!item.isArchive && item.status === states.INCOMPLETE) {
                    count++;
                }
            });
            return count;
        };

        this.filter = function(type, isArchive) {
            return tasks.filter(function(item) {
                if (isArchive) {
                    return item.isArchive;
                }
                if (!isArchive && item.isArchive) {
                    return false;
                }
                if (type === states.ALL) {
                    return true;
                }
                return type === item.status;
            })
        };

        this.onChangeTask = function(task) {
            localStorage.setItem('todo', this.serialize());
            this.emit('change', task);
        }.bind(this);

        this.onRemoveTask = function(task) {
            if (!task.isArchive) {
                task.archive();
            } else {
                this.remove(task.id);
            }
        }.bind(this);

        this.addTodo = function(text) {
            var todo = Item.create({
                id: tasks.length,
                text: text,
                isArchive: false,
                dueTime: null,
                status: states.INCOMPLETE
            });

            tasks.push(todo);
            todo.on('change', this.onChangeTask);
            todo.on('remove', this.onRemoveTask);
            this.emit('add', todo);

            localStorage.setItem('todo', this.serialize());

            return todo.id;
        };

        this.remove = function(id) {
            for (var i = 0; i < tasks.length; i++) {
                if (tasks[i].id === id) {
                    var task = tasks.splice(i, 1)[0];

                    this.emit('remove', task);
                    task.off('change', this.onChangeTask);
                    task.off('remove');


                    localStorage.setItem('todo', this.serialize());
                    return;
                }
            }
        };

        this.serialize = function() {
            return JSON.stringify(tasks.map(function(item) {
                return item.toJSON();
            }));
        };
    }

    Manager.prototype = new Emiter();

    var manager = new Manager();
    manager.applyExistingTasks();

    module.exports = manager;
})();