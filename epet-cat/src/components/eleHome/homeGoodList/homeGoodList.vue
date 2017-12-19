<template>
  <div class="surprise-pro" ref="surprisePro">
    <ul class="swiper-container" >
      <li class="goods">
        <a href="">
          <img src="https://img1.epetbar.com/2016-06/27/12/6f25f603e4dfdf81c78358fbfe9c1e91.jpg@!300w-b" alt="">
        </a>
        <p class="price">￥1.15</p>
        <p class="save">省￥10.35</p>
      </li>
      <li class="goods">
        <a href="">
          <img src="https://img1.epetbar.com/2017-05/24/10/7629f92cceba166c6a417d4f51b271e2.jpg@!300w-b" alt="">
        </a>
        <p class="price">￥1.15</p>
        <p class="save">省￥10.35</p>
      </li>
      <li class="goods">
        <a href="">
          <img src="https://img1.epetbar.com/2017-09/27/13/45e26264d235f450deefe32ff4600d8e.jpg@!300w-b" alt="">
        </a>
        <p class="price">￥1.15</p>
        <p class="save">省￥10.35</p>
      </li>
      <li class="goods">
        <a href="">
          <img src="https://img1.epetbar.com/2017-09/27/13/45e26264d235f450deefe32ff4600d8e.jpg@!300w-b" alt="">
        </a>
        <p class="price">￥1.15</p>
        <p class="save">省￥10.35</p>
      </li>
      <li class="goods">
        <a href="">
          <img src="https://img1.epetbar.com/2017-09/27/13/45e26264d235f450deefe32ff4600d8e.jpg@!300w-b" alt="">
        </a>
        <p class="price">￥1.15</p>
        <p class="save">省￥10.35</p>
      </li>
      <li class="goods">
        <a href="">
          <img src="https://img1.epetbar.com/2015-12/24/10/42b888a6c2456579159b9a7afa3751da.jpg@!300w-b" alt="">
        </a>
        <p class="price">￥1.15</p>
        <p class="save">省￥10.35</p>
      </li>

    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    mounted(){
      new BScroll(this.$refs.surprisePro, {
        scrollX: true,
        scrollY:false
      })
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise-pro
    overflow hidden
    width: 100%
    margin-top 0
    background white
    .swiper-container
      float left
      border-1px(#eee)
      overflow hidden
      white-space nowrap
      .goods
        display inline-block
        a
          width: 98.57px;
          overflow hidden
          margin-right: 10px
          display: inline-block
          img
            width: 84.56px

        .price
          color red
          text-align: center;
          margin: 5px 0;
        .save
          color: #999;
          text-align: center;
          font-size: 12px;
          margin-bottom 15px

</style>
