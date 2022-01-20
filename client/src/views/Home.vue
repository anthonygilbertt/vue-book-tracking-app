<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <!-- <Navbar msg="Book Tracker" /> -->
    <Navbar />
    <!-- <Toread v-bind:toreadcount="2" /> -->
    <!-- <Reading v-bind:readingcount="5" /> -->
    <!-- <Read v-bind:readcount="5" /> -->
    <!-- <Footer /> -->
    <AddBook />
    <ul v-for="book in booksData" :key="book.id">
      <li>Title: {{ book.title }}</li>
      <li>Author: {{ book.author }}</li>
    </ul>
    <button @click="getStatuses">Get Book Statuses</button>
    |
    <button @click="getBooks">Get Books</button>
    <!--
    <button class="btn btn-primary" @click="getStatuses">
    <button class="btn btn-primary" @click="getBooks">Get Books</button>
    -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Navbar from "../components/Navbar.vue";
import AddBook from "../components/AddBook.vue";
// import Toread from "./components/Toread.vue";
// import Reading from "./components/Reading.vue";
// import Read from "./components/Read.vue";
// import Footer from "./components/Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    // HelloWorld,
    Navbar,
    AddBook,
    // Toread,
    // Reading,
    // Read,
    // Footer,
  },
  data: () => {
    return {
      test: "Book Tracker" as string,
      bookStatusesData: null,
      booksData: null,
      // bookTitleArray: [] as object,
      bookTitleArray: [],
      // use lower-case primitives for consistency
    };
  },
  methods: {
    //   handleClick(event: any): string {
    //     console.log(typeof event);
    //     console.log("button clicked");
    //     // this.test = 1;
    //     // this.test = `${this.test}  1`;
    //     return this.test;
    //   },
    getStatuses() {
      fetch("http://localhost:3000/getStatuses")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res);
          this.bookStatusesData = res;
        });
    },
    getBooks() {
      const bookTitleArray = [];

      fetch("http://localhost:3000/getBooks")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log("res: ", res);
          this.booksData = res;

          for (let book in res) {
            bookTitleArray.push(book);
          }
          this.bookTitleArray.value = bookTitleArray;
        });
    },
  },
  mounted() {
    const bookTitleArray = [];

    fetch("http://localhost:3000/getBooks")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.booksData = res;

        for (let book in res) {
          bookTitleArray.push(book);
        }
        this.bookTitleArray.value = bookTitleArray;
      });
  },
  updated() {
    const bookTitleArray = [];

    fetch("http://localhost:3000/getBooks")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.booksData = res;

        for (let book in res) {
          bookTitleArray.push(book);
        }
        this.bookTitleArray.value = bookTitleArray;
      });
  },
});
</script>
<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
