<template>
  <div class="footer">
    <ul class="tab-ul">
      <li :class="'tab-item'+active">
        <router-link to="/Home" class="Home"></router-link>
      </li>
      <li :class="'tab-item'+active">
        <router-link to="/Catalogue" class="Catalogue"></router-link>
      </li>
      <li :class="'tab-item'+active">
        <router-link to="/shoppingCart" class="shoppingCart"></router-link>
      </li>
      <li :class="'tab-item'+active">
        <router-link to="/personalCenter" class="personalCenter"></router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    props:{
      active:Number
    },
    components: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position: fixed
    bottom: 0;
    left: 0;
    right: 0;
    .tab-ul
      background: #fff;
      height: 45px;
      line-height: 45px;
      width: 100%;
      border-top: 1px solid #e7e7e7;
      .tab-item1
        float: left;
        width: 25%;
        text-align: -webkit-match-parent;
        display inline-block
        &>a
          background: url(../../../common/img/img.png) no-repeat;
          background-size: 234px 163px;
          margin: 0 auto;
          display: block;
          text-decoration: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          height: 40px;
          color: #333;
          width: 42px;
          margin-top: 2px;
        .Home
          background-position: 0 0
        .Catalogue
          background-position -85px -41px
        .shoppingCart
          background-position: -85px -81px;
        .personalCenter
          background-position: -85px -122px;
        .router-link-active
          color: #ff0000

      .tab-item2
        float: left;
        width: 25%;
        text-align: -webkit-match-parent;
        display inline-block
        &>a
          background: url(../../../common/img/img.png) no-repeat;
          background-size: 234px 163px;
          margin: 0 auto;
          display: block;
          text-decoration: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          height: 40px;
          color: #333;
          width: 42px;
          margin-top: 2px;
        .Home
          background-position: -85px 0;
        .Catalogue
          background-position: 0 -40px;
        .shoppingCart
          background-position: -85px -81px;
        .personalCenter
          background-position: -85px -122px;
        .router-link-active
          color: #ff0000

</style>
