import loadFromLocalStorage from '../helpers/todoLocalStorage'
import { INCOMPLETE, COMPLETE, ALL } from '../constants/States'

class ToDos {
    constructor() {
        this.deserialize();
    }

    deserialize() {
        this.items = loadFromLocalStorage();
    }

    serialize() {
        localStorage.setItem('todo', this.toJSON());
    }

    add(todo) {
        var id = this.items.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
        var result = [
            {
                key: `${todo.groupId}.${id}`,
                id: id,
                groupId: todo.groupId,
                name: todo.name,
                status: todo.status,
                isArchive: todo.isArchive,
                dueTime: todo.dueTime
            },
            ...this.items
        ];
        this.items = result;
        this.serialize();
    }

    getGroup(groupId) {
        return this.items.filter((item) => item.groupId === groupId);
    }

    changeName(key, name) {
        this.items = this.items.map((item) => {
            return item.key === key ?
                Object.assign({}, item, { name }) :
                item;
        });
        this.serialize();
    }

    complete(key) {
        this.items = this.items.map((item) => {
            return item.key === key ?
                Object.assign({}, item, {status: COMPLETE}) :
                item;
        });
        this.serialize();
    }

    incomplete(key) {
        this.items = this.items.map((item) => {
            return item.key === key ?
                Object.assign({}, item, {status: INCOMPLETE}) :
                item;
        });
        this.serialize();
    }

    archive(key) {
        this.items = this.items.map((item) => {
            return item.key === key ?
                Object.assign({}, item, {isArchive: true}) :
                item;
        });
        this.serialize();
    }

    unarchive(key) {
        this.items = this.items.map((item) => {
            return item.key === key ?
                Object.assign({}, item, {isArchive: false}) :
                item;
        });
        this.serialize();
    }

    changeGroup(key, groupId) {
        this.items = this.items.map((item) => {
            return item.key === key ?
                Object.assign({}, item, { groupId }) :
                item;
        });
        this.serialize();
    }

    getByState(state) {
        return this.items.filter((item) => (state === ALL || item.status === state) && !item.isArchive);
    }

    getArchive() {
        return this.items.filter((item) => item.isArchive);
    }


    toJSON() {
        return JSON.stringify(this.items);
    }
}

var todos = new ToDos;

export default todos;
