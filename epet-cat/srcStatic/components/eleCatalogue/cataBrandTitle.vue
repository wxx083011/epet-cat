<template>
  <div>
    <div class="TitleWrap" >
      <span class="TitleName">—— {{brandTitle}} ——</span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      brandTitle:String
    },
    components: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
   .TitleWrap
     width 100%
     text-align: center;
     padding-top 20px
     .TitleName
       color: #999;
       font-size: 12px;
</style>
