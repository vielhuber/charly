import Store from './Store';

export default class Helper {
    static fetch(url, args) {
        if (args.cache === undefined) {
            args.cache = 'no-cache';
        }
        if (args.headers === undefined) {
            args.headers = { 'Content-Type': 'application/json' };
        }
        return new Promise(resolve => {
            Store.api
                .fetch(url, args)
                .then(response => {
                    let data = response.json(),
                        status = response.status;
                    if (status == 200 || status == 304) {
                        return data;
                    }
                    return { success: false, message: status };
                })
                .catch(error => {
                    return { success: false, message: error };
                })
                .then(response => {
                    resolve(response);
                });
        });
    }
}
