import Helper from '../global/Helper';
export default class Skills {
    route = '/skills';

    async init() {
        this.$content = document.querySelector('.content');
        await this.preloadData();
        await this.buildHtml();
        Helper.updateTitle('Skills');
    }

    async preloadData() {
        this.response = await Helper.fetch('/api/skills', {
            method: 'GET'
        });
    }

    async buildHtml() {
        if (this.response.success === false) {
            console.log(response);
            this.$content.innerHTML = this.response.public_message;
            return;
        }

        let html = '';
        html += '<ul>';
        this.response.data.mcpServers.forEach(mcpServers__value => {
            html += `
                <li>
                    ${mcpServers__value.name} - ${mcpServers__value.id} - ${mcpServers__value.type}
                </li>
            `;
        });
        html += '</ul>';

        this.$content.innerHTML = html;
    }
}
