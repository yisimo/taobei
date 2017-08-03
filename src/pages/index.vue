<template>
  <div class="index-wrap">
    <section class="index-left">
      <nav class="index-left-block">
        <h2>全部产品</h2>
        <template v-for="product in productList">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list">
              <a :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot" class="hot-tag">Hot</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
      </nav>

      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </section>

    <section class="index-right">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
      <div class="index-board-list">
        <div
          class="index-board-item"
          v-for="(item,index) in boardList"
          :class="[{'line-last':index % 2 !== 0},'index-board-'+item.id]">
          <article class="index-board-item-inner">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
            <div class="index-board-button">立即购买</div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import slideShow from '../components/slideShow.vue'

  export default{
      components:{
        slideShow
      },
    created:function () {
      /*使用vue-resource进行ajax数据请求*/
      this.$http.get('api/getNewsList')
        .then((res) => {
          this.newsList = res.data
        },(err) => {
          console.log(err)
        })
    },
    data(){
        return{
          invTime: 2000,
          slides:[
            {
              src:require("../assets/slideShow/pic1.jpg"),
              title:'React.js入门与实战',
              href:'detail/analysis'
            },
            {
              src:require("../assets/slideShow/pic2.jpg"),
              title:'Android高级开发',
              href:'detail/count'
            },
            {
              src:require("../assets/slideShow/pic3.jpg"),
              title:'玩转算法面试',
              href:'http://xxx.xxx.com'
            },
            {
              src:require("../assets/slideShow/pic4.jpg"),
              title:'开发跨平台Github App',
              href:'detail/forecast'
            }

          ],
           productList:{
             pc:{
               title:'PC产品',
               list:[
                 {
                   name:'数据统计',
                   url:'https://bigdata.163yun.com/'
                 },
                 {
                   name:'数据预测',
                   url:'https://www.umeng.com/'
                 },
                 {
                   name:'流量分析',
                   url:'http://www.chinaz.com/',
                   hot:true,
                 },
                 {
                   name:'广告发布',
                   url:'http://e.qq.com/ads/400'
                 }
               ]
             },
             app:{
               title:'手机应用',
               last:true,
               list:[
                 {
                   name: '91助手',
                   url: 'http://weixin.com'
                 },
                 {
                   name: '产品助手',
                   url: 'https://pro.25pp.com/',
                   hot:true,
                 },
                 {
                   name: '智能地图',
                   url: 'http://maps.com'
                 },
                 {
                   name: '团队语音',
                   url: 'http://phone.com'
                 }
               ]
             }
           },
          newsList:[],
          boardList:[
            {
              title:'开放产品',
              description:'开放产品是定位于所有开放产品',
              id:'car',
            },
            {
              title:'品牌营销',
              description:'品牌营销帮助你的产品更好地找到定位',
              id:'loud',
            },
            {
              title:'使命必达',
              description:'使命必达快速迭代永远保持最前端的速度',
              id:'earth',
            },
            {
              title:'勇攀高峰',
              description:'帮你勇闯高峰，到达事业的顶峰',
              id:'hill',
            },
          ],
        }
    }

  }
</script>

<style scoped>
  .index-wrap{
    width: 1200px;
    margin:0 auto;
    overflow: hidden;
  }
  .index-left{
    width: 300px;
    float: left;
    text-align: left;
  }
  .index-right{
    width: 900px;
    float: left;
  }
  .index-left-block{
    background-color: #fff;
    margin: 15px;
    -webkit-box-shadow: 0 0 1px #ddd;
    -moz-box-shadow: 0 0 1px #ddd;
    box-shadow: 0 0 1px #ddd;
    box-shadow:0 0 1px #ddd;
  }
  .index-left-block a:hover{
    color: #4fc08d;
  }
  .index-left-block .hr{
    margin-bottom: 20px;
  }
  .index-left-block h2{
    background: #4fc08d;
    color: #fff;
    padding:10px 15px;
    margin-bottom: 20px;
  }
  .index-left-block h3{
    padding:0 15px 5px 15px;
    color: #222;
    font-weight: bold;
  }
  .index-left-block ul{
    padding:10px 15px;
  }
  .index-left-block li{
    padding: 5px;
  }
  .hot-tag{
    background-color: red;
    color: #fff;
  }
  .index-board-list{
    overflow: hidden;
  }
  .index-board-item{
    float:left;
    -webkit-box-shadow: 0 0 1px #ddd;
    -moz-box-shadow: 0 0 1px #ddd;
    box-shadow: 0 0 1px #ddd;
    padding: 20px;
    margin-bottom: 20px;
    margin-right: 20px;
    width: 400px;
    background: #fff;
  }
  .index-board-item-inner{
    min-height: 125px;
    padding-left: 120px;
  }
  .index-board-car .index-board-item-inner{
    background: url("../assets/images/1.png") no-repeat;
  }
  .index-board-earth .index-board-item-inner{
    background: url("../assets/images/2.png") no-repeat;
  }
  .index-board-loud .index-board-item-inner{
    background: url("../assets/images/3.png") no-repeat;
  }
  .index-board-hill .index-board-item-inner{
    background: url("../assets/images/4.png") no-repeat;
  }
  .index-board-item h2{
    font-weight: bold;
    font-size: 18px;
    color: #000;
    margin-bottom: 20px;
  }
  .line-last{
    margin-right: 0;
  }
  .index-board-button{
    margin-top: 20px;
    background: #4fc08d;
    color: #fff;
    padding: 10px;
    width: 60px;
  }
  .lastest-news{
    min-height: 512px;
  }
  .new-item{
    display: inline-block;
    width: 230px;
    text-overflow: ellipsis;
    white-space:nowrap;
    overflow: hidden;
  }

</style>
