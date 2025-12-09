export default class Tasks {
    route = '/tasks';

    async init() {
        document.querySelector('.content').innerHTML = 'TASKS!!';
    }
}
