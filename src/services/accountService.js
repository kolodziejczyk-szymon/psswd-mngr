import { service } from "./service";

export async function getUsersAccounts(email) {
    return service
    .post('/account/all', {
        email,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.data.data.accounts
    })   
}


export async function createAccount(name, description, url, username, password, email) {

    return service
        .post('/account', {
            description,
            name,
            password,
            url,
            username,
            email,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.data
        })
}

export async function updateAccount(id, name, description, url, username, password) {

    return service
    .put('/account/edit', {
        id,
        description,
        name,
        password,
        url,
        username,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.data
    })
}

export async function deleteAccount(id) {

    return service
    .delete(`/account/delete${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.data
    })
}