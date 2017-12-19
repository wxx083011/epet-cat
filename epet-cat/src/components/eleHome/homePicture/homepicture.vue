<template>
  <div class="pic">
    <div class="split"></div>
    <img   :src="brandImgSrc[0]" >
    <img   :src="brandImgSrc[1]" >
    <img   :src="brandImgSrc[2]" >
    <img   :src="brandImgSrc[3]" >
    <img   :src="brandImgSrc[4]" >
    <img   :src="brandImgSrc[5]" >
    <img   :src="brandImgSrc[6]" >
    <img   :src="brandImgSrc[7]" >


  </div>
</template>

<script>

  export default {
    data(){
      return{
        brandImgSrc: [
          'https://img2.epetbar.com/nowater/2017-12/14/14/0ef1597575070d85b63b4c224732b901.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/20/d7d62c5b10a607f7ef6de8011d8ed10b.jpg@!water',
          'https://img1.epetbar.com/2017-12/15/18/ff046ff94b84b33badc9780ceef1acb8.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/15/18/fc2dd84cdfb213ed86eb42074b4de7b6.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/20/57a51566b3ea6250aaaec8d6adbfa7de.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/20/31820ee60f0a1c31e28db8e7bd8fa5d7.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/20/e294fd75ba9bd39baf1d10747d33f4f3.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/21/85c3a46f647ea3ae08b7fe6fd52f06a3.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/20/507065a7e5184bacb8d5e247557c5070.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/13/20/cc683af3ba32b79a7b8fbd3bbbebe83f.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/14/14/4a3a9b446d235ec7439db6a17ede9aec.jpg@!water',
          'https://img2.epetbar.com/nowater/2017-12/14/10/4b02920c992778fa0ef8b3f7fe7c0abe.jpg@!water'

        ],
         }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pic
    .split
      width: 100%
      height: 10px
      background: white
    img
      width: 100%
      height 160px
</style>
