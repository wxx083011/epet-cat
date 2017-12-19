<template>
  <div class="cataBrand">
    <ul class="Brandlist">
      <li :class="'BrandItem'+size">
        <a href="" class="db">
          <div class="imgWrap">
            <img class="BrandImg" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/22/8/c0dab99c5239d783320175df8998554a.jpg">
          </div>
          <p class="BrandText">Opawz</p>
        </a>
      </li>
      <li :class="'BrandItem'+size">
        <a href="" class="db">
          <div class="imgWrap">
            <img class="BrandImg" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/22/8/c0dab99c5239d783320175df8998554a.jpg">
          </div>
          <p class="BrandText">Opawz</p>
        </a>
      </li>
      <li :class="'BrandItem'+size">
        <a href="" class="db">
          <div class="imgWrap">
            <img class="BrandImg" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/22/8/c0dab99c5239d783320175df8998554a.jpg">
          </div>
          <p class="BrandText">Opawz</p>
        </a>
      </li>
      <li :class="'BrandItem'+size">
        <a href="" class="db">
          <div class="imgWrap">
            <img class="BrandImg" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/22/8/c0dab99c5239d783320175df8998554a.jpg">
          </div>
          <p class="BrandText">Opawz</p>
        </a>
      </li>
      <li :class="'BrandItem'+size">
        <a href="" class="db">
          <div class="imgWrap">
            <img class="BrandImg" src="https://img2.epetbar.com/nowater/brand_logo/2016-09/22/8/c0dab99c5239d783320175df8998554a.jpg">
          </div>
          <p class="BrandText">Opawz</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    props:{
      size:Number
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cataBrand
    width 100%
    padding: 15px 5px 15px 0px;
    overflow hidden
    .Brandlist
      padding 0 10px
      display flex
      flex-wrap wrap
      align-content
      margin-top 3px
      overflow hidden
      justify-content flex-start
      .BrandItem30
        padding 0 5px
        width 30%
        overflow hidden
        .imgWrap
          border 1px solid #eee
          width 100%
          text-align center
          box-sizing: border-box;
          .BrandImg
            height: 45px;
            left: 0;
            right: 0;
            margin: 0 auto;
            margin-top: 10px;
            margin-bottom: 10px;
            vertical-align: middle;
            max-width: 100%
        .BrandText
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 12px;
          margin-top: 10px;
          text-align: center
          height: 20px
      .BrandItem45
        padding 0 5px
        width 45%
        overflow hidden
        .imgWrap
          text-align center
          border 1px solid #eee
          width 100%
          box-sizing: border-box;
          .BrandImg
            height: 45px;
            left: 0;
            right: 0;
            margin: 0 auto;
            margin-top: 10px;
            margin-bottom: 10px;
            vertical-align: middle;
            max-width: 100%
        .BrandText
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
            margin-top: 10px;
            text-align: center
            height: 20px




</style>
