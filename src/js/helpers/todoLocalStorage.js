export default function loadFromLocalStorage() {
    var data = localStorage.getItem('todo');
    if (data) {
        return JSON.parse(data);
    }

    return [];
}
