<template>
  <div>
    <div class="tops">
        <!--头部-->
        <headers/>
        <!--导航-->
        <homeNav/>
    </div>
    <div class="home-content">
      <!--轮播-->
      <homeBanner/>
      <!--分类列表-->
      <homeCatalogue/>
      <!--每日热销-->
      <homeDayhot/>
      <!--热销商品-->
      <homeGoodList/>
      <split/>
      <!--团购-->
      <groupon/>
      <!--海外购-->
      <homeOversea/>
      <split/>
      <!--视频-->
      <homeTitle :img="imgArr[0]"/>
      <homeVideo :videoSrc="productVideoSrc[0]" :productTextoSrc="productTextoSrc[0]"/>
      <!--图片-->
      <homeTitle :img="imgArr[1]"/>
      <homepicture/>
      <split/>
      <!--轮播2-->
      <homeTitle :img="imgArr[2]"/>
      <homeBanner/>
      <!--视频2-->
      <homeTitle :img="imgArr[3]"/>
      <homeVideo :videoSrc="productVideoSrc[1]" :productTextoSrc="productTextoSrc[1]"/>

      <!--视频3-->
      <homeTitle :img="imgArr[4]"/>
      <homeVideo :videoSrc="productVideoSrc[2]" :productTextoSrc="productTextoSrc[2]"/>

      <div class="split1">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" alt="">
      </div>

     <!--脚部-->
      <homeFooter/>


    </div>


<!--底部组件-->
    <footers :active="1"/>
  </div>
</template>

<script>
  import headers from '../../components/eleHome/headers.vue'
  import homeNav from '../../components/eleHome/homeNav.vue'
  import homeBanner from '../../components/eleHome/homeBanner/homeBanner.vue'
  import homeCatalogue from '../../components/eleHome/homeCatalogu/homeCatalogue.vue'
  import homeDayhot from '../../components/eleHome/homeDayhot.vue'
  import homeGoodList from  '../../components/eleHome/homeGoodList/homeGoodList.vue'
  import groupon from '../../components/eleHome/groupon.vue'
  import homeOversea from '../../components/eleHome/homeOversea.vue'
  import homeVideo from '../../components/eleHome/homVideo/homeVideo.vue'
  import homepicture from '../../components/eleHome/homePicture/homepicture.vue'
  import homeFooter from '../../components/eleHome/homeFooter.vue'
  import footers from '../../components/eleCommon/footers/footers.vue'
  import homeTitle from '../../components/eleHome/homeTitle.vue'
  import split from '../../components/eleCommon/spilt/split.vue'
  export default {
    data(){
      return{
        productVideoSrc: [
          'https://img1.epetbar.com/2017-12/13/13/bf5a66590af3b4c59f7bc0de38cb8060.jpg@!500w0h',
          'https://img1.epetbar.com/2017-12/13/13/a2ed53eb150b5145f9d493c55fd925e5.jpg@!500w0h',
          'https://img1.epetbar.com/2017-10/31/11/3752ba61defcd853a74df15452349218.jpg@!500w0h'
        ],
        productTextoSrc:[
          "KIWI KITCHENS狗罐头 一罐装下93%鲜肉",
          "第1期-狗为什么会互相闻菊花？",
          '吐槽！E宠！首部自黑视频'
        ],
        imgArr:[
          'https://img2.epetbar.com/nowater/2017-12/13/13/c07935b6d02b84cf457c3eaa40f95677.jpg',
          'https://img2.epetbar.com/nowater/2017-12/13/13/11acf905ca327ed7aae8f9b4851850a0.jpg',
          'https://img2.epetbar.com/nowater/2017-12/13/14/41be554ac711057efbb82403f8618b72.jpg',
          'https://img2.epetbar.com/nowater/2017-12/13/14/77c0017136e51145788b7607a3a0914c.jpg',
          'https://img2.epetbar.com/nowater/2017-12/13/13/e747ca83834dbd4d1f9663f11f7bf146.jpg'
        ],
         }
    },

    components: {
      footers,
      headers,
      homeNav,
      homeBanner,
      homeCatalogue,
      homeDayhot,
      homeGoodList,
      split,
      groupon,
      homeOversea,
      homeVideo,
      homeTitle,
      homepicture,
      homeFooter
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .tops
    background white
    width 100%
    z-index 2
    overflow: hidden
    position fixed
    top: 0
    left: 0
    right:0;

  .home-content
    margin-top 88px
    margin-bottom 45px
    .split1
      width: 100%
      img
        width 100%
        height 33.67px

</style>
