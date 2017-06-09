<template>
	<div>
    <elInput></elInput>
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
