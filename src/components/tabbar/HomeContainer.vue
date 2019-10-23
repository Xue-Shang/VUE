<template>
<div>
<div class="mui-content">
    <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>
	<ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
		         
           <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-xinwennews"></use>
                </svg>
		        <div class="mui-media-body">新闻资讯</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
		       <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-tupian"></use>
                </svg>
		        <div class="mui-media-body">图片分享</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlists">
		         <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-ziyuan"></use>
                </svg>
		        <div class="mui-media-body">商品购买</div></router-link></li>
		
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/video">
		        <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-shipin"></use>
                </svg>
                <div class="mui-media-body">视频专区</div></router-link></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/talk">
                    <svg class="icon svg-icon" aria-hidden="true">
                     <use xlink:href="#icon-liaotian"></use>
                   </svg>
                   <div class="mui-media-body">留言我们</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="">
		        <svg class="icon svg-icon" aria-hidden="true">
                  <use xlink:href="#icon-dianhua"></use>
                </svg>
		        <div class="mui-media-body">联系我们</div></router-link></li>
	</ul> 
       
</div>
</div>
</template>
<script>
import  {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'
export default{
    data(){
        return {
            lunbotuList:[
            {"id":1,"url":"http://www.itcast.cn/subject/phoneweb/index.html","img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572459109&di=5472652d8ea0f9ba7f162fcc0f3b1cf1&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F337%2F18329.jpg"},
            {"id":2,"url":"http://www.itcast.cn/subject/phoneweb/index.html","img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571864463818&di=2aed497de18dde96a5f4b2cf0565bf10&imgtype=0&src=http%3A%2F%2Fimg3m6.ddimg.cn%2F60%2F6%2F61881396-1_k_2.jpg"},
            {"id":3,"url":"http://www.itcast.cn/subject/phoneweb/index.html","img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571864583779&di=d439fac78fde218caf4ce0f690248e08&imgtype=0&src=http%3A%2F%2Ff.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F8718367adab44aed9bdddf80b51c8701a08bfbc7.jpg"}
            ]
        };
    },
    methods: {
 
    },
    components:{
            swiper
        }
}
</script>

<style scoped>
   
    .mui-grid-view[data-v-4fcacc3e]{background-color:#FCFCFC}
.mui-grid-view{
    background-color:white;
    border:none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size:40px
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size:13px
}

</style>