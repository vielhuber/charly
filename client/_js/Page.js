import SVGInject from '@iconfu/svg-inject';
import jwtbutler from 'jwtbutler';

export default class Page {
    constructor() {}

    async ready() {
        this.start();
    }

    async load() {
        console.log('load');
    }

    static async readyOnce() {}
    static async loadOnce() {}

    async start() {
        document.querySelector('#app').innerHTML = '';

        const api = new jwtbutler({
            auth_server: '/auth',
            auth_login: 'email'
        });
        await api.login();

        document.querySelector('#app').insertAdjacentHTML('beforeend', '<a href="#" class="logout">logout()</a>');

        document.querySelector('.logout').addEventListener('click', async e => {
            e.preventDefault();
            await api.logout();
            this.start();
        });
    }
}
