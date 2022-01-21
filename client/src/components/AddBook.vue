<template>
  <form @submit.prevent="addBook">
    <fieldset>
      <div class="form-group">
        <label class="form-label mt-4">Book Title*</label>
        <input
          type="text"
          class="form-control"
          placeholder="Book Title"
          v-model="title"
        />
        <label for="inputAuthor" class="form-label mt-4">Author*</label>
        <input
          type="text"
          class="form-control"
          placeholder="Author"
          v-model="author"
        />
      </div>

      <button class="btn btn-info">Add Book</button>
    </fieldset>
  </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => {
    return {
      title: "" as string,
      author: "" as string,
    };
  },
  methods: {
    addBook() {
      console.log("title: ", this.title);
      console.log("author: ", this.author);

      const title = this.title;
      const author = this.author;
      const data = { title, author };

      fetch("http://localhost:3000/createBook", {
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
      this.title = "";
      this.author = "";
      alert("Book added");
    },
  },
});
</script>

<style scoped>
#inputbook {
  height: 32px;
  padding: 0;
  display: block;
  flex: 1;
  border: none;
  background: none;
  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: font-size, padding-top, color;
  font-family: inherit;
  font-size: 16px;
  line-height: 32px;
  background-color: white;
  box-sizing: inherit;
}
.formbox {
  padding-left: 20%;
  padding-right: 20%;
}
.formboxes {
  background-color: white;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Raleway", "sans-serif";
  color: var(--gray);
}

.btn {
  padding: 10px;
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
