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
    <div class="brand-all">全部</div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {}
    },

    computed: {
      ...mapState(['brands'])
    },

    methods: {},
    mounted(){
      this.$store.dispatch('reqBrands'),
      new BScroll(this.$refs.list, {
        scrollY: true
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
