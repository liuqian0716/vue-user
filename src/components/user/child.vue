<template>
	<div>
    <el-Input><img slot="head" src="../../assets/img/search.png" alt="" /><img slot="green" src="../../assets/img/green.png" alt="" /><img slot="red" src="../../assets/img/green.png" alt="" /></el-Input>
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
  }
}
</script> 
