<template>
<div>
        <div id="slider" class="mui-slider">
                <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                    <div class="mui-scroll">
                        <a :class="['mui-control-item',item.id == 0 ? 'mui-active':'']"  v-for="item in cates" @click="getPhotoListByCateId(item.id)">
                            {{item.type}}
                        </a>
                       
                    </div>
                </div>
        </div>
        <el-row>
                <el-col :span="24" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                        <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                  <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.img_url" class="image">
                    <div style="padding: 14px;">
                      <span>{{item.title}}</span>
                      <div class="bottom clearfix">
                        <time class="time">{{item.zhaiyao}}</time>
                    
                      </div>
                    </div>
                  </el-card>
                        </router-link>
                </el-col>
              </el-row>
              

</div>
</template>
<script>
    /**
     *制作顶部滑动条的坑们
     1.需要借助MUI中的 tab-top-webview-main.html
     2.需要把slider区域的 mui-fullscreen类去掉
     3.滑动条无法正常触发滑动，通过检查官方文档，发现这是JS组件，需要被初始化一下
        导入mui.js
        调用官方提供的方式去初始化
    4.我们初始化滑动条的时候，导入的mui.js，但是，控制台报错：‘Uncaught TypeError:'caller','callee',and'argument' properties may not be accessd on strict mode'’
        经过合理推测，可能是mui.js中用到了'caller','callee',and 'arguments'东西，但是，webpack打包好的
        bundle.js中，默认是启用严格模式的，所有，这两者冲突了
            解决方案：1.把mui.js中的严格模式的代码改掉，但是不现实
                     2.把webpack打包时用的严格模式禁用掉
     */
    import mui from '../../lib/mui/js/mui.js'
   //当组件中的DOM结构被渲染好并放到页面中后，会执行这个钩子函数
            //初始化滑动
    
    export default{
        data() {
            return {
                cates:[{"type":"全部","id":"1"},
                {"type":"智能手机","id":"2"},
                {"type":"摄像媒体","id":"3"},
                {"type":"空间设计","id":"4"},
                {"type":"家具生活","id":"5"},
                {"type":"电视媒体","id":"6"},
                {"type":"数码电器","id":"7"},
                {"type":"洗护套装","id":"8"},
                {"type":"美妆护肤","id":"9"},
             ],
             list:[],
             lists:[
                    
                [
                    {"id":37,"channel_id":9,"category_id":17,"call_index":"","title":"现代简约 明亮的外表卧室卧室背景墙、吊顶黄色","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571758243976&di=aef133267295f6f109292ca611ad6840&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171013%2F17b57df71e714789afc92fd51cd63392.jpeg","seo_title":"现代简约 明亮的外表卧室卧室背景墙、吊顶黄色","seo_keywords":"现代简约,卧室卧室背景墙,吊顶黄色","seo_description":"不要简朴不要素雅洋气卧室我做主，高低床榻榻米式靓丽卧室装扮，现代油画壁画帆布画卧室餐厅仟象映画。","tags":"卧室","zhaiyao":"不要简朴不要素雅洋气卧室我做主，高低床榻榻米式靓丽卧室装扮，现代油画壁画帆布画卧室餐厅仟象映画，现代中式卧室装修图欣赏，温馨浪漫，而且很时尚的卧室设计，欧式卧室飘窗装修效果图。","content":"不要简朴。</span>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:30:50.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":38,"channel_id":9,"category_id":17,"call_index":"","title":"很美的落地大书柜 可以放超多的图书的吧","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572353499&di=6b15513c1c3cf8547f59703afc04a64d&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F8ac19c82d84b5ecc3cee91077adac18d.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BaAu%2Be7n%2BWutg%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_27%2Cx_17%2Cy_17","seo_title":"很美的落地大书柜 可以放超多的图书的吧","seo_keywords":"书柜,图书的吧,转角书柜,书桌，双层书柜,组合书柜,儿童书柜。","seo_description":"很美的落地大书柜 可以放超多的图书的吧。","tags":"书柜","zhaiyao":"很美的落地大书柜 可以放超多的图书的吧，转角的书柜以及书桌，这里可以收纳超多的东西，书柜,书桌这些是&quot;七彩人生&quot;品，双层书柜组合书柜儿童书柜。","content":"很美的落地大书柜 可以放超多的图书的吧。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:37:19.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":39,"channel_id":9,"category_id":17,"call_index":"","title":"西班牙阿拉尔孔郊区的80平米一室一厅的公寓","link_url":"","img_url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3253755321,450602597&fm=15&gp=0.jpg","seo_title":"西班牙阿拉尔孔郊区的80平米一室一厅的公寓","seo_keywords":"西班牙阿拉尔孔郊区的80平米一室一厅的公寓","seo_description":"这是一套在西班牙阿拉尔孔郊区的80平米一室一厅的公寓，用一道墙分隔出了客厅与厨房，虽然整体来看室内设计有些混搭风，但似乎某些空间和角度去看又会有着自己的主题。","tags":"","zhaiyao":"这是一套在西班牙阿拉尔孔郊区的80平米一室一厅的公寓。","content":"这是一套在西班牙阿拉尔孔郊区的80平米一室一厅的公寓，用一道墙分隔出了客厅与厨房，虽然整体来看室内设计有些混搭风。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:41:37.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":40,"channel_id":9,"category_id":18,"call_index":"","title":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571758243975&di=bc35cb89b011ac2b5fb26797abd9b451&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b4565b3c9e1da80121b99478fe3e.jpg%401280w_1l_2o_100sh.jpg","seo_title":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果","seo_keywords":"欧式风格,豪华,动感,多变,视觉效果","seo_description":"继上编欧式客厅装修效果图之后，今天，小编为大家带来的是一组不同类型的欧式卧室装修效果图。欧式卧室的设计风格按不同的地域文化可分为北欧卧室、简欧卧室和传统欧式卧室。在中国，因为欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果，也吸取了洛可可风格中唯美、律动的细节处理元素，所以很受上层人士的青睐。","tags":"","zhaiyao":"继上编欧式客厅装修效果图之后，今天，小编为大家带来的是一组不同类型的欧式卧室装修效果图。欧式卧室的设计风格按不同的地域文化可分为北欧卧室、简欧卧室和传统欧式卧室","content":"继上编欧式客厅装修效果图之后，今天，小编为大家带来的是一组不同类型的欧式卧室装修效果图。欧式卧室的设计风格按不同的地域文化可分为北欧卧室、简欧卧室和传统欧式卧室。在中国，。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:46:50.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":41,"channel_id":9,"category_id":18,"call_index":"","title":"居住在这样的房子容易出现自杀或血光之灾的现象","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572353530&di=dc3971c6bf182f0867aa49fc24ce47ff&imgtype=jpg&er=1&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn13%2F275%2Fw1200h675%2F20180614%2Fe154-hcwpcmq8879354.jpg","seo_title":"居住在这样的房子容易出现自杀或血光之灾的现象","seo_keywords":"居住,房子,自杀,血光之灾,现象","seo_description":"如果选择在三角形的地方上盖房，此类地方出现自杀现象的机率比较高。如果所住的大楼是呈现三角形的状态，那居住在这样的房子，也是容易出现自杀或血光之灾的现象","tags":"","zhaiyao":"1、房屋风水学之地形如果选择在三角形的地方上盖房，此类地方出现自杀现象的机率比较高。如果所住的大楼是呈现三角形的状态，那居住在这样的房子，也是容易出现自杀或血光之灾的现象。","content":"<strong>1、房屋风水学之地形</strong><br />\r\n如果选择在三角形的地方上盖房，此类地方出现自杀现象的机率比较高。。<br />\r\n<strong>2、房屋风水学之电线杆对大门</strong><br />\r\n在房屋风水学中，电线杆直对房屋的大门正中或者窗户正中(仅限于比较大的窗户)这样的情况，是容易损害一个家的运气，另外电线杆的电流也是会影响一个人的思维，常年积累容易损伤精神，从而出现想不开或者精神出现问题的现象。<br />\r\n<strong>3、房屋风水学之采光过差</strong><br />\r\n正常的房子白天都有适合的光线，但有些房子的亮度不行，特别是有些房子白天也必须开灯，否则就看不见，滴天居士提醒这类的房子必须要加上常明灯才可以，否则此类房子会泄主人的阳气，多为不利，对体质或元气弱的人多有危险。<br />\r\n这类的风水中也常见有自杀的现象，特别是在一些大厦里，采光不畅或阴气过旺，常见若干自杀案例。正常情况下，一个人走出家门或走入家门时的走廊需要多加强光亮度，因为建筑结构因素，如果不能采光的话也要安装一盏亮度略高的灯为好。<br />\r\n<strong>4、房屋风水学之进门</strong><br />\r\n如果居住在进口狭窄的地方，主风水不利，特别大门直对着电梯的主风水不吉，滴天居士建议此类房子可以用一对镇宅风水物直对着电梯为好，<br />\r\n<strong>5、房屋风水学之房子空间比例</strong><br />\r\n正常的房子都是底层或一层比较高，但如果是因为种种原因，出现了一层不高，但二层或三层比较高，那这样的房子主风水不利，易出现血光之灾或自杀倾向的事件。<br />","sort_id":99,"click":1,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:52:25.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":42,"channel_id":9,"category_id":18,"call_index":"","title":"100平米田园雅居三口之家 自然舒适空间","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571758243975&di=17e323c8b733b98f63cb336123df5305&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa418b460e43215d474f74cc226e6d66e0b204f221cae1-x24FQh_fw658","seo_title":"100平米田园雅居三口之家 自然舒适空间","seo_keywords":"100平米,田园雅居,三口之家,自然舒适,空间","seo_description":"设计师认为田园风格几乎可以等同于乡村风格。所以作为田园风格的载体——乡村。由于比城市更贴近原始自然环境，而居住在乡村里的人们的生活方式淳朴，生性豁达率性，心理压力小。","tags":"","zhaiyao":"设计师认为田园风格几乎可以等同于乡村风格。所以作为田园风格的载体——乡村。由于比城市更贴近原始自然环境，而居住在乡村里的人们的生活方式淳朴，生性豁达率性，心理压力小。所以在现今日益发达的城市中，因为繁杂喧闹并且污染越来越严重的城市环境和快速的生活节奏，繁忙…","content":"设计师认为田园风格几乎可以等同于乡村风格。所以作为田园风格的载体——乡村。由于比城市更贴近原始自然环境，而居住在乡村里的人们的生活方式淳朴，生性豁达率性，心理压力小。所以在现今日益发达的城市中，因为繁杂喧闹并且污染越来越严重的城市环境和快速的生活节奏，繁忙的工作压力。使得现代的城市人将羡慕的眼光投向了曾经不屑的乡村。他们重新开始对乡村生活方式感到好奇或向往。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:55:58.000Z","update_time":"2015-04-18T04:56:29.000Z"},{"id":43,"channel_id":9,"category_id":18,"call_index":"","title":"清新有活力的公寓设计 用色彩焕然一新","link_url":"","img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=246667749,294296194&fm=15&gp=0.jpg","seo_title":"清新有活力的公寓设计 用色彩焕然一新","seo_keywords":"清新,活力,公寓设计,色彩,焕然一新","seo_description":"Widawscy Studio为华沙的一处公寓做了设计，初看是最为保守的白底搭配木质元素，细看发现每个空间都被赋予了不同的色彩。","tags":"","zhaiyao":"Widawscy Studio为华沙的一处公寓做了设计，初看是最为保守的白底搭配木质元素，细看发现每个空间都被赋予了不同的色彩。面积最大的公共空间，包括客厅，餐厅和厨房采用了黄色的，让家人相聚时始终保持一颗愉快的心情，沉稳的灰色的主卧，轻快的蓝色调卧室，被芥末绿铺满的卫生…","content":"Widawscy Studio为华沙的一处公寓做了设计，初看是最为保守的白底搭配木质元素，细看发现每个空间都被赋予了不同的色彩。面积最大的公共空间，包括客厅，餐厅和厨房采用了黄色的，让家人相聚时始终保持一颗愉快的心情，沉稳的灰色的主卧，轻快的蓝色调卧室，被芥末绿铺满的卫生间，减少配饰的使用 ，用色彩焕然一新。","sort_id":99,"click":3,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:59:13.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":44,"channel_id":9,"category_id":19,"call_index":"","title":"Hossein Zare 的超现实摄影作品","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571758243970&di=993edae5143890467b617e867edf20d3&imgtype=0&src=http%3A%2F%2Fimg.cndesign.com%2FWorks%2F20180515%2Fef90264e50a34b4cbdaa8640d0635305.jpeg","seo_title":"Hossein Zare 的超现实摄影作品","seo_keywords":"Hossein Zare,摄影作品","seo_description":"Zare创作了这组近似于彩色插画般的照片。注意他是如何将现实中的自然与城市风光融入到自己想象中的空间里去的。","tags":"","zhaiyao":"我们曾介绍过Hossein Zare的极简黑白摄影作品。这一次，摄影师将带领我们进入一个在现实中并不存在的梦想世界。Zare创作了这组近似于彩色插画般的照片。注意他是如何将现实中的自然与城市风光融入到自己想象中的空间里去的。","content":"<p>\r\n\t我们曾介绍过Hossein Zare的极简黑白摄影作品。这一次，摄影师将带领我们进入一个在现实中并不存在的梦想世界。\r\n</p>\r\n<p>\r\n\tZare创作了这组近似于彩色插画般的照片。注意他是如何将现实中的自然与城市风光融入到自己想象中的空间里去的。\r\n</p>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T05:43:21.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":45,"channel_id":9,"category_id":20,"call_index":"","title":"Vassilis Tangoulis意境风光摄影作品","link_url":"","img_url":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2690750288,4017564052&fm=11&gp=0.jpg","seo_title":"Vassilis Tangoulis意境风光摄影作品","seo_keywords":"Vassilis Tangoulis,意境风光,摄影作品","seo_description":"Vassilis Tangoulis 白色的沉默摄影作品集，Vassilis Tangoulis 是一位屡获殊荣的艺术摄影师，他创作了一组迷人的黑白意境摄影作品，每一张图片都传达了沉默中的宁静时光，给人以宁静致远的深思。","tags":"","zhaiyao":"Vassilis Tangoulis 白色的沉默摄影作品集，Vassilis Tangoulis 是一位屡获殊荣的艺术摄影师，他创作了一组迷人的黑白意境摄影作品，每一张图片都传达了沉默中的宁静时光，给人以宁静致远的深思。","content":"Vassilis Tangoulis 白色的沉默摄影作品集，Vassilis Tangoulis 是一位屡获殊荣的艺术摄影师，他创作了一组迷人的黑白意境摄影作品，每一张图片都传达了沉默中的宁静时光，给人以宁静致远的深思。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T05:47:36.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":46,"channel_id":9,"category_id":21,"call_index":"","title":"Takashi Kitajima梦幻迷离的城市夜景摄影作品","link_url":"","img_url":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2905089172,894111480&fm=15&gp=0.jpg","seo_title":"Takashi Kitajima梦幻迷离的城市夜景摄影作品","seo_keywords":"Takashi Kitajima,梦幻迷离,城市,夜景,摄影作品","seo_description":"这组梦幻夜景来自日本摄影师Takashi Kitajima，拍摄的都是东京的夜景。摄影师将模糊的光斑与现实中的全景城市相结合，抽象了建筑物原本轮廓分明的线条，创作出了这个光怪陆离的奇幻世界。","tags":"","zhaiyao":"这组梦幻夜景来自日本摄影师Takashi Kitajima，拍摄的都是东京的夜景。摄影师将模糊的光斑与现实中的全景城市相结合，抽象了建筑物原本轮廓分明的线条，创作出了这个光怪陆离的奇幻世界。","content":"这组梦幻夜景来自日本摄影师Takashi Kitajima，拍摄的都是东京的夜景。摄影师将模糊的光斑与现实中的全景城市相结合，抽象了建筑物原本轮廓分明的线条，创作出了这个光怪陆离的奇幻世界。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T05:50:11.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":47,"channel_id":9,"category_id":20,"call_index":"","title":"宁静唯美的黑白风光摄影欣赏","link_url":"","img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2755204026,1705264031&fm=15&gp=0.jpg","seo_title":"宁静唯美的黑白风光摄影欣赏","seo_keywords":"宁静唯美,黑白风光,摄影欣赏","seo_description":"摄影绝不仅仅只是按动快门那么简单，色彩上微妙的变化，拍摄的时候尝试调节不同的曝光补偿，一张好的黑白摄影布光发挥了至关重要的作用，同时对于我来说是不同寻常的","tags":"","zhaiyao":"摄影绝不仅仅只是按动快门那么简单，色彩上微妙的变化，拍摄的时候尝试调节不同的曝光补偿，一张好的黑白摄影布光发挥了至关重要的作用，同时对于我来说是不同寻常的。肉丁为你分享不一样的黑白摄影，下面给大家分享一篇像油画一样迷人的黑白色的风景摄影作品欣赏，看摄影师的…","content":"摄影绝不仅仅只是按动快门那么简单，色彩上微妙的变化，拍摄的时候尝试调节不同的曝光补偿，一张好的黑白摄影布光发挥了至关重要的作用，同时对于我来说是不同寻常的。肉丁为你分享不一样的黑白摄影，下面给大家分享一篇像油画一样迷人的黑白色的风景摄影作品欣赏，看摄影师的精彩作品、试着享受孤独的宁静.享受拍摄的乐趣，希望你能够喜欢这些情趣盎然的作品，一起欣赏吧。每个人对照片都有自己不同的品味和选择，色彩上微妙的变化，自然光能够做主光、侧光、背光和轮廓光，却能吸引旁人的眼球，可以透过相机的眼睛，发现生活的美丽，而且对于我来说是不同寻常的。肉丁带你领略不同的黑白摄影，这里有一篇像油画一样迷人的黑白色的风景摄影作品欣赏，结合这些照片的拍摄技巧、一睹大师的风采，希望能带给你快乐，这里你可以看到一些美丽的照片。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T05:53:13.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":48,"channel_id":9,"category_id":20,"call_index":"","title":"西班牙摄影师的人像创意摄影作品：血秀","link_url":"","img_url":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2983092745,1317069554&fm=15&gp=0.jpg","seo_title":"西班牙摄影师的人像创意摄影作品：血秀","seo_keywords":"西班牙,摄影师,血秀","seo_description":"这组名为“血秀（The Blood Show）”的作品是为《Ae》杂志拍摄，艺术指导/造型师：Kattaca，化妆师/发型师：Yurema Villa。","tags":"","zhaiyao":"现居马德里的西班牙摄影师Paco Peregrn的西班牙摄影师的人像创意摄影作品。这组名为“血秀（The Blood Show）”的作品是为《Ae》杂志拍摄，艺术指导/造型师：Kattaca，化妆师/发型师：Yurema Villa。PacoPeregrn生于西班牙阿尔梅利亚，毕业于塞尔维亚艺术学院，后又到圣马丁艺…","content":"<p>\r\n\t现居马德里的西班牙摄影师Paco Peregrín的西班牙摄影师的人像创意摄影作品。\r\n</p>\r\n<p>\r\n\t这组名为“血秀（The Blood Show）”的作品是为《Ae》杂志拍摄，艺术指导/造型师：Kattaca，化妆师/发型师：Yurema Villa。\r\n</p>\r\n<p>\r\n\tPacoPeregrín生于西班牙阿尔梅利亚，毕业于塞尔维亚艺术学院，后又到圣马丁艺术设计学院国际摄影中心、安达卢西亚当代艺术中心、安达卢西亚摄影中心、马德里康普顿斯大学、圣地亚哥德孔波斯特拉大学等处学习摄影和艺术。他继承了西班牙人热情奔放的性格，也浸染了滋养过达利、高迪等大批天才艺术家的五彩斑斓的西班牙文化。他的作品用色大胆、构图多样，充满想象力。他混合了感官刺激和前卫艺术的元素，创作出兼具情色、高雅和神秘风情的作品，在摄影领域独树一帜。<br />\r\n&nbsp;多年来，他不仅在艺术摄影领域取得了巨大的成功，具有世界范围的影响力，还在时尚和商业摄影领域获得了成功，作品被众多世界顶级的时尚杂志追捧。耐克、阿迪达斯、马自达、丰田等世界著名品牌都成为他的客户。PacoPeregrín：我在塞维利亚长大，那是一座充满巴洛克风格的城市。这种环境对我的审美和艺术感受力影响深远，我非常喜欢这种风格。在我的作品中，这种风格非常明显，比如光线的运用、戏剧化的效果等。不过我也喜欢一些与之截然相反的艺术形式，比如极简派艺术。我的作品常常有多种艺术风格糅合其中，比如弗兰德斯画派的风格和超现实主义艺术等。在工作中，我既像演员，又像舞台设计师，还是造型师、服装设计师和导演。\r\n</p>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T05:57:04.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":49,"channel_id":9,"category_id":24,"call_index":"","title":"国产嫩模许喵喵Mickey大尺度写真最新曝光 胸大不忍直视","link_url":"","img_url":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2165900163,3084161323&fm=15&gp=0.jpg","seo_title":"国产嫩模许喵喵Mickey大尺度写真最新曝光 胸大不忍直视","seo_keywords":"许喵喵Mickey,写真","seo_description":"近日，国产嫩模许喵喵Mickey在微博上晒出一组大尺度写真引发热议。＠许喵喵Mickey 自己描述：“等了你一千年，来为我画眉，前世埋我的人，我来报你的恩，人间冰冷，别怪我是妖，有时妖心慈过世人心。（感谢《妖蛇》摄制组全体工作人员，大家辛苦了）”","tags":"","zhaiyao":"近日，国产嫩模许喵喵Mickey在微博上晒出一组大尺度写真引发热议。＠许喵喵Mickey 自己描述：“等了你一千年，来为我画眉，前世埋我的人，我来报你的恩，人间冰冷，别怪我是妖，有时妖心慈过世人心。（感谢《妖蛇》摄制组全体工作人员，大家辛苦了）”","content":"近日，国产嫩模许喵喵Mickey在微博上晒出一组大尺度写真引发热议。＠许喵喵Mickey 自己描述：“等了你一千年，来为我画眉，前世埋我的人，我来报你的恩，人间冰冷，别怪我是妖，有时妖心慈过世人心。（感谢《妖蛇》摄制组全体工作人员，大家辛苦了）”","sort_id":99,"click":2,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T06:04:17.000Z","update_time":"2015-04-18T06:15:38.000Z"},{"id":50,"channel_id":9,"category_id":23,"call_index":"","title":"有气质且带可爱的美女组图","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571758243973&di=59d59b04f949250d2a27c55e62ceeb80&imgtype=0&src=http%3A%2F%2Fpic.rmb.bdstatic.com%2F8ac19c82d84b5ecc3cee91077adac18d.jpeg%40wm_2%2Ct_55m%2B5a625Y%2B3L%2BaAu%2Be7n%2BWutg%3D%3D%2Cfc_ffffff%2Cff_U2ltSGVp%2Csz_27%2Cx_17%2Cy_17","seo_title":"有气质且带可爱的美女组图","seo_keywords":"有气质且带可爱的美女组图","seo_description":"有气质且带可爱的美女组图","tags":"","zhaiyao":"有气质且带可爱的美女组图有气质且带可爱的美女组图有气质且带可爱的美女组图","content":"有气质且带可爱的美女组图有气质且带可爱的美女组图有气质且带可爱的美女组图","sort_id":99,"click":2,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T06:17:40.000Z","update_time":"2015-04-18T06:21:36.000Z"},{"id":51,"channel_id":9,"category_id":23,"call_index":"","title":"超甜美的韩国美女美图欣赏","link_url":"","img_url":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1554098118,3605979197&fm=15&gp=0.jpg","seo_title":"超甜美的韩国美女美图","seo_keywords":"超甜美的韩国美女美图","seo_description":"收集了甜素纯美女写真图1等精彩图片,同时汇集美女图片,搞笑图片,奇闻趣事,风景图片,明星写真,娱乐八卦,气质,清纯,非主流,美女,高清图片","tags":"","zhaiyao":"收集了甜素纯美女写真图1等精彩图片,同时汇集美女图片,搞笑图片,奇闻趣事,风景图片,明星写真,娱乐八卦,气质,清纯,非主流,美女,高清图片","content":"收集了甜素纯美女写真图1等精彩图片,同时汇集美女图片,搞笑图片,奇闻趣事,风景图片,明星写真,娱乐八卦,气质,清纯,非主流,美女,高清图片","sort_id":99,"click":2,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T06:21:01.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":52,"channel_id":9,"category_id":22,"call_index":"","title":"柳岩出席设计师好友兰玉的高级成衣发布Show","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571758243974&di=55d7e70465d6a83bd17978a3188d1b39&imgtype=0&src=http%3A%2F%2Fwww.hanyigroup.com%2Fres%2Fhanyidesign%2Fteres%2F201801%2F20180104103614217.jpg","seo_title":"柳岩出席设计师好友兰玉的高级成衣发布Show","seo_keywords":"柳岩出席设计师好友兰玉的高级成衣发布Show","seo_description":"北京四季酒店,柳岩出席设计师好友兰玉的高级成衣发布Show,她身穿兰玉设计的纯白卡肩礼服惊艳登场,优雅晚装发髻搭配翡翠镶钻珠宝,举手投足尽显大气温婉,而卡肩低胸的礼服设计更是衬托出柳岩傲人的事业线资本","tags":"","zhaiyao":"北京四季酒店,柳岩出席设计师好友兰玉的高级成衣发布Show,她身穿兰玉设计的纯白卡肩礼服惊艳登场,优雅晚装发髻搭配翡翠镶钻珠宝,举手投足尽显大气温婉,而卡肩低胸的礼服设计更是衬托出柳岩傲人的事业线资本,性感指数爆灯,入场即引来现场阵阵骚动,柳岩轻松看秀全程甜笑连连,心情…","content":"北京四季酒店,柳岩出席设计师好友兰玉的高级成衣发布Show,她身穿兰玉设计的纯白卡肩礼服惊艳登场,优雅晚装发髻搭配翡翠镶钻珠宝,举手投足尽显大气温婉,而卡肩低胸的礼服设计更是衬托出柳岩傲人的事业线资本,性感指数爆灯,入场即引来现场阵阵骚动,柳岩轻松看秀全程甜笑连连,心情靓绝。","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":0,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T06:27:06.000Z","update_time":"2016-12-06T09:04:16.000Z"},{"id":53,"channel_id":9,"category_id":22,"call_index":"","title":"昆凌最新大片","link_url":"","img_url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571758243975&di=17e323c8b733b98f63cb336123df5305&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa418b460e43215d474f74cc226e6d66e0b204f221cae1-x24FQh_fw658","seo_title":"昆凌最新大片","seo_keywords":"昆凌,写真","seo_description":"昆凌与周杰伦新婚后就马上投入了工作中，近日一组时尚大片她穿上最新一季春装，脸颊红扑扑对镜头甜笑，展露青春气息。","tags":"","zhaiyao":"昆凌与周杰伦新婚后就马上投入了工作中，近日一组时尚大片她穿上最新一季春装，脸颊红扑扑对镜头甜笑，展露青春气息。","content":"昆凌与周杰伦新婚后就马上投入了工作中，近日一组时尚大片她穿上最新一季春装，脸颊红扑扑对镜头甜笑，展露青春气息。","sort_id":99,"click":4,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T06:31:44.000Z","update_time":"2016-12-06T09:04:16.000Z"}]
                ,
                [
                    {"id":1001,"channel_id":9,"category_id":17,"call_index":"","title":"Apple 苹果 iPhone 11Pro Max","link_url":"","img_url":"https://img11.360buyimg.com/n1/s450x450_jfs/t1/53412/32/10406/525538/5d77fa0eE20ee31de/5de03f034691881a.png","seo_title":"Apple 苹果 iPhone 11Pro Max","seo_keywords":"Apple 苹果 iPhone 11Pro Max","seo_description":"北京时间今天凌晨，iPhone11系列三款新机尘埃落定，苹果（中国）官网也已亮出最终的国行版售价，其中iPhone11较去年iPhoneXR降了1000元，iPhone11 Pro系列则与iPhoneXS系列的定价持平。","tags":"智能手机","zhaiyao":"还有苹果发布会上重点宣传的“Pro级别的拍照”。拜托咱们看看9102年发布的手机里，随便哪款旗舰不都是三四个摄像头起，五倍十倍变焦使劲上着。现在用一个后置三摄模组出来吹专业性也实在是有点不够“Pro”。","content":"不要简朴。</span>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:30:50.000Z","update_time":"2016-12-06T09:04:16.000Z"},
                {"id":1002,"channel_id":9,"category_id":17,"call_index":"","title":" 华为手机 mate30pro【华为直供当天发/全新原封/碎屏无忧/大礼包】","link_url":"","img_url":"https://img11.360buyimg.com/n1/s450x450_jfs/t1/78814/34/10896/998936/5d8393e3E8662d786/519bab95a4332883.png","seo_title":"Apple 苹果 iPhone 11Pro Max","seo_keywords":"Apple 苹果 iPhone 11Pro Max","seo_description":"其中做得最好的应该就数华为了!从p20pro开始,华为手机就开启了专业的摄影时代!现在到了Mate30pro,超高像素加上多功能角度摄像头,它将给我们带来什么...","tags":"智能手机","zhaiyao":"其中做得最好的应该就数华为了!从p20pro开始,华为手机就开启了专业的摄影时代!现在到了Mate30pro,超高像素加上多功能角度摄像头,它将给我们带来什么..","content":"不要简朴。</span>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:30:50.000Z","update_time":"2016-12-06T09:04:16.000Z"},
                {"id":1003,"channel_id":9,"category_id":17,"call_index":"","title":" 【新品首销】OPPO K5 6400万超清四摄30W VOOC闪充 骁龙730G全面屏拍照游戏手机 极地阳光 6GB+128GB 官方标配","link_url":"","img_url":"https://img12.360buyimg.com/n1/s450x450_jfs/t1/73843/38/11445/89537/5d8e37d0Ec9544b10/3ad665b055ce28de.jpg","seo_title":"Apple 苹果 iPhone 11Pro Max","seo_keywords":"Apple 苹果 iPhone 11Pro Max","seo_description":"OPPO在10月10日同时发布两款新机——全新高性能手机OPPO Reno Ace以及新一代“中端机王者”OPPO K5。自发布以来，两款手机口碑呈现爆棚之势，真是“翻了好久都看不到差评”。OPPO Reno Ace仅用3分钟销量破万台，5分钟全网销售额破亿。今日凌晨开售的OPPO K5在京东、天猫、苏宁三大电商平台，斩获1000—2000元价位段销量冠军。","tags":"智能手机","zhaiyao":"OPPO在10月10日同时发布两款新机——全新高性能手机OPPO Reno Ace以及新一代“中端机王者”OPPO K5。自发布以来，两款手机口碑呈现爆棚之势，真是“翻了好久都看不到差评”。OPPO Reno Ace仅用3分钟销量破万台，5分钟全网销售额破亿。今日凌晨开售的OPPO K5在京东、天猫、苏宁三大电商平台，斩获1000—2000元价位段销量冠军。","content":"不要简朴。</span>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:30:50.000Z","update_time":"2016-12-06T09:04:16.000Z"}
            ],
            [
                    {"id":1200,"channel_id":9,"category_id":17,"call_index":"","title":"杰伟世JVC GZ-RX675 家用高清便携DV录像数码摄影户外运动防水会议教学自媒体摄像机 官方标配","link_url":"","img_url":"https://img12.360buyimg.com/n1/jfs/t1/54383/25/6312/100981/5d3e6b9dEb614bada/de6144c9ca632e08.jpg","seo_title":"Apple 苹果 iPhone 11Pro Max","seo_keywords":"Apple 苹果 iPhone 11Pro Max","seo_description":"北京时间今天凌晨，iPhone11系列三款新机尘埃落定，苹果（中国）官网也已亮出最终的国行版售价，其中iPhone11较去年iPhoneXR降了1000元，iPhone11 Pro系列则与iPhoneXS系列的定价持平。","tags":"智能手机","zhaiyao":"还有苹果发布会上重点宣传的“Pro级别的拍照”。拜托咱们看看9102年发布的手机里，随便哪款旗舰不都是三四个摄像头起，五倍十倍变焦使劲上着。现在用一个后置三摄模组出来吹专业性也实在是有点不够“Pro”。","content":"不要简朴。</span>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:30:50.000Z","update_time":"2016-12-06T09:04:16.000Z"},
                {"id":1202,"channel_id":9,"category_id":17,"call_index":"","title":" 佳能（Canon）EOS C300 MARK II专业数码摄像机4K超高清微电影机婚庆自媒体视频2代","link_url":"","img_url":"https://img10.360buyimg.com/n1/jfs/t1/35318/23/6007/92688/5cc1626eE170e48e7/37f569c36f4ffa86.jpg","seo_title":"Apple 苹果 iPhone 11Pro Max","seo_keywords":"Apple 苹果 iPhone 11Pro Max","seo_description":"其中做得最好的应该就数华为了!从p20pro开始,华为手机就开启了专业的摄影时代!现在到了Mate30pro,超高像素加上多功能角度摄像头,它将给我们带来什么...","tags":"智能手机","zhaiyao":"其中做得最好的应该就数华为了!从p20pro开始,华为手机就开启了专业的摄影时代!现在到了Mate30pro,超高像素加上多功能角度摄像头,它将给我们带来什么..","content":"不要简朴。</span>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:30:50.000Z","update_time":"2016-12-06T09:04:16.000Z"},
                {"id":1203,"channel_id":9,"category_id":17,"call_index":"","title":" 小米 米家智能摄像机云台版白色1080P家用监控高清360度红外夜视增强移动监测小米米家摄像头","link_url":"","img_url":"https://img10.360buyimg.com/n1/s450x450_jfs/t1/49862/33/9683/132514/5d6e7827E2c046832/de91851ca2efbe5b.jpg","seo_title":"Apple 苹果 iPhone 11Pro Max","seo_keywords":"Apple 苹果 iPhone 11Pro Max","seo_description":"OPPO在10月10日同时发布两款新机——全新高性能手机OPPO Reno Ace以及新一代“中端机王者”OPPO K5。自发布以来，两款手机口碑呈现爆棚之势，真是“翻了好久都看不到差评”。OPPO Reno Ace仅用3分钟销量破万台，5分钟全网销售额破亿。今日凌晨开售的OPPO K5在京东、天猫、苏宁三大电商平台，斩获1000—2000元价位段销量冠军。","tags":"智能手机","zhaiyao":"OPPO在10月10日同时发布两款新机——全新高性能手机OPPO Reno Ace以及新一代“中端机王者”OPPO K5。自发布以来，两款手机口碑呈现爆棚之势，真是“翻了好久都看不到差评”。OPPO Reno Ace仅用3分钟销量破万台，5分钟全网销售额破亿。今日凌晨开售的OPPO K5在京东、天猫、苏宁三大电商平台，斩获1000—2000元价位段销量冠军。","content":"不要简朴。</span>","sort_id":99,"click":0,"status":0,"is_msg":1,"is_top":0,"is_red":1,"is_hot":0,"is_slide":0,"is_sys":1,"user_name":"admin","add_time":"2015-04-18T04:30:50.000Z","update_time":"2016-12-06T09:04:16.000Z"}
            ]
            ]
            }
        },
        mounted() {
            mui('.mui-scroll').scroll({
	        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },

        created() {
          this.getList();
        },
        methods: {
  
            getPhotoListByCateId(cateId){
              if(cateId==1){
                this.list=this.lists[0]
              }else if(cateId==2){
                this.list=''
                this.list=this.lists[1]
              }else if(cateId==3){
                this.list=''
                this.list=this.lists[2]
              }else if(cateId==4){
                this.list=''
                this.list=this.lists[0]
              }
            },
            getList(){
               this.lists.forEach(element => {
                 element.forEach(item=>{
                     console.log(item)
                     this.list.push(item)
                 })
               });
            }
        },
    }
</script>
<style scoped>
* { touch-action: pan-y; } 
.time {
    font-size: 13px;
    color: #999;
  }
  li{list-style: none}
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
.bottom{line-height: 25px;}
.time{font-size: 14px}
  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>