<template>
  <div @click="resetComponent">
    <header class="app-head">
      <section class="app-head-inner">
        <router-link :to="{path:'/'}">
          <img src="../assets/logo.png" alt="icon">
        </router-link>
        <nav class="head-nav">
          <ul class="nav-list">
            <li>{{ username }}</li>
            <li v-if="username !== '' " class="nav-pile">|</li>
            <li v-if="username !== '' " @click="quit">退出</li>
            <li v-if="username == '' " @click="logClick">登录</li>
            <li v-if="username == '' " class="nav-pile">|</li>
            <li v-if="username == '' " @click="regClick">注册</li>
            <li class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </nav>
      </section>
    </header>

    <main class="container">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </main>


    <footer class="app-foot">
      <p>版权所有 &copy; 2017 一丝墨</p>
    </footer>

    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form @has-register="onSuccessReg"></reg-form>
    </my-dialog>

    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>本人谢权，花名一丝墨，2015年本科毕业，前端开发工程师，至今工作两年有余，熟悉HTML、CSS、JavaScript、jQuery、Bootstrap，略通VUEjs、webpack,了解Git、SVN等代码管理工具。QQ:1061473663</p>
    </my-dialog>
  </div>
</template>

<script>
  import Dialog from "../components/base/dialog.vue"
  import LogForm from '../components/logForm.vue'
  import RegForm from '../components/regForm.vue'
  import { eventBus } from '../evenBus'
export default {
  components:{
    myDialog:Dialog,
    LogForm,
    RegForm
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowLogDialog: false,
      isShowRegDialog: false,
      username:''
    }
  },
  methods:{
    logClick(){
        this.isShowLogDialog = true
    },
    regClick(){
         this.isShowRegDialog = true
    },
    aboutClick(){
        this.isShowAboutDialog = true
    },
    closeDialog(attr){
        this[attr] = false
    },
    onSuccessLog(data){
        console.log(data)
        this.closeDialog('isShowLogDialog')
        this.username = data.username
    },
    onSuccessReg(data){
        console.log(data)
      this.closeDialog('isShowRegDialog')
      this.username = data.username
    },
    quit(){
        this.username = ''
    },
    resetComponent(){
      eventBus.$emit('reset-component')
    }
  }
}
</script>

<style>
  /*reset*/
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }

  .app-head{
    background: #363636;
    color: #b2b2b2;
    width:100%;
    height: 90px;
    line-height: 90px;
  }
  .app-head-inner{
    width: 1200px;
    margin:0 auto;
  }
  .head-logo{
    float: left;
  }
  .app-head-inner img{
    width: 50px;
    margin-top: 20px;
    margin-left: 15px;
  }
  .head-nav{
    float: right;
  }
  .head-nav ul{
    overflow: hidden;
  }
  .head-nav li{
    float: left;
    cursor: pointer;
  }
  .nav-pile{
    padding:0 10px;
  }
  .app-foot{
    width:100%;
    height: 80px;
    line-height: 80px;
    background: #e3e4e8;
    text-align: center;
    margin-top: 30px;
    clear: both;
  }
  .container{
    width: 1200px;
    margin:0 auto;
  }
  .hr{
    height: 1px;
    width:100%;
    background: #ddd;
  }
  .button{
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding:10px 20px;
    border-radius: 3px;
    cursor: pointer;
  }
  .button:hover{
    background: #4fc08d;
  }
  .g-form-line{
    padding: 15px 0;
  }
  .g-form-label{
    display: inline-block;
    width: 100px;
    font-size: 16px;
  }
  .g-form-input{
    display: inline-block;
  }
  .g-form-input input{
    height: 30px;
    line-height: 30px;
    width: 200px;
    padding:0 10px;
    vertical-align: middle;
    border:1px solid #ccc;
  }
  .g-form-btn{
    padding-left: 105px;
  }
  .g-form-error{
    color: red;
    padding-left: 15px;
  }
  .error-text{
    color: red;
  }
</style>
