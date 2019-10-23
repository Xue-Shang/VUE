

<template>
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in lunbotuList" :key="item.id">
                <img :src="item.img" alt="" :class="{full:isfull}">
          </el-carousel-item>
        </el-carousel>
      </template>

<script>
    export default{
        data() {
            return {
                List:[]
            }
        },
      
        created() {
            this.getLunbotu()
        },
        methods: {
            getLunbotu(){
                this.List=this.lunbotuList    
            },
        },
        props:["lunbotuList","isfull"],
    }
</script>
<style scoped>
     .el-carousel__indicators--outside{background-color:white;border-radius:0px 0px 10px 10px;box-shadow: 8px 15px 8px gainsboro}
     .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.mint-swipe{
    height:200px;
}
img{

    height:100%
}
.full{
    width:100%
}
</style>