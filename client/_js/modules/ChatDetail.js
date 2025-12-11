import Helper from '../global/Helper';

export default class ChatDetail {
    async init() {
        await this.preloadData();
        await this.buildHtml();
        Helper.updateTitle('Chat Detail');
    }

    async preloadData() {
        this.providers = await Helper.fetch('/api/providers', {
            method: 'GET'
        });
        this.tasks = await Helper.fetch('/api/tasks', {
            method: 'GET'
        });
    }

    async buildHtml() {
        document.querySelector('.chat-content').innerHTML = 'CHAT DETAIL!!';

        let id = window.location.pathname.split('/').pop();

        let response = await Helper.fetch('/api/chats/' + id, {
            method: 'GET'
        });

        let html = '';

        html += JSON.stringify(response.data);

        html += '<h3>Messages</h3>';

        response.data.messages.forEach(message_value => {
            html += `<p>${message_value.user_id}</p>`;
            html += `<p>${message_value.content}</p>`;
            html += `
                <form
                    class="general-form"
                    method="post"
                    action="/api/chats-messages/delete"
                >
                    <input type="hidden" name="id" value="${message_value.id}" />
                    <button class="delete">Delete</button>
                </form>
            `;
        });

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/chats-messages/create"
            >
                <input type="hidden" name="chat_id" value="${id}" />
                <textarea name="content" required="required" placeholder="Message..."></textarea>
                <button class="Create">create</button>
            </form>
        `;

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/chats/update"
            >
                <input type="hidden" name="id" value="${id}" />
                <input type="text" required="required" name="name" value="${response.data.name}" placeholder="Name..." />
                ${Helper.buildSelect('provider_id', this.providers?.data, response.data.provider_id)}
                ${Helper.buildSelect('task_id', this.tasks?.data, response.data.task_id, true)}
                <button type="submit">Update</button>
            </form>
        `;

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/chats/delete"
                data-target="/chats"
            >
                <input type="hidden" name="id" value="${id}" />
                <button class="delete">Delete</button>
            </form>
        `;

        document.querySelector('.chat-content').innerHTML = html;
    }
}
