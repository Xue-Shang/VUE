<template>
    <div>
            <div class="mui-card">
                    <div class="mui-card-header mui-card-media">
                     <span class="glyphicon glyphicon-star"></span>
                        <div class="mui-media-body">
                            {{videoList.title}}
                            <p>发表于：{{videoList.time}}</p>
                        </div>
                        <!--<img class="mui-pull-left" src="../images/logo.png" width="34px" height="34px" />
                        <h2>小M</h2>
                        <p>发表于 2016-06-30 15:30</p>-->
                    </div>
                    <div class="mui-card-content" >
                            <video controls>
                                    <!--视频源，可以有多个源-->
                                    
                                        <source src="./预告片.mp4" type="video/mp4">
                                    </video>
                    </div>
                    <div class="mui-card-footer">
                        <a class="mui-card-link">Like</a>
                        <a class="mui-card-link">Comment</a>
                        <a class="mui-card-link">Read more</a>
                    </div>
                </div>
                <div class="intr">
                <div>影视简介</div>
                <br>
                <p>{{videoList.content}}</p>
            </div>

    </div>
</template>
<style scoped>
    .intr{
        width:95%;
        margin: auto
    }
    video{
        width: 100%;
    }
    .mui-card-header.mui-card-media .mui-media-body{
        margin-left:0px;
    }
