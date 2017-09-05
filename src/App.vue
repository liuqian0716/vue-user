<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/" exact tag="li" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link :to="{path:'/document#abc'}" event="mouseover" active-class="activeClass">document</router-link>
        </li>
        <li>
          <router-link to="/about" event="mouseover">about</router-link>
        </li>
        <li>
          <router-link to="/user" event="mouseover">user</router-link>
        </li>
      </ul>
      <hr>
    </div>

    <!-- <router-view name="slider"></router-view> -->

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
