<template>
	<div class="wrap">
		<h2>自定义指令</h2>
		<input type="text" v-focus />
    <p>{{mes | myFilter}}</p>
    <div v-bind:id="mes | myFilter"></div>

    <p>delimiterss测试：<span>${mes}</span></p>
    <input type="text" v-model="filter" :value="filter | up"><span>转换大写字母</span><span>{{filter | up}}</span>
    <input-father v-model="mes"></input-father>
    <hr />
    <h1>我是父组件的标题</h1>
    <test-son>
      <h1 slot="header">这里可能是一个页面标题</h1>
      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>
      <p slot="footer">这里有一些联系信息</p>
    </test-son>
  </div>
</template>
<script>
import inputFather from '../user/input'
import testSon from './test'
import Vue from 'vue'
Vue.config.delimiters = ['${', '}']
export default {
  name: 'directive',
  components: {inputFather, testSon},
  data () {
    return {
      mes: 'liuqian',
      filter: '',
      aa: [{name: 'jdsh'}]
    }
  },
  // delimiters: ['${', '}'],
  watch: {
    // filter: {
    //   handler: function (val, oldVal) {
    //     console.log(val, oldVal)
    //   },
    //   immediate: true
    // },
    filter (val, oldVal) {
      console.log(val, oldVal)
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  },
  filters: {
    myFilter (el) {
      return el.toUpperCase()
    },
    up (el) {
      return el.toUpperCase()
    }
  }
}
</script>
<style scoped>
input{padding-left:15px;}
</style>
