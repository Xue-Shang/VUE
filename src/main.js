import 'jquery'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import Vue from 'vue'
//启用vue插件
Vue.config.devtools = true
import app from './APP.vue'
import 'mint-ui/lib/style.css'
import './style.css'
import './lib/mui/css/feedback.css'
import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'
import './icon/iconfont.css'
import './icon/iconfont.js'
import './icon/demo.css'

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//导入路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入自己定义的路由
import router from './router.js'

import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
//全局设置post时候表单数据格式组织形式
Vue.http.options.emulateJSON=true;

// import { Header } from 'mint-ui';
// import { Swipe, SwipeItem,Button , Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



//导入格式化插件
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
var car=JSON.parse(localStorage.getItem('car') || '[]')
var store=new Vuex.Store({
    state:{ //this.$store.state.***
        //将购物车的商品的数据，用一个数组存储起来，在car数组中，存储一些商品的对象，我们可以暂时将这个商品对象，设计成这个样子
        //{id:商品的id , count:要购买的数量 , price:商品的单击 , selected:false}
        car:car


    },
    mutations:{//this.$store.commit('方法名称','按需传递唯一的参数')
        addToCar(state,goodsinfo){
            var flag=false
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count+=parseInt(goodsinfo.count)
                    flag=true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item=>{
                if(item.id==goodsinfo.id){
                    item.count=parseInt(goodsinfo.count)
                    return true
                }
            })
            //当修改完商品的数量，把最新的购物数据，保存到本地存储中
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeFromCar(state,id){
            //循环遍历，从store与组件传来的删除id的数据进行匹配，符合的就从store中删除
            state.car.some((item,i)=>{
                if(item.id==id){
                    console.log('aa')
                    state.car.splice(i,1)
                    return true
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateSelected(state,select){
            state.car.some(item=>{
                if(select.id==item.id){
                    item.selected=select.selected
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters:{//this.$store.getters.***
        getAllCount(state){    //使用该方法，一旦方法中的数据（getters.***----***就是数据）发生变化，就会调用该方法
            var c=0;
            state.car.forEach(item=>{
                c+=parseInt(item.count);
            })
            return c
           
        },
        getGoodsCount(state){
            var o={}
            state.car.forEach(item=>{   
                o[item.id]=item.count
            })
            return o    
        },
        getGoodsSelect(state){
            var o={}
            state.car.forEach(item=>{
               o[item.id]=item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count
                    o.amount+=item.price*item.count
                }
            })
            return o
        }
    }
})
var vue=new Vue({
    el:"#app",
    render:c=>c(app),
    router,//挂载路由对象到vm实例上
    store
})


/**
 * ----安装mint-ui组件-----
 * 全局安装
 *  1.npm i mint-ui -S
 * 导入样式
 *  2.import 'mint-ui/lib/style.css'
 * 
 */

 /**
  * -----路由------
  * main.js
  *     1.1导入路由模块
  *         import VueRouter from 'vue-router'
  *         Vue.use(VueRouter)
  *     1.2.导入自己定义的路由
  *         import router from './router.js'
  * 
  *     2.1挂载
  *         在vue实例中 挂载 router
  * 
  * APP.vue(内容区域--父组件)
  *     1.1路由链接
  *         <router-link to="">
  *     1.2路由地址承载体
  *         <router-view>
  * 
  * router.js(匹配区域--连接父组件与子组件)
  *     1.1 导入子组件
  *         import Home from './components/tabbar/HomeContainer.vue'
  *     1.2 创建路由实例，设置父子关系
  *          {path:'/home',component:Home}
  *     1.3 暴露路由实例
  *         export default router
  * 
  * HomeContainer.vue(子组件)
  *     1.1 写入内容
  * 
  * 总结：
  * ---main.js 导入了 APP.vue  和 router.js ，
  *     APP.vue 导入了 子组件；
  *     router.js 确立了APP.vue（父组件）和子组件的关系
  *     将匹配的子组件内容承载在APP.vue中（父组件）
  * 
  */