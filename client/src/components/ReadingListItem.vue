<template>
  <!--
  <md-list-item>
    {{ readingitem.text }}
  </md-list-item>
    -->
  <div>
    <button id="deletebutton" @click="removereading">Delete</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    readingitem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    removeReading() {
      console.log("ReadingListItem component");
    },
  },
});
</script>
<style>
#deletebutton {
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff5252;
  min-width: 88px;
  height: 36px;
  margin: 6px 8px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: white;
  border: 0px;
  cursor: pointer;
}
</style>