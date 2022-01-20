<template>
  <div>
    <Navbar />

    <form @submit.prevent="handleSignup">
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
            v-model="username"
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
            v-model="email"
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
            v-model="password"
          />
        </div>
        <button type="submit" class="btn btn-info">Sign Up</button>
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
    return {
      username: "" as string,
      email: "" as string,
      password: "" as string,
    };
  },
  methods: {
    async handleSignup() {
      console.log("username:", this.username);
      console.log("email: ", this.email);
      console.log("password: ", this.password);
    },
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
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Raleway", "sans-serif";
  color: var(--gray);
}
form {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 5%;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 1px 2px 3px rgba(50, 50, 50, 0.05);
  border: 1px solid var(--navy-blue);
  background: white;
}

input,
textarea {
  border: 0;
  border-bottom: 1px solid var(--navy-blue);
  padding: 10px;
  outline: none;
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 20px auto;
}
</style>