<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark footer" id="footer">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarColor02">
        <p>
          Made with <img alt="Vue logo" src="../assets/logo.png" />ue.js by
          Anthony Gilbert
        </p>
      </div>
    </div>
  </nav>
</template>

<script scoped>
export default {
  name: "Footer",
  props: {},
};
</script>

<style>
img {
  width: 20px;
}
.footer-class {
  background-color: #ffffff;
  /*
  background-color: teal;
  */
  position: absolute;
  line-height: initial;
  margin-top: 7%;
  margin-bottom: 0px !important;
  padding-top: 3%;
  padding-bottom: 3%;
  bottom: 0;
  width: 100%;
  box-shadow: 2px 0px 0 0px rgb(0 0 0 / 20%), 1px 1px 3px 0px rgb(0 0 0 / 14%),
    3px 1px 0 0 rgb(0 0 0 / 12%);
}
p {
  text-align: center;
  height: 1vh;
  padding-left: 40%;
}
#footer {
  margin-top: 5%;

  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  text-align: center;
}
</style>
