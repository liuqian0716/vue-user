<template>
  <div class="znsArea">
<!--留言-->
     <div class="takeComment">
        <textarea name="textarea" class="takeTextField" id="tijiaoText" v-model="message"></textarea>
        <div class="takeSbmComment">
            <input type="button" class="inputs" value="" @click="addreview" />
            <span>(可按 Enter 回复)</span>
        </div>
    </div>
<!--已留-->
    <div class="commentOn">
        <div class="noContent" v-show="!messageList.length">暂无留言</div>
        <div class="messList">
        	<div class="reply">
                <p class="replyContent"></p>
                <p class="operation">
                    <span class="replyTime"></span>
                    <span class="handle">
                    	<a href="javascript:;" class="top"></a>
                        <a href="javascript:;" class="down_icon"></a>
                        <a href="javascript:;" class="cut">删除</a>
                    </span>
                </p>
            </div>
        </div>
        <div class="page">
        	<a href="javascript:;" class="active">1</a>
        	<a href="javascript:;">2</a>
        	<a href="javascript:;">3</a>
        </div>
    </div>
</div>
</template>
<script>
import '../../assets/css/review.css'
import axios from 'axios'
export default {
  name: 'review',
  data () {
    return {
      message: '',
      messageList: []
    }
  },
  methods: {
    addreview () {
      let vue = this
      axios.get('@/../static/weibo.php', {
        params: {
          act: 'add',
          content: vue.message
        }
      }).then(function (response) {
        console.log(response)
      }, function (e) {
        console.error(e)
      })
      console.log(this.message)
    }
  }
}
</script>
