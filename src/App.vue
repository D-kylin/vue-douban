<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <my-tab />
  </div>
</template>

<script>
import MyTab from 'src/components/Tab'
export default {
  name: 'App',
  components: {
      MyTab
  },
  beforeCreate() {
      this.$store.dispatch('LOAD_TOP250_LIST')
  }
}
</script>

<style>
@import 'style/common.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
