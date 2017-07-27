<template>
  <div class="box">
    <input @click="showList" type="text" :value="title" />
  </div>
</template>

<script>
  export default {
    name: 'selectinput',
    props: ['isShow', 'title'],
    data () {
      return {
        me: 'aa'
      }
    },
    computed: {
      initShow () {
        return this.isShow
      }
    },
    methods: {
      showList () {
        this.$emit('update:isShow', !this.initShow)
      }
    }
  }
</script>

<style>
  .box {
    width: 100%;
  }

  input {
    height: 30px;
    width: 80%;
    margin: 10px 10%;
  }
</style>

