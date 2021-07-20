<template>
  <router-view @logged-in="loginUser" />
  <button @click="decrypt(this.password)">ddd</button>
</template>

<script>
import axios from "axios";
import Aes from 'crypto-js/aes'
import { enc } from 'crypto-js'

const baseURL = "http://localhost:8080";

const service = axios.create({
  baseURL
});

export default {
  name: 'App',
  data () {
    return {
      login: '',
      password: '',
      auth: '',
    }
  },
  methods: {
    loginUser(auth) {
      
      this.login = auth[0]
      this.password = auth[1]

      service
        .post('/login', {
            login : auth[0],
            password : auth[1]
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        )
        .then(response => {

          console.log(response.data)

            this.auth = response.data.auth;

            console.log(this.auth)
        }).catch(error => {
            if(error.response) {
                error = error.response.data;
            } else {
                error = 'Unknown.'
            }
            console.log(error);
        })
},
    decrypt(password) {
      this.$store.commit('increment');
      return Aes.decrypt(this.auth, password).toString(enc.Utf8);
    }
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

* {
  margin: 0;
}


#app {
  margin-top: 30vh;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eb4634;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
