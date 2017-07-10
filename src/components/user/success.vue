<template>
	<div>
		<h1>成功登陆！</h1>
		<p>{{message}}</p>
		<p>{{name}}</p>
		<button @click="btn">点击改变</button>
    <img :src="url" alt="">
    <p @click="ge">我是刘茜</p>
	</div>
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
