<template>
	<div>
    <elInput><img slot="head" src="../../assets/img/search.png" alt="" /><img slot="green" src="../../assets/img/green.png" alt="" /><img slot="red" src="../../assets/img/green.png" alt="" /></elInput>
	</div>
</template>

<script>
import elInput from './input'

export default {
  components: {
    elInput
  },
  name: 'child',
  data () {
    return {
      name: 'liuqian'
    }
  }
}
</script> 
