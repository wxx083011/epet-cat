<template>
  <div class="home-Banner">
    <mt-swipe :auto="8000" class="scroll">
      <mt-swipe-item class="swipe-item"><img src="./c01.jpg"></mt-swipe-item>
      <mt-swipe-item class="swipe-item"><img src="./c02.jpg"></mt-swipe-item>
      <mt-swipe-item class="swipe-item"><img src="./c03.jpg"></mt-swipe-item>
      <mt-swipe-item class="swipe-item"><img src="./c04.jpg"></mt-swipe-item>
      <mt-swipe-item class="swipe-item"><img src="./c05.png"></mt-swipe-item>
      <mt-swipe-item class="swipe-item"><img src="./c06.jpg"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem, TabContainer, TabContainerItem } from 'mint-ui';

  export default {

    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-Banner
    width 100%
    overflow hidden
    .scroll
      width: 100%
      height 160px
      .swipe-item
        width: 100%
        height: 160px
        & > img
          width 100%


</style>
