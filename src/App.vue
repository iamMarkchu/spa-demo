<template>
  <div id="app">
    <nav-bar></nav-bar>
    <notification-component :is-show="notiShow" :noti-type="notiType" :noti-text="notiText"></notification-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>
<script>
  import NavBar from './components/layouts/NavBar'
  import NotificationComponent from './components/commons/Notification'
  import FooterComponent from './components/layouts/Footer'
  import JwtToken from './utils/jwtToken'
  import { mapState } from "vuex"
  export default {
      name: 'app',
      created() {
          if (JwtToken.getToken()) {
              this.$store.dispatch('setAuthUser').then(() => {
                  console.log('user get success')
              })
          }
      },
      computed: {
          ...mapState([
              'notiShow', 'notiType', 'notiText'
          ])
      },
      components: {
          NavBar,NotificationComponent,FooterComponent
      }
  }
</script>
<style lang="scss">
  $gap: 64px !default
  $fullhd: 1152px + (2 * $gap) !default
  $fa-font-path:        "~@fortawesome/fontawesome-free/webfonts";
  @import "~@fortawesome/fontawesome-free/scss/fontawesome";
  @import "~@fortawesome/fontawesome-free/scss/solid";
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
