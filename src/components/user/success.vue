<template>
  <transition  name="fade">
    <div>
      <h1>成功登陆！</h1>
      <p>{{message}}</p>
      <p>{{name}}</p>
      <button @click="btn">点击改变</button>
      <img :src="url" alt="">
      <p>我是刘茜</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'res',
  data () {
    return {
      name: 'liuqian',
      message: 'nextTick',
      url: '/static/img/green.png'
    }
  },
  created: function () {
    var test = 'aa'
    this.$nextTick(function () {
      console.log('liuqian')
    })
  },
  methods: {
    btn: function () {
      this.$router.push({name: 'child', params: {pay: 'aaa'}}) // params的用法
    }
  }
}
</script> 
<style scoped>
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

