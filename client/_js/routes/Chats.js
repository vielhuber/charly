import Helper from '../global/Helper';
import ChatDetail from '../modules/ChatDetail';

export default class Chats {
    route = '/chats';

    async init() {
        await this.buildHtml();
        this.bindLinks();
    }

    async buildHtml() {
        document.querySelector('.content').innerHTML = 'CHATS!!';

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

        document.querySelector('.content').innerHTML = html;

        if (new RegExp(this.route + '/\\d+$').test(window.location.pathname) !== false) {
            this.loadChatDetail();
        }
    }

    bindLinks() {
        document.querySelectorAll('.content .chat-link').forEach($el => {
            $el.addEventListener('click', async e => {
                e.preventDefault();
                window.history.pushState({}, '', e.target.closest('.chat-link').getAttribute('href'));
                this.loadChatDetail();
            });
        });
    }

    loadChatDetail() {
        let cd = new ChatDetail();
        cd.init();
    }
}
