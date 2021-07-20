import { service } from "./service";
import Aes from 'crypto-js/aes'

export async function registerUser(email, password) {

    const randomKey = new Uint8Array(128);
    window.crypto.getRandomValues(randomKey);
    const auth = Aes.encrypt(window.btoa(randomKey), password).toString();

    service
        .post('/registration', {
            email,
            password,
            auth
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
}

