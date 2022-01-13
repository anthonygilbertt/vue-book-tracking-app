<template>
  <!--<form @submit.prevent="handleSubmit">-->

  <form>
    <h2>Login</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Login</button>
    <!--<div v-if="error">{{ error.value }}</div>-->
    <div>error.value</div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  // import { ref } from "vue";
  // import { useRouter } from "vue-router";
  // import useLogin from "@/composables/useLogin.js";
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
});
</script>