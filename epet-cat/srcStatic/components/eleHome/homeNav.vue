<template>
  <div class="home-nav" ref="homeNav">
    <ul class="dscroll-ul ">
      <li class="dscroll-li active">
        <a href="">首页<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">服饰城<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">狗狗主粮<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href=""> 医疗保健<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">零食玩具 <i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">日用外出<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">美容香波<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">美容香波<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">美容香波<i></i>
        </a>
      </li>
      <li class="dscroll-li">
        <a href="">美容香波<i></i>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted(){
      new BScroll(this.$refs.homeNav, {
        scrollX: true
      })
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixmin.styl"
  .home-nav
    overflow hidden
    width: 100%
    background white
    .dscroll-ul
      float left
      border-1px(#eee)
      overflow hidden
      white-space nowrap
      .dscroll-li
        display inline-block
        & > a
          display inline-block
          width: 74.5px
          height: 36px
          line-height: 36px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-size: 14px;
          text-align: center;
          color: #666;



</style>
