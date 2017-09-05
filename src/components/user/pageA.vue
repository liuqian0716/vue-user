<template>
  <div id="main">
    <div id="header">
      <div class="left" @click="goback">返回</div>
      <div class="title">pageA</div>
      <div class="share">分享</div>
    </div>
    <div id="content">
      <ul>
        <li>
          <router-link to="/PageTransition/pageB">
            <p>flex-start：与交叉轴的起点对齐。</p>
            <p>flex-end：与交叉轴的终点对齐。</p>
            <p>center：与交叉轴的中点对齐。</p>
            <p>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</p>
            <p>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</p>
            <p>stretch（默认值）：轴线占满整个交叉轴。</p>
          </router-link>
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

