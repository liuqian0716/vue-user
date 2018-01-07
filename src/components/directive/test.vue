<template>
	<div class="container">
        <!-- <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>  
            <slot name="footer"></slot>
        </footer> -->
        <span>请输入密码</span><input type="text" />
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      mes: 'hdsjhfsau'
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
