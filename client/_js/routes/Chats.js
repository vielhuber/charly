import Helper from '../global/Helper';
import ChatDetail from '../modules/ChatDetail';

export default class Chats {
    route = '/chats';

    async init() {
        this.$content = document.querySelector('.content');
        await this.buildHtml();
        this.bindLinks();
    }

    async buildHtml() {
        let response = await Helper.fetch('/api/chats', {
            method: 'GET'
        });

        console.log(response);

        let html = '';

        html += '<h2>Chats</h2>';
        html += '<ul>';
        response.data.forEach(data_value => {
            html += `
                <li style="display:inline;">
                    <a href="/chats/${data_value.id}" class="chat-link">
                        ${data_value.name}
                    </a>
                </li>
            `;
        });
        html += '</ul>';
        html += '<div class="chat-content">...</div>';

        html += '<form method="post" action="/api/chats">';
        html += '<input type="text" required="required" name="name" value="" placeholder="Name..." />';
        html += '<button type="submit">Create Chat</button>';
        html += '</form>';

        this.$content.innerHTML = html;

        if (new RegExp(this.route + '/(.+)$').test(window.location.pathname) !== false) {
            this.loadChatDetail();
        }
    }

    bindLinks() {
        this.$content.querySelectorAll('.chat-link').forEach($el => {
            $el.addEventListener('click', async e => {
                e.preventDefault();
                window.history.pushState({}, '', e.target.closest('.chat-link').getAttribute('href'));
                this.loadChatDetail();
            });
        });
        let $form = this.$content.querySelector('form');
        $form.addEventListener('submit', async e => {
            e.preventDefault();
            let response = await Helper.fetch($form.getAttribute('action'), {
                method: $form.getAttribute('method'),
                body: new URLSearchParams(new FormData($form))
            });
            if (response.success === true) {
                $form.reset();
                window.history.pushState({}, '', '/chats/' + response.data.chat_id);
                this.init();
            }
        });
    }

    loadChatDetail() {
        let cd = new ChatDetail();
        cd.init();
    }
}
