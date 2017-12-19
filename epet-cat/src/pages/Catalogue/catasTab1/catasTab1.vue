<template>
  <div class="nav-goods">
    <div class="nav-name"  ref="list">
      <ul class="nav-list">
        <li  v-for="(category,index) in categorys" :key="index"
             :class="{greyBg:index===currentIndex}"
             @click="clickMenuItem(index)"
        >{{category.name}}</li>
      </ul>
    </div>
    <div class="nav-msg-wrap" ref="navMsg">
      <catasGood :category="categorys[cataindex]"/>
    </div>
  </div>
</template>

<script>
  import catasGood from  '../../../pages/Catalogue/catasTab1/catasGood.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        cataindex:0,

      }
    },

    computed: {
      ...mapState(['categorys','brands']),
      currentIndex(){
         return this.cataindex

      }

    },
    methods: {
      clickMenuItem(index,category){
        //让右侧滚动到对应的位置
//        console.log('clickMenuItem()',index,category)
//       this.category=category
        this.cataindex = index

      },
    },
    components: {
      catasGood

    },
    mounted(){
      this.$store.dispatch('reqCategorys'),
        this.$nextTick(() => {
          new BScroll(this.$refs.list, {
            scrollY: true,
            click: true
          }),
            new BScroll(this.$refs.navMsg, {
              scrollY: true,
              click:true
            })
        })

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import  '../../../common/stylus/mixmin.styl'
  .nav-goods
    clearFix()
    position relative
    top 0
    width 100%
    height 85%
    .nav-name
      width 75px
      height 100%
      background #f3f4f5
      overflow hidden
      .nav-list
        li
          border-1px(#f3f4f5)
          width 70px
          height 50px
          background #fff
          font-size 13px
          line-height 50px
          text-align center
          &.greyBg
            background #f3f4f5
    .nav-msg-wrap
      position absolute
      left 75px
      top 0
      right 0
      height 100%
      .nav-msg
        width 100%
        overflow hidden
        .cataGoodList
          box-sizing border-box
          width 100%
          padding 10px 10px
          .cataTitle
            padding 6px 0
            .cataname
              font-size 12px
            .arrowL
              float right
              height 10px
          .catalist
            width 100%
            display flex
            flex-wrap wrap

            .cataGoodItem
              width 33.33%
              text-align center
              .goodImg
                height 86.66px
              .cataText
                height 20px
                color #333
                font-size 12px
                margin-top 10px
                text-align center
                white-space nowrap
                text-overflow ellipsis
                overflow hidden




        .cataGoodBrand
          box-sizing border-box
          width 100%
          overflow hidden
          padding 10px 8px
          .brandname
            font-size 12px
            color: #7e8c8d
            padding 5px 0
          .Brandlist
            display flex
            flex-wrap wrap
            width 100%
            overflow hidden
            li
              width 45%
              text-align center
              padding 3px 5px
              .logo-img
                height  40px
                padding 10px
                margin 0 5px
                border 1px solid #f3f4f5
                line-height 40px
                img
                  height 100%
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



</style>
