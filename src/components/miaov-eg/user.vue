<template>
  <div>
    我是user
    <div class="user-list">
      <router-link :to="{path: '/user/'+item.tip+'/'+item.id}" v-for="item,index in userList" key="index">{{item.userName}}</router-link>
    </div>
    <div class="user-info">
      <div>姓名：{{userInfo.userName}}</div>
      <div>性别：{{userInfo.sex}}</div>
      <div>爱好：{{userInfo.hobby}}</div>
    </div>
  </div>
</template>
<script>
  let data = [
    {
      id: '1',
      tip: 'vip',
      userName: 'leo1',
      sex: '男',
      hobby: '写代码'
    },
    {
      id: '2',
      tip: 'vip',
      userName: 'leo2',
      sex: '男',
      hobby: '唱歌'
    },
    {
      id: '3',
      tip: 'common',
      userName: 'leo3',
      sex: '男',
      hobby: '读书'
    }
  ]
  export default {
    name: 'user',
    data () {
      return {
        userList: data,
        userInfo: {}
      }
    },
    created () {
      // console.log(this.$route.params.userId)
      let id = this.$route.params.userId
      console.log(typeof (id))
      if (id) {
        this.userInfo = this.userList.filter((item) => {
          return item.id === id
        })[0]
        console.log(this.userInfo)
      }
    }
  }
</script>
