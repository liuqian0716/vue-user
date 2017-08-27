<template>
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
</template>

<script>
export default {
  name: 'res',
  data () {
    return {
      name: 'liuqian',
<<<<<<< HEAD
      items: [
        { message: 'Foo' },
        { message: 'Bar' },
        {message: 'Abc'}
      ]
    }
  },
  methods: {
    btn: function () {
      this.$router.push({name: 'child', params: {pay: 'aaa'}}) // params的使用
=======
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
>>>>>>> e3aead92c453bbdedf98b60be5e5c5907e289747
    }
  }
}
</script> 
