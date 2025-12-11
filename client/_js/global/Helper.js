import Store from './Store';

export default class Helper {
    static fetch(url, args) {
        if (args.cache === undefined) {
            args.cache = 'no-cache';
        }
        if (args.headers === undefined) {
            args.headers = {};
        }
        if (args.method === undefined) {
            args.method = 'GET';
        }
        if (args.method === 'POST' && args.headers['Content-Type'] === undefined) {
            args.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        }
        return new Promise(resolve => {
            Store.api
                .fetch(url, args)
                .then(response => {
                    let data = response.json();
                    return data;
                })
                .catch(error => {
                    return { success: false, message: error };
                })
                .then(response => {
                    resolve(response);
                });
        });
    }

    static setUrl(url = '/') {
        window.history.pushState({}, '', url);
    }

    static updateTitle(title = null) {
        let value = '';
        value += '🤖charly🤖';
        if (title) {
            value += ' ';
            value += '//';
            value += ' ';
            value += title;
        }
        document.title = value;
    }

    static buildSelect(name = null, data = null, id = null, disabled = false) {
        let html = '';
        html += '<select required="required" name="' + name + '"' + (disabled ? ' disabled="disabled"' : '') + '>';
        html += '<option value=""></option>';
        if (id !== null) {
            let exists = false;
            data.forEach(data__value => {
                if (id === data__value.id) {
                    exists = true;
                }
            });
            if (exists === false) {
                html += '<option value="' + id + '" selected="selected">' + id + ' (UNBEKANNT!)</option>';
            }
        }
        data.forEach(data__value => {
            html +=
                '<option value="' +
                data__value.id +
                '"' +
                (id !== null && id === data__value.id ? ' selected="selected"' : '') +
                '>' +
                data__value.name +
                '</option>';
        });
        html += '</select>';
        return html;
    }
}
