<template>
<div class="app-container">
<mt-header title="Vue-mobile-learn">
	<router-link to="/" slot="left">
		<mt-button icon="back" @click="goback" v-show="flag">返回</mt-button>
	</router-link>
	<mt-button icon="more" slot="right"></mt-button>
</mt-header>
	
		
<transition>
    <router-view></router-view>
</transition>


<nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item1" to="/home">
			<span class="mui-icon el-icon-s-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		
		<router-link class="mui-tab-item1" to="/shopCart">
			<span class="mui-icon el-icon-shopping-cart-1" id="badge">
				<span class="mui-badge">{{$store.getters.getAllCount}}</span>
			</span>
			<span class="mui-tab-label" >购物车</span>
		</router-link>
		<router-link class="mui-tab-item1" to="/search">
			<span class="mui-icon el-icon-view" @click="No"></span>
			<span class="mui-tab-label">发现</span>
		</router-link>
		<router-link class="mui-tab-item1" to="/member">
			<span class="mui-icon el-icon-s-custom"></span>
			<span class="mui-tab-label">个人中心</span>
		</router-link>
</nav>

</div>
</template>
<script>
	    import {Toast} from 'mint-ui'
export default{
	data() {
		return {
			flag:true
		}
	},
	created() {
		this.flag=this.$route.path==='/home'?false:true;
	},
	methods: {
		goback(){
			this.$router.go(-1)
		},
		No(){
			Toast('暂未开放')
		}

	},
	watch: {
		'$route.path':function(newVal){
			if(newVal==='/home'){
				this.flag=false
			}else{
				this.flag=true
			}
		}
	},
}
</script>
<style>

.v-enter{
    opacity:0;
    transform:translateX(100%)
}
.app-container img{width:100%}
.v-leave-to{
    opacity:9;
    transform:translateX(-100%);
    position:absolute;
}
.v-enter-active,
.v-leave-active{
    transition:all 0.5s ease;
}
.app-container{
    padding:0px 0 50px 0;
    overflow-x:hidden;
}
body{background-color:white}
</style>