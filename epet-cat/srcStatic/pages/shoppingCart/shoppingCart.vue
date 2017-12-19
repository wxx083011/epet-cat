<template>
  <div class="shopping-msg">
    <div class="shopping-head">
      <div class="shopping-return"></div>
      <span class="title-cart">购物车</span>
      <div class="shopping-tool"></div>
    </div>
    <div class="shopping-nav">
      <ul>
        <li>
          <span class="s-h-img"></span>
          <p>首页</p>
        </li>
        <li>
          <span class="s-l-img"></span>
          <p>商品分类</p>
        </li>
        <li>
          <span class="s-c-img"></span>
          <p>购物车</p>
        </li>
        <li>
          <span class="s-m-img"></span>
          <p>我的e宠</p>
        </li>
      </ul>
    </div>
    <div class="shopping-form">
      <div class="shopping-img">
        <span class="big-cart"></span>
        <p class="shopping-prompt">购物车是空的</p>
      </div>
      <div class="shopping-btn">
        <span class="go-stroll">去逛逛</span>
        <span class="my-collection">我的收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },

    computed: {},

    methods: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixmin.styl"
  body
    background #f3f4f5
  .shopping-msg
    clearFix()

    .shopping-head
      background #fff
      position relative
      height 49px
      border-1px(#f3f3f3)
      padding 0 10px
      .shopping-return
        position absolute
        top 16px
        width 22px
        height 20px
        background url(./personal-bico1.png) no-repeat
        background-size 9px 17px
        background-position 0px 0px
      .title-cart
        width 90%
        display inline-block
        margin 0 auto
        padding-left 20px
        font-size 18px
        color #333
        line-height 50px
        text-align center
      .shopping-tool
        position absolute
        top 14px
        right 10px
        width 20px
        height 20px
        background url(./imgtk-new.png) no-repeat
        background-size 20px 20px
        background-position 0px 0px

    .shopping-nav
      background #fff
      width 100%
      height 45px
      padding 10px 0
      border-bottom 1px solid #d7d7d7
      ul
        li
          float left
          width 25%
          height 45px
          span
            display block
            margin 0 auto
            width 25px
            height 25px
            &.s-h-img
              background url(./head_icon1.png) no-repeat
              background-size 25px 25px
              background-position 0 0
            &.s-l-img
              background url(./head_icon2.png) no-repeat
              background-size 25px 25px
              background-position 0 0
            &.s-c-img
              background url(./head_icon4.png) no-repeat
              background-size 25px 25px
              background-position 0 0
            &.s-m-img
              background url(./head_icon5.png) no-repeat
              background-size 25px 25px
              background-position 0 0
          p
            color #666
            font-size 14px
            text-align center
    .shopping-form
      background #fff
      .shopping-img
        width 100%
        height 100px
        padding 50px 0 50px 0
        .big-cart
          display block
          width 100px
          height 100px
          margin 0 auto 20px
          background url(./cart-ico.png) no-repeat
          background-size 105px auto
          background-position 0px -159px
        .shopping-prompt
          font-size 16px
          line-height 20px
          color #dbdbdb
          text-align center
          width 100%
          height 20px
      .shopping-btn
        height 90px
        text-align center
        margin-top 5px
        .go-stroll,.my-collection
          display inline-block
          border-radius 5px
          border 1px solid #999
          height 40px
          width 100px
          font-size 16px
          color #999
          line-height 40px
          &.go-stroll
            margin-right 8px




</style>
