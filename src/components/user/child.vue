<template>
    <div>
      <!-- .native - 监听组件根元素的原生事件。 -->
      <el-Input @click.native="fn">
        <img slot="head" src="../../assets/img/search.png" alt="" />
        <img slot="green" src="../../assets/img/green.png" alt="" />
        <img slot="red" src="../../assets/img/green.png" alt="" />
      </el-Input>
      <div @click="paras">点击获取参数</div>
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
    /* 从success跳转过来的 */
    paras () {
      console.log(this.$route.params) // 获取params的参数
    },
    fn () {
      console.log('woshi fn')
    }
  },
  beforeRouteUpdate (to, from, next) {
    to()
    console.log('3')
    console.log(this.$route, to)
  }
}
</script>
<style scoped>

</style>

