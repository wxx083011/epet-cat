<template>
  <div class=" titclass">
    <img class="title1" :src=img>
    <img class="more" src="https://img2.epetbar.com/nowater/2017-12/13/13/22f20febaae655371ef3766612102c0e.jpg">
  </div>
</template>

<script>

  export default {
    props:{
      img:String
    },


    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .titclass
    width: 100%
    overflow hidden
    .title1
      height 72.36px
      float left
    .more
      float right
      height:55px
</style>
