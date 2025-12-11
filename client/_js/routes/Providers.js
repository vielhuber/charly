import Helper from '../global/Helper';

export default class Providers {
    route = '/providers';

    async init() {
        this.$content = document.querySelector('.content');
        await this.preloadData();
        await this.buildHtml();
        Helper.updateTitle('Providers');
    }

    async preloadData() {
        this.response = await Helper.fetch('/api/providers', {
            method: 'GET'
        });
    }

    async buildHtml() {
        let html = '';

        html += '<h2>Providers</h2>';

        html += '<ul>';
        this.response.data.forEach(data_value => {
            html += `
                <li>
                    ${JSON.stringify(data_value)} -

                    <form
                        class="general-form"
                        method="post"
                        action="/api/providers/update"
                    >
                        <input type="hidden" name="id" value="${data_value.id}" />
                        <input type="text" required="required" name="name" value="${data_value.name}" placeholder="Name" />
                        <select name="service" required="required">
                            <option value="">Service</option>
                            <option value="chatgpt" ${data_value.service === 'chatgpt' ? 'selected' : ''}>ChatGPT</option>
                            <option value="claude" ${data_value.service === 'claude' ? 'selected' : ''}>Claude</option>
                            <option value="google" ${data_value.service === 'google' ? 'selected' : ''}>Gemini</option>
                            <option value="grok" ${data_value.service === 'grok' ? 'selected' : ''}>Grok</option>
                            <option value="deepseek" ${data_value.service === 'deepseek' ? 'selected' : ''}>DeepSeek</option>
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
                <input type="text" required="required" name="name" value="" placeholder="Name" />
                <select name="service" required="required">
                    <option value="">Service</option>
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
