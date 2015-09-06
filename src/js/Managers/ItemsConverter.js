(function() {
    var Item = require('./ToDoItem');

    module.exports = {
        convert: function(data) {
            if (!data) {
                return [];
            } else {
                var tasks = JSON.parse(data);
                if (tasks instanceof Array) {
                    return tasks.map(function (item) {
                        return Item.create(item);
                    });
                } else {
                    return [];
                }
            }
        }
    }
})();