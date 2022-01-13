<template>
  <!--  <form @submit.prevent="handleSubmit">-->

  <div>
    <h2>Sign up</h2>

    <!--<div>
    <form @submit.prevent="handleSubmit">
      <h2>Sign up</h2>

      <label for="email">Email:</label>
      <input type="email" name="email" v-model="email" required />

      <label for="password">Password:</label>
      <input type="password" name="password" v-model="password" required />

      <button>Sign up</button>
  
      <div>error</div>
    </form>
  </div>
  --></div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  // import { ref } from "vue";
  // import useSignup from "@/composables/useSignup";
  // import { useRouter } from "vue-router";
  // export default {
  //   setup() {
  //     const email = ref("");
  //     const password = ref("");
  //     // const { error, isPending, signup } = useSignup(email, password);
  //     const { signup, error } = useSignup(email, password);
  //     const router = useRouter();
  //     const handleSubmit = async () => {
  //       // console.log(email.value, password.value);
  //       await signup(email.value, password.value);
  //       if (!error.value) {
  //         router.push({ name: "/" });
  //       }
  //       // try {
  //       // } catch (error) {
  //       // }
  //       console.log("success!!");
  //     };
  //     return { email, password, handleSubmit, error };
  //   },
  // };
});
</script>