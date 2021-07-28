import { apiClient } from "./apiClient";
import Aes from 'crypto-js/aes'

export async function registerUser(email, password) {

    const randomKey = new Uint8Array(128);
    window.crypto.getRandomValues(randomKey);
    const auth = Aes.encrypt(window.btoa(randomKey), password).toString();

    return apiClient
        .post('/registration', {
            email,
            password,
            auth,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            return response.data
        })
}

export async function loginUser(login, password) {

    return apiClient
      .post('/login', {
          login,
          password
      }, {
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(response => {
        return response.data
      })
}
