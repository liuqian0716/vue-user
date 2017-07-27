<template>
  <ul>
    <li v-for="item in data" @click="getTitle(item.title)">{{item.title}}</li>
  </ul>
</template>
<script>
  export default {
    props: ['data'],
    methods: {
      getTitle (title) {
        this.$emit('changeTitle', title)
      }
    }
  }
</script>
<style>
li{list-style:none;}
li{width:80%;height:30px;line-height:30px;margin:0 10%;text-align:center;}
</style>
