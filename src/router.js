import VueRouter from 'vue-router'

import Home from './components/tabbar/HomeContainer.vue'
import Member from './components/tabbar/MemberContainer.vue'
import Search from './components/tabbar/SearchContainer.vue'
import Shopcar from './components/tabbar/ShopcarContainer.vue'
import News from './components/news/NewList.vue'
import NewsInfo from './components/news/Newinfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodList from './components/goods/GoodLists.vue'
import GoodInfo from './components/goods/GoodInfo.vue'
import GoodDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'
import VideoList from './components/Video/VideoList.vue'
import VideoPlay from './components/Video/VideoPlay.vue'
import Talk from './components/talk/Talk.vue'
var router=new VueRouter({
    routes:[
        {path:'/home',component:Home},
        {path:'/member',component:Member},
        {path:'/shopCart',component:Shopcar},
        {path:'/search',component:Search},
        {path:'/home/news',component:News},
        {path:'/home/newInfo/:id',component:NewsInfo},
        {path:'/home/photoList',component:PhotoList},
        {path:'/home/photoinfo/:id',component:PhotoInfo},
        {path:'/home/goodlists/',component:GoodList},
        {path:'/home/goodInfo/:id',component:GoodInfo,name:'goodinfo'},
        {path:'/home/goodDesc/:id',component:GoodDesc,name:'gooddesc'},
        {path:'/home/goodComment/:id',component:GoodsComment,name:'goodcomment'},
        {path:'/home/video',component:VideoList},
        {path:'/home/videoPlay/:id',component:VideoPlay},
        {path:'/home/talk',component:Talk},
    ],
    linkActiveClass:'mui-active'        //覆盖默认的路由高亮的类，默认的类叫做linkActiveClass
})
export default router