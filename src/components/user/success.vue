<template>
  <transition name="fade-right" mode="out-in">
    <div>
      <h1>成功登陆！</h1>
      <p>{{message}}</p>
      <p>{{name}}</p>
      <button @click="btn">点击改变</button>
      <img :src="url" alt="">
      <p>我是刘茜</p>
      <router-view></router-view>
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
  },
  beforeRouteEnter (to, from, next) {
    console.log('ooo')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('2')
    console.log(this.$route, to)
  }
}
</script>
<style scoped>
.fade-left-enter-active, .fade-left-leave-active{transition: 1s;}
.fade-left-enter{
  transform: translateX(100%)
}
.fade-left-leave-to{
  transform: translateX(-100%)
}
.fade-right-enter-active, .fade-right-leave-active{transition: 1s;}
.fade-right-enter{
  transform: translateX(-100%)
}
.fade-right-leave-to{
  transform: translateX(100%)
}
</style>

