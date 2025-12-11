import Helper from '../global/Helper';

export default class Home {
    route = '/$';

    async init() {
        this.$content = document.querySelector('.content');
        await this.preloadData();
        await this.buildHtml();
        Helper.updateTitle('Home');
    }

    async preloadData() {
        this.response = await Helper.fetch('/api/home', {
            method: 'GET'
        });
    }

    async buildHtml() {
        let html = '';

        html += '<h2>Home</h2>';

        html += '<img src="/logo.png" alt="Logo" />';

        html += JSON.stringify(this.response.data);

        this.$content.innerHTML = html;
    }
}
