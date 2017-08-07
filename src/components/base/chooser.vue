<template>
  <section class="chooser-component">
    <ul class="chooser-list">
      <li
        v-for="(item,index) in selections"
        @click="chosenSelection(index)"
        :title="item.label"
        :class="{active:index === nowIndex}">
        {{ item.label }}
      </li>
    </ul>
  </section>
</template>

<script>
  export default{
      data(){
          return{
              nowIndex:0
          }
      },
      props:{
          selections:{
              type:Array,
              default:{
                  label:'test',
                  value:0
              }
          }
      },
      methods:{
          chosenSelection(index){
              this.nowIndex = index;
              this.$emit("on-change",this.selections[index])
          }
      }
  }
</script>

<style scoped>
  .chooser-component{
    display: inline-block;
    position: relative;
  }
  .chooser-list li{
    display: inline-block;
    height: 25px;
    line-height: 25px;
    cursor: pointer;
    padding:0 8px;
    margin-right: 5px;
    border-radius: 3px;
    border:1px solid #e3e3e3;
    text-align: center;
  }
  .chooser-list li.active{
    background: #4fc08d;
    border-color: #4fc08d;
    color: #fff;
  }
</style>
