<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <Header msg="Book Tracker" /> -->
    <Header />
    <!-- <Toread v-bind:toreadcount="2" /> -->
    <!-- <Reading v-bind:readingcount="5" /> -->
    <!-- <Read v-bind:readcount="5" /> -->
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from "@/components/Header.vue";
// import Toread from "./components/Toread.vue";
// import Reading from "./components/Reading.vue";
// import Read from "./components/Read.vue";
// import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    // HelloWorld,
    Header,
    // Toread,
    // Reading,
    // Read,
    // Footer,
  },
});
</script>
