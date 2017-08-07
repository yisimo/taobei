<template>
  <div class="sales-board">
    <article class="sales-board-intro">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </article>

    <section class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="buyTypes" @on-change="onParamChange('buyType',$event)"></v-selection>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          适用地区：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :selections="regionList" @on-change="onParamChange('region',$event)"></v-chooser>
        </div>
      </div>


      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :selections="periodList" @on-change="onParamChange('period',$event)"></v-chooser>
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          500 元
        </div>
      </div>

      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div>
        </div>
      </div>
    </section>

    <section class="sales-board-des">
      <h2>产品说明</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>

      <table class="sales-board-table">
          <tbody>
              <tr class="ui-table-row">
                <td class="col-first">
                  <div class="intro-pic">
                    <label>安全安保</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>办公文教</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>彩票</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>车辆物流</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>成人用品</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>出版传媒</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>电脑硬件</label>
                  </div>
                </td>
              </tr>
              <tr class="ui-table-row">
                <td class="col-first">
                  <div class="intro-pic">
                    <label>电子电工</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>房地产建筑装修</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>分类平台</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>服装鞋帽</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>箱包饰品</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>化工原料制品</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>机械设备</label>
                  </div>
                </td>
              </tr>
              <tr class="ui-table-row">
                <td class="col-first">
                  <div class="intro-pic">
                    <label>家庭日用品</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>家用电器</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>教育培训</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>节能环保</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>金融服务</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>礼品</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>旅游住宿</label>
                  </div>
                </td>
              </tr>
              <tr class="ui-table-row">
                <td class="col-first">
                  <div class="intro-pic">
                    <label>美容化妆</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>母婴护理</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>农林牧渔</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>软件</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>商务服务</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>生活服务</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>食品保健品</label>
                  </div>
                </td>
              </tr>
              <tr class="ui-table-row">
                <td class="col-first">
                  <div class="intro-pic">
                    <label>手机数码</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>通讯服务设备</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>网络服务</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>医疗服务</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>游戏</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>运动休闲娱乐</label>
                  </div>
                </td>
                <td>
                  <div class="intro-pic">
                    <label>招商加盟</label>
                  </div>
                </td>
              </tr>
          </tbody>
      </table>
    </section>
  </div>
</template>

<script>
  import VSelection from '../../components/base/selection.vue'
  import VChooser from '../../components/base/chooser.vue'
  export default{
      components:{
        VSelection,
        VChooser,
      },
      data(){
        return{
          price:0,
          period:{},
          region:{},
          buyType:{},
          buyTypes:[
            {
              label:'入门版',
              value:0
            },
            {
              label:'中级版',
              value:1
            },
            {
              label:'高级版',
              value:2
            },
          ],
          periodList:[
            {
              label:'半年',
              value:0
            },
            {
              label:'一年',
              value:1
            },
            {
              label:'三年',
              value:2
            },
          ],
          regionList:[
            {
              label:'华南',
              value:0
            },
            {
              label:'华中',
              value:1
            },
            {
              label:'华东',
              value:2
            },
            {
              label:'华北',
              value:3
            },
            {
              label:'西南',
              value:4
            },
            {
              label:'西北',
              value:5
            },
          ],
        }
      },
      methods:{
        onParamChange(attr,val){
            this[attr] = val,
            this.getPrice()
        },
        getPrice(){

        }
      }

  }

</script>

<style scoped>
  .intro-pic{
    text-align: center;
  }
</style>
