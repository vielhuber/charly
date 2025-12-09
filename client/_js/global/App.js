import jwtbutler from 'jwtbutler';

import Home from '../routes/Home';
import Chats from '../routes/Chats';
import Tasks from '../routes/Tasks';
import Prompts from '../routes/Prompts';
import Skills from '../routes/Skills';
import Store from './Store';

export default class App {
    async ready() {
        console.log('start');
        this.bindGlobalEvents();
        this.start();
    }

    async load() {
        console.log('load');
    }

    async start() {
        await this.login();
        this.buildHtml();
        this.loadContent();
    }

    buildHtml() {
        document.querySelector('#app').innerHTML = `
            <div class="navigation">
                <a href="/" class="nav-link">Home</a>
                <a href="/chats" class="nav-link">Chats</a>
                <a href="/tasks" class="nav-link">Tasks</a>
                <a href="/prompts" class="nav-link">Prompts</a>
                <a href="/skills" class="nav-link">Skills</a>
                <a href="#" class="logout">Logout</a>
            </div>
            <div class="content">
                ...
            </div>
        `;
    }

    bindGlobalEvents() {
        // handle browser back/forward buttons
        window.addEventListener('popstate', () => {
            this.loadContent();
        });

        document.querySelector('#app').addEventListener('click', e => {
            if (e.target.closest('.nav-link')) {
                e.preventDefault();
                // change url dynamically
                window.history.pushState({}, '', e.target.closest('.nav-link').getAttribute('href'));
                this.loadContent();
            }
        });

        document.querySelector('#app').addEventListener('click', async e => {
            if (e.target.closest('.logout')) {
                e.preventDefault();
                await Store.api.logout();
                document.querySelector('#app').innerHTML = '';
                this.start();
            }
        });
    }

    async login() {
        document.querySelector('#app').innerHTML = '';
        Store.api = new jwtbutler({
            auth_server: '/auth',
            auth_login: 'email'
        });
        await Store.api.login();
    }

    async loadContent() {
        // clear content
        document.querySelector('.content').innerHTML = '';
        // call specific js file
        for (let classes__value of [Home, Chats, Tasks, Prompts, Skills]) {
            let c = new classes__value();
            if (new RegExp(c.route).test(window.location.pathname) === false) {
                continue;
            }
            await c.init();
        }
    }
}
