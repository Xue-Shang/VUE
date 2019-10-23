<template>
    <div>
            <div class="row" v-for="item in videoList" :key="item.id">
                <router-link :to="'/home/videoPlay/'+item.id">
                 
       
                    <div class="item">
                      <div class="thumbnail">
                     <div class="content">
                        <img :src="item.img" alt="...">                      
                        <span class="left">{{item.time}}</span>
                        <span class="right">{{item.long}}</span>
                     </div>
                        <div class="caption">
                          
                          <p class="title">{{item.title}}</p>
                        <p>
                            <span>{{item.type}}</span>
                            <span style="float: right;margin-right: 10px">{{item.author}}</span>
                        </p>
                        </div>
                      </div>
                    </div>
                </router-link>
                  </div>
    </div>
</template>
<style scoped>
    .left{left: 10px}
    .right{right: 10px;}
    .content{
        position: relative;
    }
    .content span{
        position:absolute;
        bottom: 5px;

        color: white;
        font-size: 12px;
    }
    .item{
        width:44%;
        float: left;
        margin:5px 10px;
        box-shadow: 1px 1px 1px#eee;
        background-color: white
    }
    .row{
        
        width: 95%;
        margin: auto;
    }
    img{
        height: 100px;
    }
    .caption{
        height: 60px
    }
    .title{color:black}
  
</style>
<script>
    export default{
        data() {
            return {
                videoList:[
                    {"id":1,"title":"[美人鱼名场面]当你参","long":"1:45","type":"搞笑","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572369077&di=67103cc9d81a621336fe3a5cd017037e&imgtype=jpg&er=1&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fb4ac77220905ca7039f2dee29c003a6b11838b9b.jpg"},
                    {"id":2,"title":"CCTV中央联播新闻","long":"0:25","type":"新闻","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571775562868&di=266a9d3d1b3df9991ccd759b33fac9e7&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F6%2F6F%2F6F0AEF260FE9B067E4BD57E1DFE46C1D.jpg"},
                    {"id":3,"title":"特朗普:没有人比我更懂","long":"5:55","type":"新闻","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571775639449&di=612fa8fcb780563f1b16f807f6ee9169&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F32%2Fw979h653%2F20191010%2Fe1ed-ifrwayx4140409.jpg"},
                    {"id":4,"title":"毛主席十个读书秘诀","long":"2:25","type":"历史","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571775732690&di=8d2b7a691c91f42de898b1cd1b2c7c60&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20171026%2Faac79e516d524c64a1413ad7804cc9df_th.jpeg"},
                    {"id":5,"title":"习近平主持召开党的会议","long":"0:25","type":"新闻","author":"CCTV","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571777620318&di=eec2d80d7e752a733716b22c3c78e1aa&imgtype=0&src=http%3A%2F%2Fp2.img.cctvpic.com%2FphotoAlbum%2Fpage%2Fperformance%2Fimg%2F2019%2F2%2F15%2F1550213216719_544.jpg"},
                    {"id":6,"title":"火影忍者十尾剪辑","long":"0:65","type":"动画","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571777711795&di=c3231e295b81c87850ceb4e935af38e7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F147d87906db56268e586e2b7f689b61c4f92d8e917109-7sPeYb_fw658"},
                    {"id":7,"title":"海贼王特燃剪辑录","long":"9:25","type":"动画","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571777753052&di=fe34ac2fb7a54b2a650703a19305c3c8&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F22%2F77%2F02%2Fpic_lib%2Fs960x639%2Fone%2520pic_212460s960x639.jpg"},
                    {"id":8,"title":"美国电影最受欢迎TOP10","long":"12:25","type":"电影","author":"用户B","time":"2018-9-1","num":18,"img":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=173694604,2807409640&fm=26&gp=0.jpg"},
                    {"id":9,"title":"电影改编新作《僵尸世界》","long":"1:25","type":"电影","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572372592&di=64339291f5394753d833843589b5e875&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4.dwstatic.com%2Fpc%2F1712%2F376760026781%2F1512804873027.jpg"},
                    {"id":10,"title":"青春活力，激情澎湃的舞蹈","long":"0:25","type":"舞蹈","author":"用户B","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572372644&di=c0f2bae29b4bda1930d10218afc90dd6&imgtype=jpg&er=1&src=http%3A%2F%2Fepaper.wendu.cn%2FSourcePaper%2F2015-03-23%2F17%2F520315_wanghua_1426850809236_b.jpg"}

                ]
            }
        },
    }
</script>