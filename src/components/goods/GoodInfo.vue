<template>
    <div class="goodsinfo-container">
            <transition
            @before-enter="beforeEnter" 
            @enter="enter"
            @after-enter="afterEnter">
                <div class="ball" v-if="flag" ref="ball"></div>
        </transition>
        
            <div class="mui-content">
                    <div class="mui-card">
                        
                              <img :src="goodsData.img_url">
                        
                    </div>
                    <!-- 商品购买区域 -->
                    <div class="mui-card">
                            <div class="mui-card-header">{{goodsData.title}}</div>
                            <div class="mui-card-content">
                                <div class="mui-card-content-inner">
                                   <p class="price">
                                       市场价：<del>{{goodsData.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">{{goodsData.sell_price}}</span>
                                   </p>
                                   <p>
                                       <!-- @getcount子组件传值给父组件，:max父组件传值给子组件 -->
                              购买数量：<numbox @getcount="getSelectCount" :max="goodsData.stock_quantity" :initcount="1"></numbox>
                                   </p>
                                   <p>
                                       <mt-button type="primary" size="small" >立即购买</mt-button>
                                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                                    </p>
                                </div>
                            </div>
                          
                        </div>
                        <!-- 商品参数区域 -->
                    <div class="mui-card">
                        <div class="mui-card-header">商品参数</div>
                        <div class="mui-card-content">
                            <div class="mui-card-content-inner">
                               <p>商品货号：{{goodsData.goods_no}}</p>
                               <p>库存情况：{{goodsData.stock_quantity}}</p>
                               <p>上架时间：{{goodsData.add_time | dateFormat}}</p>
                            </div>
                        </div>
                        <div class="mui-card-footer">
                            <mt-button type="primary" size="large" @click="goDesc(goodsData.id)">图文介绍</mt-button>
                            <mt-button type="danger" size="large" @click="goComment(goodsData.id)">商品评论</mt-button>
                        </div>
                    </div>
                    </div>
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
    export default{
        data() {
            return {
                id:this.$route.params.id,
                lunboImg:[],
                goodsData:[],
                goodsDatas:[
              
                        {"id":87,"title":"华为（HUAWEI）荣耀6Plus 16G双4G版","add_time":"2015-04-19T16:51:03.000Z","zhaiyao":"荣耀6 Plus，该机型分为两款型号，分别为PE-","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/98197/15/214/99252/5da97650Ef1b6b3a7/528cc8b3f9ade84b.jpg","sell_price":2195,"market_price":2499,"stock_quantity":60},
                        {"id":88,"title":"苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）","add_time":"2015-04-19T17:00:58.000Z","zhaiyao":"iPhone 6 Plus设计上和iPhone 6","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/98197/15/214/99252/5da97650Ef1b6b3a7/528cc8b3f9ade84b.jpg","sell_price":5780,"market_price":6388,"stock_quantity":200},
                        {"id":89,"title":"小米（Mi）小米Note 16G双网通版","add_time":"2015-04-19T17:19:30.000Z","zhaiyao":"小米Note此次采用的5.7英寸夏普/JDI分辨率","click":4,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/80220/12/7577/212539/5d5a6f7fEb7a5acda/da3b18358e68cfca.jpg","sell_price":2199,"market_price":2699,"stock_quantity":60},
                        {"id":90,"title":"佳能（Canon） EOS 700D 单反套机","add_time":"2015-04-19T17:54:36.000Z","zhaiyao":"◆ 佳能普及型单反新旗舰记忆的片段，偶然的相遇，铭","click":1,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/74301/39/12794/406124/5da2db13Eced04cd3/95ddf5f956458acf.png","sell_price":4799,"market_price":5099,"stock_quantity":100},
                        {"id":91,"title":"尼康(Nikon)D3300套机（18-55mm f/3.5-5.6G VRII）（黑色）","add_time":"2015-04-19T18:14:52.000Z","zhaiyao":"作为D3200的升级版，尼康D3300最大特点即是","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/51085/35/12036/603844/5d8f39b5Ee531fb22/cc680a03b4a3c5c6.png","sell_price":3180,"market_price":3150,"stock_quantity":10},
                        {"id":92,"title":"联想（Lenovo） G510AM 15.6英寸笔记本电脑","add_time":"2015-04-19T18:25:14.000Z","zhaiyao":"G系列全面支持Windows 8 简体中文版，在秉","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/70320/4/10616/704264/5d80b2ecE81c6fedf/11906f9e243be860.jpg","sell_price":2999,"market_price":4599,"stock_quantity":100},
                        {"id":93,"title":"Apple iMac MF883CH/A 21.5英寸一体机电脑","add_time":"2015-04-19T18:33:05.000Z","zhaiyao":"—— iMac —— 锋锐设计，锋芒表现。iMac","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/40586/1/11155/200870/5d49255fEa7738b29/b3e5895230af9915.jpg","sell_price":7200,"market_price":7988,"stock_quantity":10},
                        {"id":94,"title":"金士顿（Kingston） DataTraveler SE9 32GB 金属U盘","add_time":"2015-04-19T18:39:32.000Z","zhaiyao":"品名：金士顿颜色：银色容量：32GB USB2.0","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t16327/64/2674134727/179245/ec830987/5ab9e7d7N66383b39.jpg","sell_price":79,"market_price":99,"stock_quantity":100},
                        {"id":95,"title":"惠普（HP）LaserJet 2035商用黑白激光打印机（黑色）","add_time":"2015-04-19T18:43:39.000Z","zhaiyao":"全新hp laserjet p2035系列激光打印","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/31655/36/12339/90772/5cb6f941E85702320/678f74ac8a81d921.jpg","sell_price":1899,"market_price":2099,"stock_quantity":100},
                        {"id":96,"title":"惠普(HP) Officejet Pro 8610商用彩色喷墨一体机","add_time":"2015-04-19T18:53:06.000Z","zhaiyao":"专业彩色打印件的单页成本比激光打印机低 50%，从","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/42039/23/5278/206918/5ceb8e9fEf06e5800/4560af12b008ce49.jpg","sell_price":1999,"market_price":2099,"stock_quantity":100},
                       
                        {"id":97,"title":"三星（SAMSUNG）UA40HU5920JXXZ 40英寸4K超高清","add_time":"2015-04-19T19:01:38.000Z","zhaiyao":"三星（SAMSUNG）UA40HU5920JXXZ","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/65615/33/6846/81415/5d512918Ef20e577c/b00ace9d2e9ea9cd.jpg","sell_price":3299,"market_price":3599,"stock_quantity":100},
                        {"id":98,"title":"奔腾（BNTN） 380功放+纽约至尊 套装家庭影院","add_time":"2015-04-19T19:14:44.000Z","zhaiyao":"奔腾（BNTN） 380功放+纽约至尊 套装家庭影","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/5064/31/3461/142209/5b997c0eE8b26d23e/8788a4743af36f36.jpg","sell_price":4880,"market_price":5880,"stock_quantity":10},
                        {"id":99,"title":"飞利浦（PHILIPS）DVP3690 全高清DVD影碟机播放器","add_time":"2015-04-19T19:19:48.000Z","zhaiyao":"2D电影系列在家中体验3D电影带来的刺激感，采用最","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/51085/35/12036/603844/5d8f39b5Ee531fb22/cc680a03b4a3c5c6.png","sell_price":399,"market_price":499,"stock_quantity":100},
                        {"id":100,"title":"霍尼韦尔（Honeywel）HM-F1020-A-B HDMI高清数据线","add_time":"2015-04-19T19:27:39.000Z","zhaiyao":"霍尼韦尔（Honeywel）HM-F1020-A-","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/93499/17/90/221850/5da6d4ebE9747a490/8b167328e1dadff8.jpg","sell_price":49,"market_price":59,"stock_quantity":50},
                        {"id":101,"title":"Shinco/新科 S2300 无线麦克风 无线手持话筒 双手麦 KTV 舞台","add_time":"2015-04-19T19:34:55.000Z","zhaiyao":"Shinco/新科 S2300 无线麦克风 无线手","click":0,"img_url":"https://img1.360buyimg.com/n6/jfs/t1/66417/25/10739/130722/5d837ce0Ed4421c94/8aaef126ee0b5854.jpg","sell_price":199,"market_price":269,"stock_quantity":20}
         ],
                       
                flag:false,
                selectCount:'',
                img_url:'this.goodsData.img_url'
            }
        },
        created() {
          
            this.getData()
 
        },
        methods: {
            addToShopCar(){
                this.flag=!this.flag
                //{id:商品的id , count:要购买的数量 , price:商品的单价 , selected:false }
                //拼接出一个，要保存到store 中的car 数组里的商品信息对象
                this.img_url=this.goodsData.img_url
                var goodsinfo={
                    id:this.id,
                    count:this.selectCount,
                    price:this.goodsData.sell_price,
                    selected:true,
                    title:this.goodsData.title,
                    add_time:this.goodsData.add_time,
                    img_url:this.goodsData.img_url
                }
                //然后调用 store 中的mutations来将商品加入购物车（起名'addToCar',携带 此 组件的信息 存储到store）
                this.$store.commit("addToCar",goodsinfo);
            },
     
            getData(){
                this.goodsDatas.forEach(element => {
                   if(this.$route.params.id==element.id){
                       this.goodsData=element
                   }
                });
            
            
            },
            goDesc(id){
                this.$router.push({name:"gooddesc",params:{id}});
            },
            goComment(id){
                this.$router.push({name:"goodcomment",params:{id}});
            },
            beforeEnter(el){
                el.style.transform = "translate(0, 0)"
                el.style.opacity="1"
            },
            getSelectCount(count){  //count是子组件传来的 this.$refs.num.value(购买数量)
                this.selectCount=count
                console.log(count)
            },
            enter(el,done){
                el.offsetWidth;
                //获取小球在页面中的位置
                const ballPosition=this.$refs.ball.getBoundingClientRect(); //获取DOM元素的绝对位置
                const badgePostion=document.getElementById("badge").getBoundingClientRect();
                const xDist=badgePostion.left-ballPosition.left;
                const yDist=badgePostion.top-ballPosition.top;
                el.style.transform = `translate(${xDist}px, ${yDist}px)`
                el.style.transition="all 1s cubic-bezier(.44,-0.2,.98,.6)",
                done()
            },
            afterEnter(el){
                this.flag = !this.flag;
                
            },
            
        },
        components:{
            swiper,
            numbox
        }
    }
</script>
<style scoped>

    .goodsinfo-container{
        background-color: #eee;
        overflow: hidden;
    }
    .now_price{
        color:red;
        font-size: 16px;
        font-size: bold;
    }
    .mui-card-footer{
        display: block
    }
    button{
        margin:10px 0;
    }
    .ball{
        background-color:red;
        width:15px;
        height:15px;
        border-radius: 50%;
        position: absolute;
        z-index:99;
        top:385px;
        left: 150px;
    }

</style>