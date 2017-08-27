<template>
	<div class="box">
		<div class="wrap" v-test="color">{{num}}</div>
		<button @click="add">点击</button>
	</div>
</template>
<script>
import Vue from 'vue'
// 自定义指令
Vue.directive('test', {
  bind: function () { // 被绑定
    console.log('1 - bind')
  },
  inserted: function () {
    console.log('2 - inserted')
  },
  update: function () {
    console.log('3 - update')
  },
  componentUpdated: function () {
    console.log('4 - componentUpdated')
  },
  unbind: function () {
    console.log('5-unbind')
  }
})
// Vue.directive('test', function (el, binding) {
//   console.log(binding)
//   el.style = 'color:' + binding.value
// })
export default {
  data () {
    return {
      num: 10,
      color: 'red'
    }
  },
  methods: {
    add: function () {
      this.num++
    }
  }
}
</script>
