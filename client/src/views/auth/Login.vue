<template>
  <!--<form @submit.prevent="handleSubmit">-->
  <div>
    <Navbar />

    <form>
      <h2>Login</h2>
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
            placeholder="luke.skywalker@theforce.com"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4"
            >Password</label
          >
          <input
            type="password"
            name="password"
            class="form-control"
            id="inputPassword"
            placeholder="********"
            v-model="password"
            required
          />
        </div>

        <button type="submit" @click="loginHandler" class="btn btn-info">
          Login
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { ref } from "vue";
// import { useRouter } from "vue-router";
// import useLogin from "@/composables/useLogin.js";
import Navbar from "../../components/Navbar.vue";

export default Vue.extend({
  components: {
    Navbar,
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