<template>
  <div id="login">
    <img alt="logo" src="../assets/logo.png">
    <h1 id="title">×CHANGE</h1>
    <h2 id="subtitle">the crossroads to knowledge</h2>
    <input type="text" placeholder="E-Mail Address" v-model="email" />
    <br />
    <input type="password" placeholder="Password" v-model="password" />
    <br />
    <button @click="signup()">SIGN UP</button> or <button @click="login()">LOG IN</button>
    <p class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => {
    return {
      email: "",
      password: "",
      error: ""
    }
  },
  methods: {
    signup() {

      if (this.email && this.password) {    
        this.error = "";
        // thing
      } else {
        this.error = "Please provide the requested information."
      }
    },
    login() {
      if (this.email && this.password) {
        this.$cookies.set("LoggedIn", true)
        this.$cookies.set("email", this.email)
        this.error = ""
      } else {
        this.error = "Please provide the requested information."
      }
    }
  }
};
</script>

<style>

#title {
  font-size: 400%;
  margin: .5em 0 0;
}
#subtitle {
  font-size: 100%;
}

button, .button {
  border: none;
  font-weight: bold; color: #fff;
  padding: .5em 1em;
  margin: 0.5em;
  border-radius: .5em;
  background: rgb(20, 196, 250);
  cursor: pointer;
}

input[type="text"], input[type="password"] {
  border: none;
  background: #eee;
  padding: .5em 1em;
  margin: 0.25em;
  border-radius: .25em;
}

.error {
  color: #f00;
  font-size: 80%;
}
</style>
