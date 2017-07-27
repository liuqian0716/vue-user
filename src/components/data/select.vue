<template>
  <div class="module">
    <select-input :is-show.sync="listShow" :title="title"></select-input>
    <list :data="listData" v-if="listShow" @changeTitle="titleHandle"></list>
  </div>
</template>
<script>
  import selectInput from './selectInput'
  import list from './list'
  let listData = [
    {
      title: 'javascript'
    },
    {
      title: 'html+css'
    },
    {
      title: 'jQuery'
    },
    {
      title: 'react'
    },
    {
      title: 'nodejs'
    }
  ]
  export default {
    components: {
      selectInput,
      list
    },
    data () {
      return {
        listShow: false,
        listData: listData,
        title: ''
      }
    },
    methods: {
      titleHandle (title) {
        console.log(title)
        this.title = title
      }
    }
  }
</script>
<style>
  *{margin:0;padding:0;}
  .module{width:300px;height:300px;background:#e3c5b1;margin:50px auto;}
</style>

