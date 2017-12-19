<template>
  <div>
    <img class="imgs" :src="videoSrc">
    <div class="content">
      <div class="textover">{{productTextoSrc}}</div>
      <div>
        <span class="cmallViewIco "></span>
        <span class="copy">15502|02:15</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
   props:{
     videoSrc:String,
     productTextoSrc:String
   },
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .imgs
    width: 100%
    height 210.75px
  .content
    width: 100%
    box-sizing border-box
    height: 58px
    padding 10px
    .textover
      font-size 12px
      text-align center
      height: 19px
      overflow: hidden;
      white-space: nowrap;
      word-wrap: normal;
      text-overflow: ellipsis;
      color: #333;
    .cmallViewIco
      margin-right: 3px;
      display: inline-block;
      width: 10px;
      text-align: center;
      height: 9px;
      background: url('./view-black.png') 0 0 no-repeat;
      background-size: contain;
    .copy
      height: 16px
      backgroun:pink
      margin-left: 10px;
      font-size: 6px;
      font-style: normal;
      text-align: center;
      color: #999;
      margin-right: 10px;

</style>
