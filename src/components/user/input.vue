<template>
	<div>
		<div class="box">
      <input type="text" /><img src="../../assets/img/search.png" alt="" />
    </div>
	</div>
</template>

<script>
export default {
  name: 'res',
  data () {
    return {
      name: 'liuqian'
    }
  }
}
</script> 
<style>
  *{margin:0;padding:0;}
  .box{position:relative;width:200px;height:30px;margin:0 auto;}
  .box input{width:200px;height:30px;}
  .box img{position:absolute;top:10px;right:0;width:20px;height:20px;vertical-align: center;}
</style>
