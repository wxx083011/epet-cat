<template>
  <div class="home-catalogue">
    <ul class="home-list">
      <li>
        <a href="">
          <img src="../home-list/1-1.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/1-2.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/1-3.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/1-4.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/1-5.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/2-1.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/2-2.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/2-3.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/2-4.jpg" alt="">
        </a>
      </li>
      <li>
        <a href="">
          <img src="../home-list/2-5.jpg" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {

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
