<template>
  <div class="module">
    <select-input :is-show.sync="listShow" :title="title"></select-input>
    <list :data="listData" v-if="listShow" @changeTitle="titleHandle"></list>
    <h1>{{count}}</h1><button @click="mo">+</button>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>
</template>
<script>
  import selectInput from './selectInput'
  import list from './list'
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
  let listData = [
    {
      title: 'javascript'
    },
    {
      title: 'html+css'
    },
    {
      title: 'jQuery'
    },
    {
      title: 'react'
    },
    {
      title: 'nodejs'
    }
  ]
  export default {
    components: {
      selectInput,
      list
    },
    data () {
      return {
        listShow: false,
        listData: listData,
        title: ''
      }
    },
    methods: {
      ...mapMutations(['mo']),
      ...mapActions(['addAction', 'reduceAction']),
      titleHandle (title) {
        console.log(title)
        this.title = title
      }
      // addItem () {
      //   this.$store.commit('add', {
      //     n: 5
      //   })
      // }
    },
    computed: {
      ...mapState(['count'])
      // 第二种方法
      // computed: mapState({
      //   count: state => state.count
      // })
      // ...mapGetters(['count'])
      // 第二种写法
      // count () {
      //   return this.$store.getters.count
      // }
    }
  }
</script>
<style scoped>
  *{margin:0;padding:0;}
  .module{width:300px;height:300px;background:#e3c5b1;margin:50px auto;}
</style>

