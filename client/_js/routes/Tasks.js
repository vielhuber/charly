import Helper from '../global/Helper';

export default class Tasks {
    route = '/tasks';

    async init() {
        await this.buildHtml();
        Helper.updateTitle('Tasks');
    }

    async buildHtml() {
        this.$content = document.querySelector('.content');

        let response = await Helper.fetch('/api/tasks', {
            method: 'GET'
        });

        let html = JSON.stringify(response.data);

        this.$content.innerHTML = html;
    }
}
