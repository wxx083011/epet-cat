<template>
    <div class="home-top">
      <div class="epet-search bgf">
        <div class="location-dog">
          <a href="">
            <span class="catordog c89">狗狗站</span>
            <span class="c89">|</span>
            <span data-name="my-place" class="myposition c89 ft13">重庆</span>
            <i></i>
          </a>
        </div>
        <p class="search-text">
          <a href="">
            <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
            <span class="eico serach-ico"></span>
          </a>
        </p>
        <a href="">
          <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png">
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
  @import "../../common/stylus/mixmin.styl"
    .home-top
      background white
      height 51px
      box-sizing border-box
      padding 5px 10px
      .epet-search
        height 41px
        background: #fff;
        text-align: center;
        display: -webkit-box;
        -webkit-box-align: center;
        display: -moz-box;
        -moz-box-align: center;
        width: 100%;
        .location-dog
          margin-right 20px
          position relative
          font-size 14px
          float left
          & > a
            color #333
            -webkit-tap-highlight-color rgba(0, 0, 0, 0)
            text-decoration none
            i
              position: absolute;
              top: 8px;
              right: -11px;
              border-width: 4px;
              font-size: 0;
              line-height: 0;
              border-style: solid solid dotted;
              border-color: #898989 transparent transparent;
        .search-text
          input
            width: 219.9px;
            border: 0;
            height: 25px;
            background: #e9e9e9;
            border-radius: 4px;
            color: #bcbcbc;
            text-indent: 10px;
            font-size: 13px;
            outline: 0;
          .serach-ico {
            width: 11px;
            height: 11px;
            position: absolute;
            right: 5px;
            top: 0;
            bottom: 0;
            margin: auto 0;
            background-position: 0 0;
          }
        & > a
          img
            width 25px
            margin-left 10px
            vertical-align: middle;
            border 0px

</style>
