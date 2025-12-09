import Helper from '../global/Helper';

export default class Home {
    route = '/$';

    async init() {
        document.querySelector('.content').innerHTML = 'HOME!!';

        let response = await Helper.fetch('/api/home', {
            method: 'GET'
        });

        document.querySelector('.content').innerHTML = JSON.stringify(response.data);
    }
}
