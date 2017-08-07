<template>
  <div class="chooser-component">
    <ul class="chooser-list">
      <li
        v-for="(item,index) in selections"
        @click="toggleSelection(index)"
        :title="item.label"
        :class="{ active:checkIndex(index) }"
        >{{ item.label }}</li>
    </ul>
  </div>
</template>

<script>
  import _ from "lodash"
  export default{
      props:{
          selections:{
            type:Array,
            default:{
              label:'test',
              value:0
            }
          }
      },
      data(){
          return{
              nowIndexes:[0]
          }
      },
      methods:{
        toggleSelection(index){
            if(this.nowIndexes.indexOf(index) === -1){
                this.nowIndexes.push(index)
            }else{
                this.nowIndexes = _.remove(this.nowIndexes,idx => {
                    return idx !== index
                })
            }
            let nowObjArray = _.map(this.nowIndexes,idx => {
                return this.selections[idx]
            })
            this.$emit('on-change',nowObjArray)
        },
        checkIndex(index){
            return this.nowIndexes.indexOf(index) !== -1
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
