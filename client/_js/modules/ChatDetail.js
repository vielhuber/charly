import Helper from '../global/Helper';

export default class ChatDetail {
    async init() {
        document.querySelector('.chat-content').innerHTML = 'CHAT DETAIL!!';

        let id = window.location.pathname.split('/').pop();

        let response = await Helper.fetch('/api/chats/' + id, {
            method: 'GET'
        });

        document.querySelector('.chat-content').innerHTML = JSON.stringify(response.data);
    }
}
