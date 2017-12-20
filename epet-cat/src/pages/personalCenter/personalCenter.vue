<template>
  <div class="loagin">
    <div class="header">
      <div class="header-top">
        <span class="arrow"></span>
        <span class="register">注册</span>
      </div>
      <div class="mlogin">
        <img src="./Epet_regsiter/logo.png" alt="">
      </div>
      <div class="tabs">
        <ul>
          <li  class="login_a">
            <a href="#login_form" @click="showI">普通登录</a>
            <i v-if="isShowI1"></i>
          </li>
          <li class="login_a">
            <a href="#newlogin_form" @click="showI">手机动态密码登录</a>
            <i  v-if="isShowI2"></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="mformBox">
        <div id="login_form" v-if="isShowI1" >
          <ul>
            <li class="clearfix">
              <span class="nameico"></span>
              <input type="text" placeholder="手机号/邮箱/用户名" name="username">
            </li>
            <li>
              <span class="passwordico"></span>
              <input type="text" placeholder="输入密码" name="password">
            </li>
          </ul>
        </div>
        <div id="newlogin_form" v-if="isShowI2">
          <ul>
            <li class="clearfix">
              <span class="numico"></span>
              <input type="text" placeholder="已注册的手机号" name="phone" v-model="phone">
            </li>
            <li>
              <span class="passwordico"></span>
              <input type="text" placeholder="请输入图片内容" name="varify">
              <span class="fr seccode" >
                  <img src="./Epet_regsiter/seccode.png">
                </span>
            </li>
            <li>
              <span class="passwordico"></span>
              <input type="text" class="dttext" placeholder="动态密码" v-model="code">
              <a class="get_phonepass " @click="sendCode">获取动态密码</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="ftc clearfix" >
        <a href="https://wap.epet.com/login.html?do=findpassword" class="btn-register">忘记密码？</a>
        <div class="clear"></div>
      </div>
      <div class="loginbtn" @click="login">
        <a href="#">登  录</a>
        <p>登陆状态: {{status}}</p>
      </div>
      <div class="space"></div>
      <div class="partners">
        <b>合作网站登录</b>
      </div>
      <div class="other_login">
        <div class="ZFB">
          <a href="#">
            <img src="./Epet_regsiter/login_ico2.png" alt="">
          </a>
        </div>
        <div class="QQ">
          <a href="#">
            <img src="./Epet_regsiter/login_ico4.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data () {
      return{
        isShowI1: true,
        isShowI2:false,
        phone: '',
        code: '',
        status: '未登陆'
      }
    },

    methods:{
      showI(){
        this.isShowI2 =!this.isShowI2
        this.isShowI1 =!this.isShowI1
      },
      sendCode() {
        const url = `codeapi/sendcode?phone=${this.phone}`
        axios.get(url).then(response => {
          console.log('sendcode result ', response.data)
        })
      },

      login() {
        axios.post('codeapi/login', {phone: this.phone, code: this.code}).then(response => {
          console.log('login result ', response.data)
          const result = response.data
          if (result.code == 0) {
            const user = result.data
            this.status = `登陆成功: ${user.phone}`
          } else {
            this.status = `登陆失败, 请输入正确的手机号和验证码`
          }
        })
      }
    },
    mounted(){

    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .loagin
    .header
      width 100%
      background url("./Epet_regsiter/logobg.png") no-repeat
      background-size cover
      .header-top
        height: 50px;
        line-height: 50px;
        position: relative;
        padding: 0 1em;
        .arrow
          display: block;
          width: 22px;
          height: 20px;
          position: absolute;
          margin-top: 16px;
          background: url('./Epet_regsiter/personal-bico3.png') no-repeat;
          background-size: 12px 17px;
        .register
          display block
          position: absolute
          right 10px
          top:0
          color: #fff;
          font-size 16px

      .mlogin
        padding: 1em 0 2em 0;
        img
          display: block;
          margin: auto;
          width: 20%;
      .tabs
        width 100%
        height 44px
        background-color: rgba(255,255,255,0.3);
        ul
          width 100%
          display flex
          li
            float: left;
            text-align: center;
            height: 44px;
            line-height: 44px;
            position: relative;
            width 0
            flex 1
            a
              font-size: 15px;
              color: #fff;
              display: block;
            i
              width: 0;
              height: 0;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
              border-bottom: 10px solid #fff;
              position: absolute;
              bottom 0px
              left: 0;
              right: 0;
              margin auto
              display block
    .main
      width 100%
      height 400px
      .mformBox
        position
        background: #fff;
        border-radius: 0.5em;
        margin: 0em 4% 1em 4%;
        padding: 0 1.6%;
        #login_form
          width 100%
          color white
          ul
            li
              border-bottom: #e2e2e2 solid 1px;
              padding: 12px 0 12px 30px;
              position: relative;
              span
                float: left;
                display: inline;
                width: 17px;
              .nameico
                height: 21px;
                background: url('./Epet_regsiter/ico3.png') no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .passwordico
                height: 20px
                margin: 0px 0 0 -25px;
                background: url('./Epet_regsiter/ico4.png') no-repeat;
                background-size: contain;
              input
                display: block;
                height: 21px;
                width: 100%;
                font-size: 15px;
                border: none;
                padding: 0px;
                color: #666;
                font-family: "Microsoft Yahei",tahoma,arial;
                outline: none;
        #newlogin_form
          width 100%
          color white
          ul
            background-color white
            li
              border-bottom: #e2e2e2 solid 1px;
              padding: 12px 0 12px 30px;
              position: relative;
              .get_phonepass
                background: #fff;
                color: #ff4259;
                border: 1px solid #eb4c33;
                position: absolute;
                right: 0;
                top: 0.5em;
                border-radius: 3px;
                width: 100px;
                text-align: center;
                padding: 0.3em 0;
              .seccode
                position absolute
                top:0
                right 0
                line-height 46px
              .numico
                float: left;
                display: inline;
                width: 17px;
                height: 17px;
                background: url('./Epet_regsiter/ico1.png') no-repeat;
                background-size: contain;
                margin: 1px 0 0 -25px;
              .passwordico
                float: left;
                display: inline;
                width: 17px;
                height: 20px
                margin: 0px 0 0 -25px;
                background: url('./Epet_regsiter/ico4.png') no-repeat;
                background-size: contain;
              input
                display: block;
                height: 21px;
                width: 100%;
                font-size: 15px;
                border: none;
                padding: 0px;
                color: #666;
                font-family: "Microsoft Yahei",tahoma,arial;
                outline: none;


      .ftc
        padding:0 2em;
        a
          display block
          font-size 14px
          float right

      .loginbtn
        text-align: center
        padding-top: 2em;
        a
          display: block;
          letter-spacing: 5px;
          margin: 0 4%;
          border-radius: 5px;
          background: #2ec975;
          font-size: 15px;
          padding: .6em 0;
          text-align: center;
          color: #fff;
      .space
        width 100%
        height 20%
      .partners
        text-align center
        font-size 16px
        color: #d7d7d7;
        margin-top: 0.5em

      .other_login
        width 100%
        padding: 1.5em 0;
        display flex
        div
          width 0
          flex 1
          text-align center
          a
            display inline-block
            img
              width: 60%;
              height: auto;
              display: block;
              margin: auto;
              max-width: 176px;

</style>
