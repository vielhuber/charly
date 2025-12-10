import Helper from '../global/Helper';

export default class Knowledge {
    route = '/knowledge';

    async init() {
        this.$content = document.querySelector('.content');

        let response = await Helper.fetch('/api/knowledge', {
            method: 'GET'
        });

        let html = JSON.stringify(response.data);

        this.$content.innerHTML = html;
    }
}
