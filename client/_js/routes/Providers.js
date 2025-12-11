import Helper from '../global/Helper';

export default class Providers {
    route = '/providers';

    async init() {
        this.$content = document.querySelector('.content');
        await this.buildHtml();
        Helper.updateTitle('Providers');
    }

    async buildHtml() {
        let response = await Helper.fetch('/api/providers', {
            method: 'GET'
        });

        let html = '';

        html += '<h2>Providers</h2>';

        html += '<ul>';
        response.data.forEach(data_value => {
            html += `
                <li>
                    ${JSON.stringify(data_value)} -

                    <form
                        class="general-form"
                        method="post"
                        action="/api/providers/update"
                    >
                        <input type="hidden" name="id" value="${data_value.id}" />
                        <select name="type" required="required">
                            <option value="">Typ</option>
                            <option value="chatgpt" ${data_value.type === 'chatgpt' ? 'selected' : ''}>ChatGPT</option>
                            <option value="claude" ${data_value.type === 'claude' ? 'selected' : ''}>Claude</option>
                            <option value="google" ${data_value.type === 'google' ? 'selected' : ''}>Gemini</option>
                            <option value="grok" ${data_value.type === 'grok' ? 'selected' : ''}>Grok</option>
                            <option value="deepseek" ${data_value.type === 'deepseek' ? 'selected' : ''}>DeepSeek</option>
                        </select>
                        <input type="text" required="required" name="api_key" value="${data_value.api_key}" placeholder="sk-..........." />
                        <button type="submit">Update</button>
                    </form>

                    <form
                        class="general-form"
                        method="post"
                        action="/api/providers/delete"
                    >
                        <input type="hidden" name="id" value="${data_value.id}" />
                        <button class="delete">Delete</button>
                    </form>
                </li>
            `;
        });
        html += '</ul>';

        html += '<h3>Neuen Anbieter anlegen</h3>';

        html += `
            <form
                class="general-form"
                method="post"
                action="/api/providers/create"
                data-clear-form
            >
                <select name="type" required="required">
                    <option value="">Typ</option>
                    <option value="chatgpt">ChatGPT</option>
                    <option value="claude">Claude</option>
                    <option value="google">Gemini</option>
                    <option value="grok">Grok</option>
                    <option value="deepseek">DeepSeek</option>
                </select>
                <input type="text" required="required" name="api_key" value="" placeholder="sk-..........." />
                <button type="submit">Create</button>
            </form>
        `;

        this.$content.innerHTML = html;
    }
}
