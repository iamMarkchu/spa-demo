<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>
<script>
  import NavBar from './components/layouts/NavBar'
  import JwtToken from './utils/jwtToken'
  export default {
      name: 'app',
      created() {
          if (JwtToken.getToken()) {
              this.$store.dispatch('setAuthUser').then(() => {
                  console.log('user get success')
              })
          }
      },
      components: {
          NavBar
      }
  }
</script>
<style lang="scss">
  $gap: 64px !default
  $fullhd: 1152px + (2 * $gap) !default
  @import "~bulma/bulma.sass";
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
  .right-block {
    margin-bottom: 20px;
  }
</style>
