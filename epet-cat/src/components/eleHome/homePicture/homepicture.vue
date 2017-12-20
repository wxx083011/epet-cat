<template>
  <div class="pic" v-if="HomeData[7]">
    <div class="split"></div>
    <img :src="brandpic.image" v-for="(brandpic,index) in HomeData[7].content_images">


  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{

         }
    },
    computed: {
      ...mapState(['HomeData'])
    },

    mounted(){
      this.$store.dispatch('reqCategorys')
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
