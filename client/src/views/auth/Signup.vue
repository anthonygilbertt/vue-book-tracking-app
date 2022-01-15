<template>
  <!--  <form @submit.prevent="handleSubmit">-->

  <div>
    <div>
      <!--<form @submit.prevent="handleSubmit">-->
      <form>
        <h2>Sign up</h2>
        <label for="name">Name:</label>
        <!--<input type="email" name="email" v-model="email" required />-->
        <input type="name" name="name" required />
        <label for="email">Email:</label>
        <!--<input type="email" name="email" v-model="email" required />-->
        <input type="email" name="email" required />

        <label for="password">Password:</label>
        <!--<input type="password" name="password" v-model="password" required />-->
        <input type="password" name="password" required />

        <button>Sign up</button>

        <div>error</div>
      </form>

      <form>
        <fieldset>
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label mt-4"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted"
              >I'm going to sell your email for crypto.</small
            >
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label mt-4"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <button type="submit" class="btn btn-primary">Sign Up</button>
        </fieldset>
      </form>
    </div>
  </div>
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