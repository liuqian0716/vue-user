<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  // el: '#app',
  data () {
    return {
      'aa': 'liu'
    }
  },
  created () {
    console.log('1')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
/* .fade-left-enter-to {
  transform: translateX(0)
}
.fade-left-leave{
  transform: translateX(0)
} */

</style>
