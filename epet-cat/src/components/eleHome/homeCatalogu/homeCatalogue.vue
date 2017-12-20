<template>
  <div class="home-catalogue">
    <ul class="home-list" v-if="HomeData[1]">

      <li v-for="(homecatasIcon,index) in HomeData[1].menus" :key="index" >
        <a href="">
          <img :src="homecatasIcon.image">
        </a>
      </li>

    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        HomeData1:{}
         }
    },
    computed: {
      ...mapState(['HomeData']),

    },
    mounted(){
      this.$store.dispatch('reqHomeData')


    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home-catalogue
    width: 100%
    overflow hidden
   .home-list
         display flex
         overflow hidden
         flex-wrap wrap
         & > li
           float: left
           width: 20%
           img
             width: 100%
</style>
