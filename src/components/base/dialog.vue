<template>
  <div>
    <section class="dialog-wrap">
      <div class="dialog-cover" v-if="isShow" @click="closeMyself"></div>
      <div class="dialog-content" v-if="isShow">
        <p class="dialog-close" @click="closeMyself">&times;</p>
        <slot>empty</slot>
      </div>
    </section>
  </div>
</template>

<script>

  export default{
      props:{
        isShow:{
          type:Boolean,
          default:false
        }
      },
      data(){
          return{

          }
      },
    methods:{
      closeMyself(){
          this.$emit("on-close")
      }
    }
  }
</script>

<style>
  .dialog-wrap{
    position: fixed;
    width:100%;
    height:100%;
  }
  .dialog-cover{
    position: fixed;
    top:0;
    left:0;
    opacity:.3;
    width:100%;
    height:100%;
    background: #000;
    z-index:10;
  }
  .dialog-content{
    position: fixed;
    top:20%;
    left:50%;
    margin-left: -25%;
    width:50%;
    max-height:50%;
    line-height: 1.6;
    z-index:10;
    background: #fff;
    overflow: auto;
    border:2px solid #464068;
    padding:2%;
  }
  .dialog-close{
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    text-align: center;
  }
  .dialog-close:hover{
    color: #4fc08d;
  }
</style>
