<template>
	<div>
		<h1>成功登陆！</h1>
		<button @click="btn">点击</button>
    <ul>
      <li v-for="item in items" :id="item.message"></li>
    </ul>
	</div>
</template>

<script>
export default {
  name: 'res',
  data () {
    return {
      name: 'liuqian',
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
    }
  }
}
</script> 
