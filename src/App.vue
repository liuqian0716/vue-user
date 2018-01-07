<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/" exact tag="li">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link :to="{path:'/document'}" active-class="activeClass">document</router-link>
        </li>
        <li>
          <router-link to="/about" >about</router-link>
        </li>
        <li>
          <!--event="mouseover"-->
          <router-link to="/user">user</router-link>
        </li>
      </ul>
      <hr>
    </div>

    <router-view name="leftSli"></router-view>

    <router-view class="center"></router-view>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  // el: '#app',
  data () {
    return {
      index: '/home'
    }
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

</style>
