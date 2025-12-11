import Helper from '../global/Helper';

export default class ChatDetail {
    async init() {
        await this.buildHtml();
        Helper.updateTitle('Chat Detail');
    }

    async buildHtml() {

        document.querySelector('.chat-content').innerHTML = 'CHAT DETAIL!!';

        let id = window.location.pathname.split('/').pop();

        let response = await Helper.fetch('/api/chats/' + id, {
            method: 'GET'
        });

        let html = '';

        html += JSON.stringify(response.data);

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/chats/delete"
                data-target="/api/chats"
            >
                <input type="hidden" name="id" value="${id}" />
                <button class="delete">Delete</button>
            </form>
        `;

        document.querySelector('.chat-content').innerHTML = html;
    }
}
