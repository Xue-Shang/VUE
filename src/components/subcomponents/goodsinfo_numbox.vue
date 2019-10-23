<template>
   <!-- max是从父组件item.stock_quantity传来的值，而这个值是请求数据库调取出来的，由于异步操作，还没从数据库
   调取出来的时候，max就已经挂载到上了，获得的值是undefined -->
    <span class="mui-numbox" data-numbox-min='1' :data-numbox-max='max'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <!-- change事件一监听到数据改变，就好触发该对应事件 -->
        <input id="test" class="mui-input-numbox" type="number" :value="initcount"  @change="countChange" ref="num">
        <!-- get方法是用来测试 所有组件是否能从 store 调用数据       结论：可以 -->
        <button class="mui-btn mui-btn-numbox-plus" type="button" @click="get">+</button>
  </span>
   
</template>
<script>
    import mui from '../../lib/mui/js/mui.js'
    export default{
        mounted() {
            //初始化数字选择框组件
            mui(".mui-numbox").numbox();
        },
        methods: {
            countChange(){     
                this.$emit('getcount',parseInt(this.$refs.num.value))
                console.log(parseInt(this.$refs.num.value))
 
                this.$store.commit('updateGoodsInfo',{id:this.goodsId,count:this.$refs.num.value})
            },
            get(){
                // console.log(this.$store.state)  //可以访问 store.state存储的数据
            },
            
        },
        props:["initcount","max","goodsId"],
        watch: {
            max:function(newVal,oldVal){
                mui(".mui-numbox").numbox().setOption("max",newVal)
            }
        },
    }
</script>
<style scoped>
</style>