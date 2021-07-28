import { apiClient } from "./apiClient";

export async function getUsersAccounts(email) {
    return apiClient
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

    return apiClient
        .post('/account', {
            name: name,
            description,
            password,
            url,
            username,
            email
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.data
        })
}

export async function updateAccount(id, name, description, url, username, password) {

    return apiClient
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

    return apiClient
    .delete(`/account/delete/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        return response.data
    })
}