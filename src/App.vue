<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <Header msg="Header"/>
    <router-view/>
    <Footer msg="Footer"/>
  </div>
</template>



<script>
// 引用模組
import Header from "./views/header/Header.vue";
import Footer from "./views/footer/Footer.vue";
export default {
  // 引用模組
  components: {
    Header,
    Footer
  }
};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body {
  margin: 0;
}
</style>
