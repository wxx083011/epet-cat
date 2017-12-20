<template>
  <div class="home-Banner">
    <mt-swipe :auto="8000" class="scroll">
      <mt-swipe-item class="swipe-item" v-for="(pic,index) in slidpic.value"><img :src="pic.image"></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import { Swipe, SwipeItem, TabContainer, TabContainerItem } from 'mint-ui';
  import {mapState} from 'vuex'

  export default {
    mounted(){
      this.$store.dispatch('reqSlidPic')
    },
    computed: {
      ...mapState(['slidpic']),
    },
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
