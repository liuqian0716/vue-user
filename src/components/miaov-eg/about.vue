<template>
  <div>
    <div>关于我们</div>
    <ul>
      <!-- <router-link :to="{name: 'study'}" tag="li">
        <a>Study</a>
      </router-link>
      <router-link :to="{name: 'work'}" tag="li">
        <a>Work</a>
      </router-link>
      <router-link :to="{name: 'hobby'}" tag="li">
        <a>Hobby</a>
      </router-link> -->
      <router-link :to="{name:'about'}" tag="li">
        <a>Study</a>
      </router-link>
      <router-link :to="{name:'work'}" tag="li">
        <a>Work</a>
      </router-link>
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
