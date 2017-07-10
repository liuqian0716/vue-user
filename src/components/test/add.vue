<template>
  <div class="add">
    <div class="removeContent">
      <p>点击删除</p>
      <ul class="afterRemove clear">
        <li v-for="(list, num) in removeList" @click="removeNew(list, num)">{{list}}</li>
      </ul>
    </div>
    <div class="addContent">
      <p>点击添加</p>
      <ul class="afterAdd clear">
        <li v-for="(item, num) in addList" @click="addNew(item,num)">{{item}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'add',
      data () {
        return {
          addList: ['体育', '科技', '娱乐', '民生', '旅游', '海淘'],
          removeList: ['财经', '股票', '汽车', '数码']
        }
      },
      methods: {
        addNew: function (obj, num) {
          this.addList.splice(num, 1)
          this.removeList.push(obj)
        },
        removeNew: function (obj, num) {
          this.removeList.splice(num, 1)
          this.addList.push(obj)
        }
      }
    }
</script>
<style>
  *{margin:0;padding:0;}
  .clear:after{content: "";display:block;clear:both;}
  .afterAdd li,.afterRemove li{margin:15px 0 20px 10px;width:50px;height:50px;line-height:50px;float:left;list-style: none;text-align:center;border:1px solid #ccc;}
</style>

