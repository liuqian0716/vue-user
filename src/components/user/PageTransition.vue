<template>
  <div style="height: 100%;">
    <div id="header"></div>
    <transition :name="transitionName" mode="out-in">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>
<style>
#main {
  width: 100%;
  height: 100%;
}

#content {
  position: absolute;
  top: 45px;
  width: 100%;
}

#header {
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 45px;
  line-height: 45px;
  color: #fff;
  background: #0058f1;
}

#header>.left {
  flex-grow: 1;
}

#header>.title {
  flex-grow: 2;
}

#header>.share {
  flex-grow: 1;
}

#header>div {
  text-align: center;
}

ul {
  text-align: center;
}

ul li {
  margin-top: 10px;
}

.child-view {
  position: absolute;
  top: 0;
  width: 100%;
  transition: all .8s cubic-bezier(.55, 0, .1, 1);
}
.fade-left-enter, .fade-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(45px, 0);
  transform: translate(45px, 0);
}
.fade-left-leave-active, .fade-right-enter {
  opacity: 0;
  -webkit-transform: translate(-45px, 0);
  transform: translate(-45px, 0);
}
/* .fade-left-enter-active, .fade-left-leave-active{transition: 1s;}
.fade-left-enter{
  transform: translateX(100%)
}
.fade-left-enter-to{
  transform: translateX(-100%)
}
.fade-right-enter-active, .fade-right-leave-active{transition: 1s;}
.fade-right-leave{
  transform: translateX(-100%)
}
.fade-right-leave-to{
  transform: translateX(100%)
} */
</style>
<script>
export default {
  name: 'transitionPage',
  data () {
    return {
      transitionName: 'fade-left'
    }
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    console.log(this.$router)
    if (isBack) {
      this.transitionName = 'fade-left'
    } else {
      this.transitionName = 'fade-right'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

