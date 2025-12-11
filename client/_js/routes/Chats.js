import Helper from '../global/Helper';
import ChatDetail from '../modules/ChatDetail';

export default class Chats {
    route = '/chats';

    async init() {
        this.$content = document.querySelector('.content');
        await this.buildHtml();
        this.bindLinks();
        Helper.updateTitle('Chats');
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

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/chats/create"
                data-target="/api/chats/%ID%"
                data-clear-form
        >
                <input type="text" required="required" name="name" value="" placeholder="Name..." />
                <button type="submit">Create</button>
            </form>
        `;

        this.$content.innerHTML = html;

        if (new RegExp(this.route + '/(.+)$').test(window.location.pathname) !== false) {
            this.loadChatDetail();
        }
    }

    bindLinks() {
        this.$content.querySelectorAll('.chat-link').forEach($el => {
            $el.addEventListener('click', async e => {
                e.preventDefault();
                Helper.setUrl(e.target.closest('.chat-link').getAttribute('href'));
                this.loadChatDetail();
            });
        });
    }

    loadChatDetail() {
        let cd = new ChatDetail();
        cd.init();
    }
}
