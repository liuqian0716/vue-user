<template>
	<div>
    <elInput>我是刘茜</elInput>
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
