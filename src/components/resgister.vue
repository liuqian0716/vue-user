<template>
  <div class="hello">
    <section>
      <div class="login">
        <div class="import"><span>手机号</span><input v-model="phone" type="text" placeholder="请输入手机号"><span>获取验证码</span></div>
        <div class="import"><span>验证码</span><input v-model="password" type="text" placeholder="请输入验证码"></div>
        <div class="agree clear">
          <input class="fl" type="checkbox" /><p class="fl">阅读并同意<span>《别致公寓XX协议》</span></p>
        </div>
        <div class="register">
          <button @click="resgister">注册</button>
        </div>
      </div>
    </section>
    <footer @click="userLogin">
      <a href="javascript:;">已经注册别致账号？前往登陆</a>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'hello',
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    resgister: function () {
      var self = this
      console.log(self.phone, self.password)
      axios.post('/api/passager/user/resgister', {
        params: {
          mobile: self.phone,
          password: self.password
        }
      }).then(function (response) {
        if (response.data.code === 0) {
          // 验证成功跳转页面
          self.$router.push({path: '/re'})
        }
      }, function (e) {
        // 验证失败跳转的
        self.$router.push({path: '/res'})
      })
    },
    userLogin () {
      this.$router.push({path: '/login'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
*{
  margin:0;
  padding: 0;
}

@media only screen and (max-width: 750px) {
  html{font-size: 100px;}
}
a{text-decoration: none;}
.fl{float:left;}
.clear:after{display:block;content:"";clear:both;}
input{outline:none;}
body{font-size: 0.3rem;line-height: 1;}
header{text-align:center;margin:1.9rem 0 0.75rem 0;}
header img{width:6.25rem;height:6.25rem;}
.login{width:80%;margin:0 auto;}
.import{border-bottom: 1px solid #ebe9e6;padding:0.95rem 0 0.6rem 0;}
.import span:first-of-type{padding-right:0.9rem;}
.import span:nth-of-type(2){color:#c9c9c9;}
.import input{border:none;color:;}
 .import ::-webkit-input-placeholder {/*Chrome/Safari*/
  color:#c9c9c9;
}
 .import ::-moz-placeholder {/*Firefox*/
  color:#c9c9c9;
  }
 .import ::-ms-input-placeholder {/*IE*/
   color:#c9c9c9;
}
.agree{line-height: 2.4rem;color:#7e7f7f;}
.agree input{width:0.7rem;height:0.7rem;margin:0.85rem 0.3rem 0 0;}
.agree span{color:#ffc95f;}
.register button{width:100%;height:1.8rem;background:#ffbf44;color:#fff;border:none;}
footer a{color:#ffc95f;}
footer{position:absolute;bottom:0.65rem;left:0;right:0;text-align: center;}

</style>
