<template>
  <div class="cataTitle">
    <a href="" class="title c999 db ft12 mt10 pl5" >
      {{cataName}}
    </a>
    <img v-if="isMore" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" class=" arrowL">
  </div>
</template>

<script>

  export default {
  props:{
    isMore:Boolean,
    cataName:String
  },

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cataTitle
    width: 100%
    height 19px
    box-sizing: border-box;
    display: block;
    padding-top 3px
    &>a
      font-size: 12px
      float left
      color: #999;
      text-decoration: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      padding-left: 5px;
      display: block;
    .arrowL
      float right
      height: 10px;
      border: 0;
      vertical-align: middle;


</style>
