<template>
  <div>
    <h3>Books Read</h3>
    <!-- <p>Total: {{readingcount}}</p> -->
    <form id="formbox">
      <!-- <md-field class="formboxes" md-inline> -->
      <!-- <label class="formboxes">Add a book you have read</label> -->
      <BaseInputText
        v-model="newReadText"
        placeholder="Add a book you have read"
        @keydown.enter="addedbook"
      />
      <md-button
        @click="addedbook"
        class="md-raised md-primary md-mini addbookbutn formboxes"
        >Add +</md-button
      >
      <!-- </md-field> -->
      <md-list id="toread-list" v-if="readlists.length">
        <ReadlistItem
          v-for="readlist in readlists"
          :key="readlist.id"
          :readlist="readlist"
          @removeread="deletebook"
        />
      </md-list>
      <p v-else>Nothing left in the list.</p>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import BaseInputText from "../components/BaseInputText.vue";
import ReadlistItem from "../components/ReadingListItem.vue";
export default Vue.extend({
  name: "Read",
  components: {
    BaseInputText,
    ReadlistItem,
  },
  data() {
    return {
      newReadText: "" as string,
      nextreadId: 1 as number,
      readlists: [
        // {
        //   id: nextreadId++,
        //   text: "Harry Potter",
        // },
      ] as object,
    };
  },
  methods: {
    addedbook() {
      const trimmedText = this.newReadText.trim();
      if (trimmedText) {
        // this.readlists.push({
        //   id: nextreadId++,
        //   text: trimmedText,
        // });
        this.newReadText = "";
      }
    },
    deletebook() {
      console.log("deleted book from list");
      // this.readlists = this.readlists.filter((readlist) => {
      //   // return readlist.id !== idToRemove;
      //   return;
      // });
    },
  },
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
#formbox {
  padding-left: 20%;
  padding-right: 20%;
}
.formboxes {
  background-color: white;
}
.green-butn {
  background-color: yellowgreen !important;
  color: white !important;
}
label {
  padding-left: 1em;
}
.addbookbutn {
  margin-top: -10px;
}
</style>

