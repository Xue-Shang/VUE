<template>
<div class="shopcar-container">
    <!-- 商品列表区域 -->
    <div class="goods-list">
        <div class="mui-content" >
            <!-- item是每个对象，i是索引 -->
            <div class="mui-card" v-for="(item,i) in allShops" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getGoodsSelect[item.id]"
                    @change="selectedChange(item.id,$store.getters.getGoodsSelect[item.id])"
                    ></mt-switch>
                    <img :src="item.img_url">
                    <div class="info">
                        <h1>{{item.title}}</h1>
                        <p>
                            <span class="price">{{item.price}}</span>
                            <!-- 父组件向子组件传值 -->
               
                            <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsId="[item.id]"></numbox>
               
                            <a href="#" @click.prevent="remove(item.id,id)">删除</a>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner jiesuan">
                <div class="left">
                    <p>总计（不含运费）</p>
                    <p>已勾选商品
                        <span class="red">{{allShops.count}}</span>
                        件，总价￥
                        <span class="red">{{$store.getters.getGoodsCountAndAmount.amount}}</span>
                    </p>
                </div>
                <mt-button type="danger">去结算</mt-button>
            </div>
           
        </div>
    </div>
    <div style="width:100%;height:250px;background-color: #eee"></div>
</div>
</template>
<script>
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default{
    data() {
        return {
            allShops:[],
   
        }
    },
    created() {
        this.getGoodsList();
       
    },

    methods: {
        init(){

        },
        getGoodsList(){
     
            this.$store.state.car.forEach(item=>{
               this.allShops.push(item)   
               console.log(this.allShops)  
            })            
            
                  
             
        },
        remove(id,index){
   
            //点击删除，把商品从store中根据传递的ID删除，同时，把当前组件中的goodslist中，对应要删除的那个商品，使用index来删除
        this.allShops.splice(index,1);

        this.$store.commit('removeFromCar',id)
        },
        selectedChange(id,val){
         
            this.$store.commit('updateSelected',{id,selected:val})
        }
    },
    components:{
        numbox
    }
}

</script>
<style scoped>
.shopcar-container{
    background-color: #eee;
    overflow: hidden;
}
.mui-card-content-inner{
    display: flex;
    align-items: center;
}
img{
    width: 61px;
    height: 60px;
}
h1{
    font-size: 14px
}
.info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.price{
    color:red;font-weight: bold;
}
.jiesuan{
    display: flex;
    justify-content: space-between;
    align-items: center
}
.red{
    color:red;
    font-size: 16px;
    font-weight: bold;
}
</style>