<template>
	<div>
    <el-Input><img slot="head" src="../../assets/img/search.png" alt="" /><img slot="green" src="../../assets/img/green.png" alt="" /><img slot="red" src="../../assets/img/green.png" alt="" /></el-Input>
    <button @click="paras">点击获取参数</button>
  </div>
</template>

<script>
import ElInput from './input'

export default {
  components: {
    ElInput
  },
  name: 'child',
  data () {
    return {
      name: 'liuqian'
    }
  },
  methods: {
    paras () {
      console.log(this.$route.params) // 获取params的参数
    }
  }
}
</script>
