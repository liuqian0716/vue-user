<template>
  <div>
      <header>
        <el-row :gutter="20">
          <el-col :span="3"><div class="logn-content"></div></el-col>
          <el-col :span="21">
            <div class="logn-content">
              <img class="logo" src="../../assets/img/login/icon_logo.png" />
              <div class="logoSpan">欢迎登录</div>
            </div>
          </el-col>
        </el-row>
      </header>
    <div class="content">
      <el-row :gutter="20">
        <el-col :span="3"><div class="grid-content"></div></el-col>
        <el-col :span="12"><div class="grid-content login_logo"></div></el-col>
        <el-col :span="6">
          <div class="grid-content login_form">
            <div class="form_title">
              <p>账户登录</p>
            </div>
            <div class="line"></div>
            <div class="error" v-show="showerr">
              <img src="../../assets/img/login/icon_login_error.png"/>
              <span>{{errtext}}</span>
            </div>
            <el-form :model="form">
              <el-form-item class="phone">
                <el-input v-model="form.phone" :maxlength="11" placeholder="请输入手机号码" @blur="vPhone" @change="vSubmit">
                  <template slot="prepend">+86</template>
                </el-input>
              </el-form-item>
              <el-form-item class="verification">
                <el-input v-model="form.verification" :maxlength="4" placeholder="请输入短信验证码" @blur="vCode" @change="vSubmit"></el-input>
                <el-button v-if="showVerification" @click.native="getVerification">获取验证码</el-button>
                <el-button class="timer" v-else >重新获取({{timer}})</el-button>
              </el-form-item>
              <el-form-item class="remember">
                <el-checkbox v-model="form.remember">记住我</el-checkbox>
              </el-form-item>
            </el-form>
            <div class="submit">
              <el-button :class="{unsbumit: !showsubmit}" @click.native="login">登录</el-button>
            </div>
            <div class="info">
              <p>暂不开放注册，申请账号请致电400-089-0098</p>
            </div>
          </div>
        </el-col>
        <el-col :span="3"><div class="grid-content"></div></el-col>
      </el-row>
    </div>
    <footer class="footer">
      <p>关于我们-联系我们-人才招聘-城市合伙人-手机嗨啦购-客服热线：400-089-0098</p>
      <p>Copyright ©2014-2017 嗨啦购Hilago.com版权所有</p>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        phone: '',
        verification: '',
        remember: false
      },
      showVerification: true,
      timer: 60,
      interval: '',
      errtext: '',
      showerr: false,
      showsubmit: false
    }
  },
  methods: {
    testphone () {
      if (/^1\d{10}$/.test(this.form.phone)) {
        return true
      } else {
        return false
      }
    },
    testverification () {
      if (/^\d{4}$/.test(this.form.verification)) {
        return true
      } else {
        return false
      }
    },
    getVerification () {
      if (this.testphone()) {
        this.showerr = false
        this.form.verification = ''
        this.ajax.post('b2b/send/code', {
          mobile: this.form.phone,
          timestamp: this.until.getNowFormatDate()
        }, val => {
          if (val.success) {
            this.showVerification = false
            this.interval = window.setInterval(val => {
              if (this.timer > 1) {
                this.timer--
              } else {
                this.showVerification = true
                this.timer = 60
                window.clearInterval(this.interval)
              }
            }, 1000)
          } else {
            this.showerr = true
            this.errtext = val.desc
          }
        })
      } else {
        this.showerr = true
        this.errtext = '您输入的手机号有误'
      }
    },
    login () {
      if (!this.showsubmit) {
        this.showerr = true
        this.errtext = '请输入账户信息'
        return false
      }
      this.showerr = false
      this.ajax.post('b2b/login', {
        mobile: this.form.phone,
        code: this.form.verification,
        remebered: this.form.remember
      }, val => {
        if (val.success) {
          this.$router.push({ name: 'home' })
        } else {
          this.showerr = true
          this.errtext = val.desc
        }
      })
    },
    vCode () {
      if (this.testverification()) {
        this.showerr = false
      } else {
        this.showsubmit = false
        this.showerr = true
        this.errtext = '您输入的验证码有误'
      }
    },
    vPhone () {
      if (this.testphone()) {
        this.showerr = false
      } else {
        this.showsubmit = false
        this.showerr = true
        this.errtext = '您输入的手机号有误'
      }
    },
    vSubmit () {
      if (this.testverification() && this.testphone()) {
        this.showsubmit = true
      } else {
        this.showsubmit = false
      }
    }
  }
}
</script>

<style>
.logo {
  margin-top: 60px;
  margin-left: -20px;
  float: left;
}
.logoSpan {
  margin-left: 40px;
  font-size: 30px;
  width: 300px;
  height: 100px;
  float: left;
  color: #333333;
}
.logn-content {
  height: 170px;
  line-height: 170px;
}

.grid-content {
  height: 380px;
}
.login_logo{
  background-image: url(../../assets/img/login/banner_login.png);
  background-size: 100% 100%;
  background-repead: no-repead;
}

.login_form {
  min-height: 380px;
  width: 380px;
  background-color: #FFFFFF;
  border: 2px solid #EEEEEE;
  position: relative;
}

.login_form .phone {
  margin-bottom: 12px;
}

.login_form .form_title {
  color: #FF7B7B;
  margin-top: 30px;
  margin-bottom: 25px;
  font-size: 24px;
  text-align: center;
}

.login_form .line {
  background-color: #ffc3c3;
  height: 2px;
  width: 320px;
  margin: 0 auto;
  margin-bottom: 35px;
}

.login_form .error {
  position: absolute;
  width: 318px;
  height: 21px;
  border: 1px solid #ffc3c3;
  background-color: #fff1f2;
  left: 30px;
  top: 95px;
  color: #e11e00;
  font-size: 0;
  line-height: 21px;
}

.login_form .error img {
  display: inline-block;
  margin-left: 9px;
  margin-right: 7px;
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
.login_form .error span {
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
}

.phone .el-input {
  width: 320px;
  margin-left: 30px;
  font-size: 14px;
}

.login_form .el-input .el-input-group__prepend {
  border-radius: 0;
  color: #333333;
  font-size: 14px;
}

.login_form .verification {
  margin-bottom: 12px;
}

.verification .el-input {
  width: 208px;
  margin-left: 30px;
}

.verification .el-input__inner {
  border-radius: 0;  
}

.login_form .el-button {
  background-color: #ff7b7b;
  color: #FFFFFF;
  border: 1px solid #ff7b7b;
}

.login_form .el-button.timer {
  background-color: #c3c3c3;
  text-align: center;
  border: 1px solid #c3c3c3;
}

.login_form .el-button.unsbumit {
  background-color: #c3c3c3;
  border: 1px solid #c3c3c3;
}

.login_form .el-button.timer span{
  margin-left: -6px;
}

.verification .el-button {
  width: 100px;
  margin-left: 8px;
}

.remember .el-checkbox {
  margin-left: 30px;
}
.submit {
  text-align: center;
  margin-top: -20px;
}
.login_form .el-button:focus,.login_form .el-button:hover {
  color: #FFFFFF;
}
.submit .el-button {
  width: 320px;
  font-size: 18px;
}
.login_form .info {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
  line-height: 60px;
  text-align: center;
  font-size: 16px;
  position: absolute;
  bottom: 0;
}
.footer {
  background-color: #fafafa;
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
  text-align: center;
  color: #666666;
  font-size: 12px;
}
.footer p:nth-child(1) {
  margin-top: 30px;
}
.footer p:nth-child(2) {
  margin-top: 10px;
}
</style>
