<template>
  <div class="md-layout md-gutter mdc-top-app-bar header-class md-elevation-1">
    <!-- <md-avatar id="avataricon"> -->

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img
            class="md-layout-item"
            id="book-icon"
            alt="Book Icon."
            src="https://www.graphicsfuel.com/wp-content/uploads/2012/07/books-icon-512.png"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#"
                >Home
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search for a book"
            />
            <button class="btn btn-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div>
      <h1 class="md-layout-item">{{ test }}</h1>
      <p>{{ someSexyJSONData }}</p>
      <button @click="getData">Get that sexy JSON data</button>
    </div>

    <!-- </md-avatar> -->
    <!-- <button @click.prevent="handleClick()">Press me</button> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  props: {
    msg: String,
  },
  data() {
    return {
      test: "Book Tracker" as string,
      someSexyJSONData: null as null,
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
    getData() {
      fetch("http://localhost:3000/getStatuses")
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((res) => {
          console.log(res);
          this.someSexyJSONData = res;
        });
    },
  },
});
</script>


<style scoped>
h1 {
  color: aliceblue;
  margin-left: -50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #147449;
}
.header-class {
  background-color: teal;
}
#book-icon {
  width: 50px;
  height: 50px;
  padding-left: 0%;
  margin-left: 0%;
}
#avataricon {
  margin-left: 50px;
}
</style>
