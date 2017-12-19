<template>
  <div class="cataGoodList">
    <cataTitle :isMore="true" cataName="狗狗服饰"/>
    <ul class="catalist">
      <li class="cataGoodItem">
        <a href="" class="db">
        <img class="goodImg" src="https://img2.epetbar.com/nowater/cates/2014-03/24/1d55d100e176bd571e4b0fd85604a14d.jpg@!300w-b" >
        <p class="cataText">精美配饰</p>
        </a>
      </li>
      <li class="cataGoodItem">
        <a href="" class="db">
          <img class="goodImg" src="https://img2.epetbar.com/nowater/cates/2014-03/24/1d55d100e176bd571e4b0fd85604a14d.jpg@!300w-b" >
          <p class="cataText">精美配饰</p>
        </a>
      </li>
      <li class="cataGoodItem">
        <a href="" class="db">
          <img class="goodImg" src="https://img2.epetbar.com/nowater/cates/2014-03/24/1d55d100e176bd571e4b0fd85604a14d.jpg@!300w-b" >
          <p class="cataText">精美配饰</p>
        </a>
      </li>
      <li class="cataGoodItem">
        <a href="" class="db">
          <img class="goodImg" src="https://img2.epetbar.com/nowater/cates/2014-03/24/1d55d100e176bd571e4b0fd85604a14d.jpg@!300w-b" >
          <p class="cataText">精美配饰</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import cataTitle from './cataTitle.vue'

  export default {

    components: {
      cataTitle
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cataGoodList
    width 100%
    padding: 15px 5px 15px 0px;
    overflow hidden
    .catalist
      display flex
      flex-wrap wrap
      margin-top 3px
      overflow hidden
      justify-content space-between
      .cataGoodItem
        width 33.333%

        .goodImg
          height 86.66px
        .cataText
          height 20px
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 12px;
          color: #333;
          margin-top: 10px;
          text-align: center;
          white-space: nowrap;








</style>
