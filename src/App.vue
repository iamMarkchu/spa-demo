<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from './components/layouts/NavBar'
  export default {
      name: 'app',
      components: {
          NavBar
      }
  }
</script>
<style lang="scss">
  @import "~bootstrap/scss/bootstrap";
  body {
    margin: 0;
    font-family: Nunito,sans-serif;
    font-size: .9rem;
    font-weight: 400;
    line-height: 1.6;
    color: #212529;
    text-align: left;
    background-color: #f8fafc;
  }
</style>
