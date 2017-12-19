<template>
  <div class="classification-msg">
    <div class="head-class">
      <ul>
        <li><router-link to="/Catalogue/catasTab1">分类 </router-link></li>
        <li><router-link to="/Catalogue/catasTab2">品牌 </router-link></li>
      </ul>
      <div class="classification-search">
        <img src="./search.png" alt="" class="img-search">
      </div>
    </div>

    <router-view></router-view>
    <footers :active="2"/>
   </div>
</template>

<script>
  import footers from '../../components/eleCommon/footers/footers.vue'
  export default {
    data() {
      return {
        item: true
      }
    },

    computed: {},

    methods: {
      isred () {
        this.item = !this.item
      }
    },
    components: {
      footers

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixmin.styl'

  .classification-msg
    clearFix()
    position fixed
    top 0
    width 100%
    height 100%
    .head-class
      z-index 3
      position relative
      background #fff
      ul
        height 39px
        padding 0 15px
        border-bottom 1px solid #cbcbcb
        li
          float left
          font-size 13px
          font-weight 700
          line-height 40px
          width 50%
          height 100%
          &:nth-child(1)
            text-align right
           &>a
            display inline-block
            width 30px
            height 38px
            margin-right 17px
            text-align center
            color #333
          .router-link-active
            color #ed4044
            border-bottom: 2px solid #ed4044;
          .head-class-brand
            margin-left  17px

      .classification-search
        position absolute
        top 13px
        right 15px
        width 14px
        height 14px
        .img-search
          width 100%
          height  100%

</style>
