import Helper from '../global/Helper';
export default class Skills {
    route = '/skills';

    async init() {
        await this.buildHtml();
        Helper.updateTitle('Skills');
    }

    async buildHtml() {
        this.$content = document.querySelector('.content');

        let response = await Helper.fetch('/api/skills', {
            method: 'GET'
        });

        if (response.success === false) {
            console.log(response);
            this.$content.innerHTML = response.public_message;
            return;
        }

        let html = '';
        html += '<ul>';
        response.data.mcpServers.forEach(mcpServers__value => {
            html += `
                <li>
                    ${mcpServers__value.name} - ${mcpServers__value.type}
                </li>
            `;
        });
        html += '</ul>';

        this.$content.innerHTML = html;
    }
}
