<template>
	<div
		<div class="box">
      <input type="text" /><slot name="green"></slot>
      <p @click="add">我是子组件</p>
      <h1>{{ccc}}</h1>
    </div>
	</div>
</template>

<script>
export default {
  name: 'res',
  props: ['ccc'],
  data () {
    return {
      name: 'liuqian',
      default: '默认数据',
      counter: 0
    }
  },
  methods: {
    add: function () {
      // this.counter += 1
      // console.log('接受父组件的值：', num, this.counter)
      this.$emit('showbox', ++this.counter)
    }
  }
}
</script> 
<style>
  *{margin:0;padding:0;}
  .box{position:relative;width:200px;height:30px;margin:0 auto;}
  .box input{width:200px;height:30px;}
  .box img{position:absolute;top:10px;right:0;width:20px;height:20px;vertical-align: center;}
</style>
