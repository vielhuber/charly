import jwtbutler from 'jwtbutler';

import Home from '../routes/Home';
import Chats from '../routes/Chats';
import Tasks from '../routes/Tasks';
import Knowledge from '../routes/Knowledge';
import Providers from '../routes/Providers';
import Skills from '../routes/Skills';
import Store from './Store';
import Helper from './Helper';

export default class App {
    async ready() {
        this.bindGlobalEvents();
        this.startApp();
    }

    async load() {}

    async startApp() {
        Helper.updateTitle('');
        await this.initLogin();
        this.buildHtml();
        await this.loadContent();
    }

    async initLogin() {
        document.querySelector('#app').innerHTML = '';
        Store.api = new jwtbutler({
            auth_server: '/auth',
            auth_login: 'email'
        });
        await Store.api.login();
    }

    async loadContent() {
        // clear content
        document.querySelector('.content').innerHTML = '...';
        // call specific js file
        for (let classes__value of [Home, Chats, Tasks, Knowledge, Providers, Skills]) {
            let c = new classes__value();
            if (new RegExp(c.route).test(window.location.pathname) === false) {
                continue;
            }
            await c.init();
            // bind to dom for later usage
            document.querySelector('.content')['class'] = c;
            break;
        }
    }

    buildHtml() {
        document.querySelector('#app').innerHTML = `
            <div class="navigation">
                <a href="/" class="nav-link">Home</a>
                <a href="/chats" class="nav-link">Chats</a>
                <a href="/tasks" class="nav-link">Tasks</a>
                <a href="/knowledge" class="nav-link">Knowledge</a>
                <a href="/providers" class="nav-link">Providers</a>
                <a href="/skills" class="nav-link">Skills</a>
                <a href="#" class="logout">Logout</a>
            </div>
            <div class="content">
                ...
            </div>
        `;
    }

    bindGlobalEvents() {
        this.bindBackForward();
        this.bindNavigation();
        this.bindLogout();
        this.bindGeneralForm();
        this.bindDragAndDrop();
    }

    bindBackForward() {
        window.addEventListener('popstate', () => {
            this.loadContent();
        });
    }

    bindNavigation() {
        document.querySelector('#app').addEventListener('click', e => {
            if (e.target.closest('.nav-link')) {
                e.preventDefault();
                Helper.setUrl(e.target.closest('.nav-link').getAttribute('href'));
                this.loadContent();
            }
        });
    }

    bindLogout() {
        document.querySelector('#app').addEventListener('click', async e => {
            if (e.target.closest('.logout')) {
                e.preventDefault();
                await Store.api.logout();
                document.querySelector('#app').innerHTML = '';
                Helper.setUrl('/');
                this.startApp();
            }
        });
    }

    bindGeneralForm() {
        document.querySelector('#app').addEventListener('submit', async e => {
            if (e.target.closest('.general-form')) {
                let $form = e.target.closest('.general-form');
                e.preventDefault();
                let response = await Helper.fetch($form.getAttribute('action'), {
                    method: $form.getAttribute('method'),
                    body: new URLSearchParams(new FormData($form))
                });
                if (response.success === true) {
                    if ($form.hasAttribute('data-clear-form')) {
                        $form.reset();
                    }
                    if ($form.hasAttribute('data-target')) {
                        let target = $form.getAttribute('data-target');
                        if (response?.data?.id) {
                            target = target.replace('%ID%', response.data.id);
                        }
                        Helper.setUrl(target);
                    }
                    if (e?.detail?.refresh === undefined || e?.detail?.refresh !== false) {
                        await document.querySelector('.content')['class'].init();
                    }
                } else {
                    alert(response.public_message);
                }
            }
        });
    }

    bindDragAndDrop() {
        let $draggedElement = null;

        // only allow dragging from the handle
        {
            document.querySelector('#app').addEventListener('mousedown', e => {
                if (e.target.closest('.drag-and-drop-list__handle')) {
                    let $li = e.target.closest('li');
                    if ($li) {
                        $li.setAttribute('draggable', 'true');
                    }
                }
            });
            document.querySelector('#app').addEventListener('mouseup', e => {
                if (e.target.closest('.drag-and-drop-list__handle')) {
                    let $li = e.target.closest('li');
                    if ($li) {
                        $li.setAttribute('draggable', 'false');
                    }
                }
            });
        }

        document.querySelector('#app').addEventListener('dragstart', e => {
            let $li = e.target.closest('.drag-and-drop-list li');
            if ($li) {
                $draggedElement = $li;
                $li.classList.add('dragging');
            }
        });

        document.querySelector('#app').addEventListener('dragend', e => {
            let $li = e.target.closest('.drag-and-drop-list li');
            if ($li) {
                $draggedElement = null;
                $li.classList.remove('dragging');
                $li.setAttribute('draggable', 'false');
            }
        });

        document.querySelector('#app').addEventListener('dragover', e => {
            let $list = e.target.closest('.drag-and-drop-list');
            if ($list && $draggedElement) {
                // Check if dragged element belongs to this list
                if ($draggedElement.parentElement !== $list) {
                    return;
                }
                e.preventDefault();
                let y = e.clientY;
                // Only get direct children li elements of this list
                let draggableElements = [...$list.querySelectorAll(':scope > li:not(.dragging)')];
                let afterElement = draggableElements.reduce(
                    (closest, child) => {
                        let box = child.getBoundingClientRect();
                        let offset = y - box.top - box.height / 2;
                        if (offset < 0 && offset > closest.offset) {
                            return { offset: offset, element: child };
                        } else {
                            return closest;
                        }
                    },
                    { offset: Number.NEGATIVE_INFINITY }
                ).element;
                if (afterElement == null) {
                    $list.appendChild($draggedElement);
                } else {
                    $list.insertBefore($draggedElement, afterElement);
                }
            }
        });

        // update and save
        document.querySelector('#app').addEventListener('drop', e => {
            let $list = e.target.closest('.drag-and-drop-list');
            if ($list) {
                e.preventDefault();
                $list.querySelectorAll(':scope > li').forEach(($el, index) => {
                    let $input = $el.querySelector('input[name="order"]'),
                        $form = $el.querySelector('form');
                    if ($input) {
                        $input.value = index + 1;
                    }
                    if ($form) {
                        $form.dispatchEvent(new CustomEvent('submit', { bubbles: true, detail: { refresh: false } }));
                    }
                });
            }
        });
    }
}
