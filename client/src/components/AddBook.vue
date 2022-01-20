<template>
  <form>
    <fieldset>
      <div class="form-group">
        <label class="form-label mt-4">Book Title*</label>
        <input
          type="text"
          class="form-control"
          placeholder="Book Title"
          v-model="title"
        />
        <label for="exampleInputEmail1" class="form-label mt-4">Author*</label>
        <input
          type="text"
          class="form-control"
          placeholder="Author"
          v-model="author"
        />
      </div>

      <button @click.prevent="addBook" class="btn btn-info">Add Book</button>
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
      //   const url = "http://localhost:3000/results";
      //   console.log("title: ", this.title);
      //   console.log("author: ", this.author);

      const title = this.title;
      const author = this.author;
      const data = { title, author };

      //   const options = {
      //     method: "POST",
      //     header: {
      //       "Content-Type": "application/json",
      //     },
      //     mode: "cors",
      //     body: JSON.stringify({ data: "data" }),
      //   };
      //   fetch(url, options as any)
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log("success: ", data);
      //     })
      //     .catch((error) => {
      //       console.error("Error ", error);
      //     });

      //   const data = { username: "example" };

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
      //   options.body = JSON.stringify(jsonData);

      //   fetch(url, options)
      //     .then((response) => {
      //       return response.json();
      //     })
      //     .then((result) => {
      //       console.log("result: ", result);
      //     });

      /*
        Reset the form values
      */
      this.title = "";
      this.author = "";
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
</style>
