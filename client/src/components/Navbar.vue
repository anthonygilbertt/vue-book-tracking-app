<template>
  <div class="md-layout md-gutter mdc-top-app-bar header-class md-elevation-1">
    <!-- <md-avatar id="avataricon"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="nav-link active navbar-brand" to="/"
          ><img
            class="md-layout-item"
            id="book-icon"
            alt="Book Icon."
            src="https://www.graphicsfuel.com/wp-content/uploads/2012/07/books-icon-512.png"
        /></router-link>

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
              <router-link class="nav-link active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup">Signup</router-link>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Filters</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">To Read</a>
                <a class="dropdown-item" href="#">Reading</a>
                <a class="dropdown-item" href="#">Read</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Archived</a>
              </div>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search for a book"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    <div>
      <!--
      <p v-if="bookStatusesData">Book Statuses: {{ bookStatusesData }}</p>
      <p v-if="getBooks">Books Data: {{ booksData }}</p>
      -->
    </div>

    <!-- </md-avatar> -->
    <!-- <button @click.prevent="handleClick()">Press me</button> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  props: {
    msg: String,
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
.nav-item,
.nav-link {
  color: rgb(215, 240, 240);
}
</style>
