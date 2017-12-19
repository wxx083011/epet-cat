<template>
  <div class="home-footer">
    <div class="footer1">
      <span class="bt" title="触屏版">触屏版</span>
      <span><a href="https://wap.epet.com/app.html">手机客户端</a></span>
      <span><a href="https://wap.epet.com/AboutEpet.html">关于我们</a></span>
      <span><a href="https://wap.epet.com/faq.html">联系我们</a></span>
    </div>
    <div class="footer2">
      © wap.epet.com 版权：重庆易宠科技有限公司
    </div>
  </div>
</template>

<script>

  export default {

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-footer
    box-sizing: border-box;
    .footer1
      font-size: 14px;
      padding: 15px 0 5px;
      text-align: center;
      display: block;
      box-sizing: border-box;
      &>a
        margin-left 5px
        color: #333;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    .footer2
      text-align:center;
      margin:0 10px 0 10px;
      padding-bottom:25px;
      font-size:12px


</style>
