<template>
  <div class="surprise-tit">
    <div class="titimg">
      <img src="//static.epetbar.com/static_web/wap/src/images/suprice.png">
    </div>
    <div class="end" style="margin-top: 1px;">距本场结束</div>
    <div class="time">
      <div class="time1 dib clearfix ft12 dtime">
        <span class="time1-1">01</span>
        <span class="time-zi ft12">:</span>
        <span class="time1-1">03</span>
        <span class="time-zi ft12">:</span>
        <span class="time1-1">48</span>
      </div>
    </div>
    <div class="more">
      <a href="https://wap.epet.com/surprise/Main.html?pet_type=dog&amp;fw=0" class="db ftr">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/10/bc4f0db8483e9084f5923cb92bfe2b7a.jpg">
      </a>
    </div>
  </div>
</template>

<script>

  export default {

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise-tit
    position relative
    overflow hidden
    display block
    padding 10px
    .titimg
      img
        float left
        height: 24px;
        vertical-align: middle;
        margin-left: -20px;
    .end
      vertical-align: middle;
      margin-top: 1px;
      float: left;
      margin-left: 10px;
      font-size: 13px;
    .time
      float: left;
      text-align: center;
      margin-left: 5px;
    .more
      float right
      display block
      vertical-align: middle;
      margin: 0 0 0 auto;
      width: 60px
      img
        margin-top -20px
        width 60px

</style>
