import Helper from '../global/Helper';

export default class Home {
    route = '/$';

    async init() {
        await this.buildHtml();
        Helper.updateTitle('Home');
    }

    async buildHtml() {
        let response = await Helper.fetch('/api/home', {
            method: 'GET'
        });

        document.querySelector('.content').innerHTML = JSON.stringify(response.data);
    }
}