</style>
<script>
    export default{
        data() {
            return {
                videoList:[],
                videoLists:[
                    {"id":1,"title":"[美人鱼名场面]当你参","long":"1:45","type":"搞笑","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572369077&di=67103cc9d81a621336fe3a5cd017037e&imgtype=jpg&er=1&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Fb4ac77220905ca7039f2dee29c003a6b11838b9b.jpg","content":"美人鱼名场面是什么梗此梗指电影《美人鱼》中刘轩(邓超饰)被美人鱼族群绑架后，在美人鱼珊珊的帮助下侥幸逃脱，前往派出所报警时发生的剧情。本段剧情情节极为喜感，经常被视频作者和段子手改编，衍生出了许多有趣的搞笑视频出自该段视频的一些名句如下:我们是xx，我们不会怕我想起高兴的事情她不是漂不漂亮的问题，她真的是那种，那种很少见的那种我们受过严格的训练，无论多好笑，我们都不会笑，除非忍不住"},
                    {"id":2,"title":"CCTV中央联播新闻","long":"0:25","type":"新闻","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571775562868&di=266a9d3d1b3df9991ccd759b33fac9e7&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2F6%2F6F%2F6F0AEF260FE9B067E4BD57E1DFE46C1D.jpg","content":"《新闻联播》是中国收视率最高、影响力最大的电视新闻栏目，内容涵盖政治、经济、科技、社会、军事、外交、文化、体育……无所不包，她以客观、生动、丰富的纪实手段记录了中华大地30年来每一天发生的变化。因此她是一部最真实的历史教科书。 自1982年9月1日起，中共中央明确规定，重要新闻首先在《新闻联播》中发布，由此开始奠定节目为官方新闻发布管道的重要地位，节目宗旨“宣传党和政府的声音，传播天下大事。"},
                    {"id":3,"title":"特朗普:没有人比我更懂","long":"5:55","type":"新闻","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571775639449&di=612fa8fcb780563f1b16f807f6ee9169&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F32%2Fw979h653%2F20191010%2Fe1ed-ifrwayx4140409.jpg","content":"【特朗普要求WTO改革 否则将不再承认发展中国家的特殊地位】法新社报道，当地时间26日，特朗普在一份声明中称，WTO使用“发达国家和发展中国家的过时二分法，让一些成员国获得了不公平的好处。”声明称，如果90天内，WTO更改规则没有实质性进展，美国将不再承认任何一个“不适当地宣布自己是发展中国家，在世贸组织规则和谈判中不适当地谋求灵活性的利益”的成员国为发展中国家。此后，他还发推称，指示美国贸易代表采取行动，阻止这些国家以美国利益为代价利用这一系统。"},
                    {"id":4,"title":"毛主席十个读书秘诀","long":"2:25","type":"历史","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571775732690&di=8d2b7a691c91f42de898b1cd1b2c7c60&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20171026%2Faac79e516d524c64a1413ad7804cc9df_th.jpeg","content":"毛泽东青少年时期就养成了读书用功、持之以恒的良好习惯。长沙求学时他曾写过一幅自勉联：“贵有恒，何必三更起五更眠；最无益，只怕一日曝十日寒。”这幅对联充分体现了毛泽东对“积学贵有恒”方法的称道。后来，他也曾教育广大干部，“读书贵在坚持，坚持数年，必有好处。”这也是对“读书贵有恒”方法的肯定。","content":"木叶隐村突然遭到九尾妖狐的袭击， 四代火影波风水门牺牲生命将妖狐封印到当时还是婴儿的鸣人身上。村人将鸣人当做妖狐的化身，对他冷眼相待，鸣人为了得到大家的认同而不断在村里搞恶作剧，以引起人们的注意。鸣人的目标是成为村子里最伟大的忍者“火影”，让所有人认同他的存在。在忍者学校是万年吊车尾的鸣人，终于得到伊鲁卡老师的认同而顺利毕业，并和同期毕业生佐助、小樱分配到同一小组。指导上忍卡卡西为了培育鸣人他们的团队合作精神而在生存训练中设下各种考验，最终判定他们合格，也使得鸣人他们学习到了团队合作的重要性。"},
                    {"id":5,"title":"习近平主持召开党的会议","long":"0:25","type":"新闻","author":"CCTV","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571777620318&di=eec2d80d7e752a733716b22c3c78e1aa&imgtype=0&src=http%3A%2F%2Fp2.img.cctvpic.com%2FphotoAlbum%2Fpage%2Fperformance%2Fimg%2F2019%2F2%2F15%2F1550213216719_544.jpg","content":"会议指出，爱国主义是中华民族精神的核心。中国特色社会主义进入新时代，必须大力弘扬爱国主义精神，把爱国主义教育贯穿国民教育和精神文明建设全过程。在庆祝新中国成立70周年之际，制定印发《新时代爱国主义教育实施纲要》，对于引导全体人民弘扬伟大的爱国主义精神，为实现中华民族伟大复兴的中国梦不懈奋斗，具有非常重要的现实意义和深远的历史意义。"},
                    {"id":6,"title":"火影忍者十尾剪辑","long":"0:65","type":"动画","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571777711795&di=c3231e295b81c87850ceb4e935af38e7&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F147d87906db56268e586e2b7f689b61c4f92d8e917109-7sPeYb_fw658"},
                    {"id":7,"title":"海贼王特燃剪辑录","long":"9:25","type":"动画","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571777753052&di=fe34ac2fb7a54b2a650703a19305c3c8&imgtype=0&src=http%3A%2F%2Fimg.article.pchome.net%2F00%2F22%2F77%2F02%2Fpic_lib%2Fs960x639%2Fone%2520pic_212460s960x639.jpg","content":"创作海贼故事是尾田荣一郎长久以来的梦想，他小时候一直很好奇为什么没有什么漫画以海贼为主题，他顶多只知道有《北海小英雄》这部动画。他认为男孩长到某个年纪后应该就会想要出海寻宝才对。尾田从小就很想看海贼的漫画，那个时候他对自己说，如果要自己画的话，那就一定会画海贼的故事。不管作品卖不卖得掉，他都是作好了心理准备才会这么选择的，纯粹就是他自己想看而已"},
                    {"id":8,"title":"美国电影最受欢迎TOP10","long":"12:25","type":"电影","author":"用户B","time":"2018-9-1","num":18,"img":"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=173694604,2807409640&fm=26&gp=0.jpg","content":"而这些在其电影中都有着很好的体现，这些都是很多其他国家电影所不具备的。包容这一点尤其是其他国家望尘莫及的，最典型的例子是2006年的电影《硫磺岛来信》，能从侵略者和敌人的角度来表现战争，发掘敌人身上的闪光点与无奈，在全球恐怕没有多少国家能做到。因而美国电影一直是着世界电影产业发展的潮流。19世纪末20世纪初，美国的城市工业经济和中下层居民数量迅速增长，美国电影成为适应城市平民需要的一种大众娱乐。它起先在歌舞游乐场内，随后进入小剧场，在剧目演出之后放映。"},
                    {"id":9,"title":"电影改编新作《僵尸世界》","long":"1:25","type":"电影","author":"用户A","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572372592&di=64339291f5394753d833843589b5e875&imgtype=jpg&er=1&src=http%3A%2F%2Fimg4.dwstatic.com%2Fpc%2F1712%2F376760026781%2F1512804873027.jpg","content":"而这些在其电影中都有着很好的体现，这些都是很多其他国家电影所不具备的。包容这一点尤其是其他国家望尘莫及的，最典型的例子是2006年的电影《硫磺岛来信》，能从侵略者和敌人的角度来表现战争，发掘敌人身上的闪光点与无奈，在全球恐怕没有多少国家能做到。因而美国电影一直是着世界电影产业发展的潮流。19世纪末20世纪初，美国的城市工业经济和中下层居民数量迅速增长，美国电影成为适应城市平民需要的一种大众娱乐。它起先在歌舞游乐场内，随后进入小剧场，在剧目演出之后放映。"},
                    {"id":10,"title":"青春活力，激情澎湃的舞蹈","long":"0:25","type":"舞蹈","author":"用户B","time":"2018-9-1","num":18,"img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572372644&di=c0f2bae29b4bda1930d10218afc90dd6&imgtype=jpg&er=1&src=http%3A%2F%2Fepaper.wendu.cn%2FSourcePaper%2F2015-03-23%2F17%2F520315_wanghua_1426850809236_b.jpg","content":"舞蹈是一种表演艺术，使用身体来完成各种优雅或高难度的动作，一般有音乐伴奏，以有节奏的动作为主要表现手段的艺术形式。它一般借助音乐，也借助其他的道具。舞蹈本身有多元的社会意义及作用，包括运动、社交/求偶、祭祀、礼仪等。在人类文明起源前，舞蹈在仪式，礼仪，庆典和娱乐方面都十分重要。中国在五千年以前就已经出现了舞蹈，它产生于奴隶社会，发展到秦汉之际已形成一定特色。"}
                ]
        }
    },
    created() {
            this.getVideo()
        },
        methods: {
            getVideo(){
                this.videoLists.forEach(element => {
                    if(element.id==this.$route.params.id)
                    this.videoList=element
                });
            }
        },

}
</script>