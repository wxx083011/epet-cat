<template>
  <div class="nav-brand" ref="list">
    <ul class="brand-name">
      <li class="brand-name-list" v-for="(brand,index) in brands ">
        <p class="list-name">—— {{brand.title}} ——</p>
        <ul class="brand-img">
          <li v-for="(list,index) in brand.list" :key="index">
            <div class="logo-img">
              <img :src="list.logo" alt="">
            </div>
            <p class="sign-name">{{list.name}}</p>
            <p class="country">{{list.address}}</p>
          </li>
        </ul>
      </li>
    </ul>
    <div class="shadeShow" v-show="isShow" ref="shade_show">
      <div>
        <div class="shadeHeader" >
          <div  class="shadeBack"  @click="shadeShow1">
            <img src="./triangleicon.png" >
          </div>
          <span class="text">全部品牌</span>
          <div @click="popShow" class="showDiv">
            <img src="./menuicon.png" >
          </div>

        </div>
        <div class="divShow " v-show="isPop">
          <ul class="list">
            <li>
              <a href="javascript:">
                <div></div>
                <span>首页</span>
              </a>
            </li>
            <li>
              商品分类
            </li>
            <li>
              购物车
            </li>
            <li>
              我的e宠
            </li>
          </ul>
        </div>
        <ul class="brandGather">
          <li class="letterDiv" v-for="(goods, index) in brandgather" :key="index">
            <div class="letterTitle">
              <span>{{goods.order}}</span>
            </div>
            <ul class="brandList">
              <li v-for=" (good ,index) in goods.list">
                <div class="left">
                  <img :src="good.logo">
                </div>
                <div class="textList">
                <span class="brandName">
                  {{good.name}}
                </span> <br/>
                  <span class="country">
                  {{good.address}}
                </span>
                </div>
                <div class="borderline"></div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="brand-all"  @click="shadeShow1">全部</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        isShow:false,
        isPop: false
      }
    },
    watch:{
      isShow:function () {
        setTimeout(()=>{
          this.markshow.refresh()
        })
      }
    },
    computed: {
      ...mapState(['brands','brandgather'])
    },

    methods: {
      shadeShow1(){
        console.log ( '111111' )
        this.isShow = ! this.isShow
      },
      popShow(){
        this.isPop = !this.isPop
      }
    },
    mounted(){
      this.$store.dispatch('reqBrands'),
        this.$store.dispatch('reqbrandGather'),
      new BScroll(this.$refs.list, {
        scrollY: true,
        click:true
      })
      this.markshow = new BScroll(this.$refs.shade_show, {
        //嵌套betterscroll 不可重复定义事件
      })
    }
  }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixmin.styl"
  .nav-brand
    clearFix()
    width 100%
    height 88%

    background #f3f4f5
    overflow hidden
    .brand-name
      width 100%
      padding  5px 0
      .brand-name-list
        background #fff
        padding 0 5px
        margin-bottom 10px
        .list-name
          height 19px
          width 100%
          color #999
          font-size 12px
          text-align center
          padding-top 20px
        .brand-img
          clearFix()
          li
            float left
            width 33.333333%
            height 112px
            margin-top  20px
            text-align center
            .logo-img
              height  40px
              padding 10px
              margin 0 5px
              border 1px solid #f3f4f5
              line-height 40px
              img
                height 40px
            .sign-name
              height 20px
              line-height 20px
              overflow hidden
              text-overflow ellipsi;
              white-space nowrap
              font-size 13px
              margin-top 5px
              text-align center
            .country
              height 20px
              line-height 20px
              font-size 12px
              color #999
              text-align center
    .shadeShow
      position absolute
      top 0
      width 100%
      height 100%
      background-color white
      z-index 99
      .shadeHeader
        height 50px
        overflow hidden
        .shadeBack
          img
            position absolute
            top 9px
            left 10px
            width 20px
            height 30px
        .text
          position absolute
          top 13px
          left 50%
          transform translateX(-50%)
          margin 0 auto
          font-size 18px
        .showDiv
          float right
          margin 14px 5px 0 0
          img
            width 20px
            height 20px
      .divShow
        height 75px
        background-color white
        overflow hidden
        border 1px solid #f3f4f5
        .list
          width 100%
          li
            width 25%
            float left
            text-align center
            line-height 75px
      .brandGather
        .letterDiv
          .letterTitle
            height 24px
            background-color #eee
            span
              color: #999
              padding-left 15px
          .brandList
            li
              border-1px(bottom,#eee)
              position relative
              height 73px
              overflow hidden
              .left
                position relative
                margin auto 0
                height 52px
                width 100px
                margin-left 10px
                margin-top 11px
                border 1px solid #eee
                img
                  position absolute
                  top 6px
                  left 5px
                  width 90%
              .textList
                margin-top -46px
                margin-left 130px
                .brandName
                  font-size 14px
                .country
                  font-size 12px
                  color  #999
              .borderline
                border 1px red
    .brand-all
      z-index 10
      position fixed
      right 6px
      bottom 65px
      width 40px
      height 40px
      background rgba(0,0,0,.4)
      border-radius 50%
      font-size 12px
      line-height 40px
      text-align center
      color #fff


</style>
