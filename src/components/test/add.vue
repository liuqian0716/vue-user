<template>
  <div class="add">
    <div class="removeContent">
      <p>点击删除</p>
      <ul class="afterRemove clear">
        <li v-for="(list, num) in removeList" @click="removeNew(list, num)" :key="list">{{list}}</li>
      </ul>
    </div>
    <div class="addContent">
      <p>点击添加</p>
      <ul class="afterAdd clear">
        <li v-for="(item, num) in addList" @click="addNew(item,num)" :key="item">{{item}}</li>
      </ul>
    </div>

    <h1>Vuex学习</h1>
    <button @click="subItem">-</button><span>{{init}}</span><button @click="addItem">+</button>

    <div class="test">
      <input type="text" v-model="phoneNumber">
      <input type="text" v-model="password">
      <h3></h3>
      <button @click="request">点击</button>
      <h1>{{cc}}</h1>
    </div>

  </div>
</template>
<script>
    import axios from 'axios'
    import jsonp from 'jsonp'
    // import ajax from '../../vue.js'
    export default {
      name: 'add',
      data () {
        return {
          addList: ['体育', '科技', '娱乐', '民生', '旅游', '海淘'],
          removeList: ['财经', '股票', '汽车', '数码'],
          phoneNumber: '逆流成河',
          password: '',
          num: 5,
          cc: this.num
        }
      },
      methods: {
        request: function () {
          let vue = this
          // jsonp('https://api.douban.com/v2/loc/list',
          //       function (err, res) {
          //         console.log(err, res)
          //       })
        // 39.916527,116.397128
          // let data = { q: this.phoneNumber, count: this.num }
          // ~../static/data.json ~代表src
          // axios({
          //   methods: 'post',
          //   url: 'douban/v2/book/1220562',
          //   data: {
          //     name: 'wise',
          //     info: 'wrong'
          //   }
          // })
          axios.get('douban/v2/loc/list').then(function (response) {
            console.log(response)
          }, function (e) {
            console.error(e)
          })
        },
        addNew: function (obj, num) {
          this.addList.splice(num, 1)
          this.removeList.push(obj)
        },
        removeNew: function (obj, num) {
          this.removeList.splice(num, 1)
          this.addList.push(obj)
        },
        addItem () {
          this.$store.commit('add', {
            n: 3
          })
        },
        subItem () {
          this.$store.commit({
            type: 'sub',
            de: 10
          })
        }
      },
      mounted () {
        console.log($('.afterAdd'))
      },
      computed: {
        init () {
          return this.$store.state.count
        }
      }
    }
</script>
<style scoped>
  *{margin:0;padding:0;}
  .clear:after{content: "";display:block;clear:both;}
  .afterAdd li,.afterRemove li{margin:15px 0 20px 10px;width:50px;height:50px;line-height:50px;float:left;list-style: none;text-align:center;border:1px solid #ccc;}
  button{width:30px;height:30px;margin-left:20px;}
</style>

