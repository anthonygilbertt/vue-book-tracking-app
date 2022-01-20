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
    <div class="book-list form-group" v-for="book in booksData" :key="book.id">
      <label for="lname" class="col-form-label mt-1">Title:</label>
      <input type="text" class="form-control" :value="book.title" />
      <label for="lname" class="col-form-label mt-1">Author:</label>
      <input type="text" class="form-control" :value="book.author" />
    </div>
    <!--
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
      <br />
      <ul v-for="book in booksData" :key="book.id">
        <li>Title: {{ book.title }}</li>
        <li>Author: {{ book.author }}</li>
      </ul>
    <button @click="getStatuses">Get Book Statuses</button>
    |
    <button @click="getBooks">Get Books</button>
    <button class="btn btn-primary" @click="getStatuses">
    <button class="btn btn-primary" @click="getBooks">Get Books</button>
    -->
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "../components/Navbar.vue";
import AddBook from "../components/AddBook.vue";
// import Toread from "./components/Toread.vue";
// import Reading from "./components/Reading.vue";
// import Read from "./components/Read.vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
  name: "Home",
  components: {
    // HelloWorld,
    Navbar,
    AddBook,
    // Toread,
    // Reading,
    // Read,
    Footer,
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
.book-list {
  padding-top: 4%;
}
/*

input[type="text"] {
  width: 100%;
  padding: 0 5% 0 5%;
  margin: 0 30% 0 30%;
  box-sizing: border-box;
}
*/
</style>
