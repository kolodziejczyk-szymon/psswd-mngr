import { service } from "./service";

export async function createAccount(url, login, password) {

    return service
        .post('/account', {
            url,
            login,
            password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.data
        })
}
