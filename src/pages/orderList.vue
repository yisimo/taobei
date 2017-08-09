<template>
  <section class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期：
        <my-date-picker language="zh" format="yyyy-MM-dd" @on-change="getStartDate"></my-date-picker>
      </div>

      <div class="order-list-option">
        结束日期：
        <my-date-picker language="zh" format="yyyy-MM-dd" @on-change="getEndDate"></my-date-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" class="order-query" v-model.lazy="query">
      </div>
    </div>
  </section>
</template>

<script>
  import VSelection from '../components/base/selection.vue'
  import MyDatePicker from 'vuejs-datepicker'
  export default{
      components:{
        VSelection,
        MyDatePicker
      },
      data(){
          return{
            productId:0,
            query:'',
            startDate:'',
            endDate:'',
            products: [
              {
                label: '数据统计',
                value: 0
              },
              {
                label: '数据预测',
                value: 1
              },
              {
                label: '流量分析',
                value: 2
              },
              {
                label: '广告发布',
                value: 3
              }
            ],
          }
      },
      watch:{
        query(){
            this.getList()
          }
      },
      methods:{
        productChange(obj){
          this.productId = obj.value
          this.getList()
        },
        getList(){

        },
        getStartDate(date){
            this.startDate = date,
            this.getList()
          console.log(this.startDate)
        },
        getEndDate(date){
            this.endDate = date,
            this.getList()
          console.log(this.startDate)
        }

      }
  }
</script>

<style scoped>
  .order-wrap{
    width: 1200px;
    min-height: 800px;
    margin:20px auto;
    overflow: hidden;
  }
  .order-wrap h3{
    font-size: 20px;
    font-weight:bold;
    margin-bottom: 20px;
  }
  .order-query{
    height: 25px;
    line-height: 25px;
    border:1px solid #e3e3e3;
    outline:none;
    text-indent: 10px;
  }
  .order-list-option{
    display: inline-block;
    padding-left: 15px;
  }
  .order-list-option:first-child{
    padding-left:0;
  }
</style>
