import Helper from '../global/Helper';

export default class Knowledge {
    route = '/knowledge';

    async init() {
        this.$content = document.querySelector('.content');
        await this.buildHtml();
        Helper.updateTitle('Knowledge');
    }

    async buildHtml() {
        let response = await Helper.fetch('/api/knowledge', {
            method: 'GET'
        });

        let html = '';

        html += '<h2>Knowledge</h2>';

        html += '<ul class="drag-and-drop-list">';
        response.data.forEach(data__value => {
            html += `
                <li>
                    <span class="drag-and-drop-list__handle">☰</span>

                    ${JSON.stringify(data__value)} -

                    <form
                        class="general-form"
                        method="post"
                        action="/api/knowledge/update"
                    >
                        <input type="hidden" name="id" value="${data__value.id}" />
                        <input type="text" readonly="readonly" required="required" name="order" value="${data__value.order}" placeholder="Order..." />

                        <input type="text" required="required" name="name" value="${data__value.name}" placeholder="Name..." />
                        <textarea name="content" required="required" placeholder="Content...">${data__value.content}</textarea>
                        <button type="submit">Update</button>
                    </form>

                    <form
                        class="general-form"
                        method="post"
                        action="/api/knowledge/delete"
                    >
                        <input type="hidden" name="id" value="${data__value.id}" />
                        <button class="delete">Delete</button>
                    </form>
                </li>
            `;
        });
        html += '</ul>';

        html += '<h3>Neuen Wissenseintrag anlegen</h3>';

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/knowledge/create"
                data-clear-form
            >
                <input type="text" required="required" name="name" value="" placeholder="Name..." />
                <textarea name="content" required="required" placeholder="Content..."></textarea>
                <button type="submit">Create</button>
            </form>
        `;

        this.$content.innerHTML = html;
    }
}
