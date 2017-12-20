<template>
  <div class="home-nav" ref="homeNav">
    <ul class="dscroll-ul ">
      <li class="dscroll-li " v-for="(item,index) in navList" :class="{greyBg:index===currentIndex}"
          :key="index" @click="navtrigger(index)">
        <a href="">{{item.menu_name}}<i></i>
        </a>
      </li>
    </ul>
  </div>

</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        navIndex:0
         }
    },
    mounted(){
      this.$store.dispatch('reqHomeNav'),
        new BScroll(this.$refs.homeNav, {
        scrollX: true,
          click:true
      })
    },
    computed: {
      currentIndex(){
        return this.navIndex
      },
      ...mapState(['navList']),
    },
    methods: {
      navtrigger(index){
        console.log(index);
        this.navIndex=index

      }
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixmin.styl"
  .home-nav
    overflow hidden
    width: 100%
    background white
    .dscroll-ul
      float left
      border-1px(#eee)
      overflow hidden
      white-space nowrap
      .dscroll-li
        display inline-block
        &.greyBg
          border-bottom :3px solid green
        & > a
          display inline-block
          width: 74.5px
          height: 36px
          line-height: 36px;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          font-size: 14px;
          text-align: center;




</style>
