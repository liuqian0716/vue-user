<template>
<<<<<<< HEAD

    <div>
      <h1>成功登陆！</h1>
      <p>{{message}}</p>
      <p>{{name}}</p>
      <button @click="btn">点击改变</button>
      <img :src="url" alt="">
      <p>我是刘茜</p>
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </div>
=======
	<div>
		<h1>成功登陆！</h1>
<<<<<<< HEAD
		<button @click="btn">点击</button>
    <ul>
      <li v-for="item in items" :id="item.message"></li>
    </ul>
=======
		<p>{{message}}</p>
		<p>{{name}}</p>
		<button @click="btn">点击改变</button>
    <img :src="url" alt="">
    <p @click="ge">我是刘茜</p>
>>>>>>> e3aead92c453bbdedf98b60be5e5c5907e289747
	</div>
>>>>>>> d5afe01d87a0368dde7f3940ea07f01111f77cd6
</template>

<script>
export default {
  name: 'res',
  data () {
    return {
      name: 'liuqian',
      message: 'nextTick',
      url: '/static/img/green.png',
      transitionName: 'fade-left'
    }
  },
  created: function () {
    var test = 'aa'
    this.$nextTick(function () {
      // console.log('liuqian')
    })
  },
  methods: {
    btn: function () {
      this.$router.push({name: 'child', params: {pay: 'aaa'}}) // params的用法
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    console.log(this.$router)
    if (isBack) {
      this.transitionName = 'fade-left'
    } else {
      this.transitionName = 'fade-right'
    }
    this.$router.isBack = false
    next()
  }
}
</script>
<style scoped>
.fade-left-enter-active, .fade-left-leave-active{transition: 1s;}
.fade-left-enter{
  transform: translateX(100%)
}
.fade-left-enter-to{
  transform: translateX(-100%)
}
.fade-right-enter-active, .fade-right-leave-active{transition: 1s;}
.fade-right-leave{
  transform: translateX(-100%)
}
.fade-right-leave-to{
  transform: translateX(100%)
}
</style>

