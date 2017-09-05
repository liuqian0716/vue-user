<template>
  <div id="main">
    <div id="header">
      <div class="left" @click="goback">返回</div>
      <div class="title">pageB</div>
      <div class="share">分享</div>
    </div>
    <div id="content">
      <ul>
        <li>
          <p>order</p>
          <p>flex-grow</p>
          <p>flex-shrink</p>
          <p>flex-basis</p>
          <p>flex</p>
          <p>align-self</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'pageA',
  methods: {
    goback () {
      this.$router.goBack()
    }
  }
}
</script>
<style scoped>
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
</style>
