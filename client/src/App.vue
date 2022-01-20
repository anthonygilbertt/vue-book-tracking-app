<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
// import { ref } from "vue";
// import { useRouter } from "vue-router";
// import useLogin from "@/composables/useLogin.js";
import Footer from "./components/Footer.vue";

export default Vue.extend({
  components: {
    Footer,
  },
  // export default {
  //   setup() {
  //     const email = ref("");
  //     const password = ref("");
  //     const router = useRouter();
  //     const { error, login } = useLogin();
  //     const handleSubmit = async () => {
  //       console.log(email.value, password.value);
  //       await login(email.value, password.value);
  //       if (!error.value) {
  //         router.push({ name: "Home" });
  //       }
  //     };
  //     return { email, password, handleSubmit, error };
  //   },
  // };
  methods: {
    loginHandler(e) {
      console.log(e);
    },
  },
});
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/*
html,
body {
  background-color: rgb(10, 190, 137);
}
*/
</style>
