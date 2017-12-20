<template>
  <div class="nav-msg" v-if="category">
    <div class="cataGoodList">
      <div class="cataTitle">
        <a href="" class="cataname" >
          {{category.name}}
        </a>
        <img class=" arrowL" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" >
      </div>
      <ul class="catalist">
        <li class="cataGoodItem" v-for="(goodLists,index) in category.goodList">
          <a href="" class="db">
            <img class="goodImg" :src="goodLists.goodsSrc" >
            <p class="cataText">{{goodLists.efficacy}}</p>
          </a>
        </li>


      </ul>
    </div>
    <div class="cataGoodBrand">
      <p class="brandname">热门品牌</p>
      <ul class="Brandlist">
        <li v-for="(brandLists,index) in category.brandList">
          <div class="logo-img">
            <img :src="brandLists.brandSrc" alt="">
          </div>
          <p class="sign-name">brandLists.brandname</p>
          <p class="country">美国</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
   props:{
     category:Object
   },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
