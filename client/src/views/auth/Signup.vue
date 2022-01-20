<template>
  <!--  <form @submit.prevent="handleSubmit">-->
  <div>
    <Navbar />

    <!--<form @submit.prevent="handleSubmit">-->
    <form>
      <h2>Sign up</h2>
      <fieldset>
        <div class="form-group">
          <label for="inputName" class="form-label mt-4">Name</label>
          <input
            type="name"
            class="form-control"
            id="inputName"
            aria-describedby="name"
            placeholder="Luke Skywalker"
            name="name"
            required
          />
          <label for="exampleInputEmail1" class="form-label mt-4"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="inputEmail"
            aria-describedby="email"
            placeholder="luke.skywalker@theforce.com"
            name="email"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="********"
            name="password"
            required
          />
        </div>
        <button
          type="submit"
          class="btn btn-info"
          @click.prevent="handleSignup"
        >
          Sign Up
        </button>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "../../components/Navbar.vue";

export default Vue.extend({
  components: {
    Navbar,
  },
  data: () => {
    return {};
  },
  // methods: {
  //   handleSignup() {
  //     console.log(this.name, this.email, this.password);
  //   },
  // },
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