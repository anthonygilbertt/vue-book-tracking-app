<template>
  <!--<form @submit.prevent="handleSubmit">-->
  <div class="login">
    <Navbar />

    <form @submit.prevent="loginHandler">
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

        <button type="submit" class="btn btn-info">Login</button>
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
  data: () => {
    return {
      email: "" as string,
      password: "" as string,
    };
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
    async loginHandler() {
      console.log("email: ", this.email);
      console.log("password: ", this.password);

      const email = this.email;
      const password = this.password;
      const data = { email, password };

      fetch("http://localhost:3000/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          //   "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.email = "";
      this.password = "";
      alert("Logged In");
    },
  },
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

.btn {
  padding: 10px;
}
.login {
  padding-bottom: 5%;
  margin-bottom: 5%;
}
</style>