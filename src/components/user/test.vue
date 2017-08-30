<template>
	<div>
    <h1>{{name}}</h1>
    <button @click="clickref">点击</button>
    <elInput :ccc="aaa" @showbox="toshow"></elInput>
  </div>
  <!-- ref="child" -->
</template>

<script>
import elInput from './input'

export default {
  components: {
    elInput
  },
  name: 'res',
  data () {
    return {
      name: '我是刘茜',
      aaa: '你是谁'
    }
  },
  created: function () {
  },
  methods: {
    ee: function () {
      this.aaa = '我是XXX'
    },
    clickref: function () {
      // var child = this.$refs.child
      // // child.counter = 45
      // console.log(child.counter)
      // child.add(11)
    },
    toshow (msg) {
      this.msg = msg
      console.log(this.msg)
    }
  }
}
</script>
