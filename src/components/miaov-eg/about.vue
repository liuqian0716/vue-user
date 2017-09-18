<template>
  <div style="height: 2000px;">
    <div>关于我们</div>
    <ul class="nav">
      <router-link :to="{name:'about'}" exact tag="li">
        <a>Study</a>
      </router-link>
      <router-link :to="{name:'work'}" tag="li">
        <a>Work</a>
      </router-link>
      <router-link :to="{name:'hobby'}" tag="li">
        <a>Hobby</a>
      </router-link>
      <!-- <router-link to="/about" exact tag="li">
        <a>Study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>Work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>Hobby</a>
      </router-link> -->
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: 'about'
    }
</script>
<style>

</style>
