<template>
        <div>
            <div class="comt">
            <h3>发表评论</h3>
            <hr>
        
        <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item,i) in comment" :key="item.add_time">
            <div class="cmt-item">
                <div class="cmt-title">
                   第{{i+1}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                   {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore" plain >加载更多</mt-button>
    </div>
    </div>
    </template>
    <script>
        
        import {Toast} from 'mint-ui'
        export default{
            data() {
                return {
                    pageIndex:0,
                    comment:[],
                    comments:[
                    {"pageIndex":0,"message":[{"user_name":"匿名用户","add_time":"2019-10-22T10:36:58.000Z","content":"hhh"},{"user_name":"匿名用户","add_time":"2019-10-22T09:38:10.000Z","content":"7777"},{"user_name":"匿名用户","add_time":"2019-10-22T09:36:11.000Z","content":"666"},{"user_name":"匿名用户","add_time":"2019-10-22T09:27:51.000Z","content":"111"},{"user_name":"匿名用户","add_time":"2019-10-22T09:07:00.000Z","content":"大个"},{"user_name":"匿名用户","add_time":"2019-10-22T09:05:53.000Z","content":"前端"},{"user_name":"匿名用户","add_time":"2019-10-22T09:04:29.000Z","content":"世界化"},{"user_name":"匿名用户","add_time":"2019-10-22T09:03:09.000Z","content":"捡垃圾十多个"},{"user_name":"匿名用户","add_time":"2019-10-22T09:02:53.000Z","content":"捡垃圾十多个"},{"user_name":"匿名用户","add_time":"2019-10-22T09:01:01.000Z","content":"jklasjglas"}]},
                    {"pageIndex":1,"message":[{"user_name":"匿名用户","add_time":"2019-10-22T08:23:53.000Z","content":"我是小妖怪，逍遥又自在"},{"user_name":"匿名用户","add_time":"2019-10-22T07:01:30.000Z","content":"vue.study"},{"user_name":"匿名用户","add_time":"2019-10-22T07:01:15.000Z","content":"enne"},{"user_name":"匿名用户","add_time":"2019-10-22T07:00:08.000Z","content":"dada"},{"user_name":"匿名用户","add_time":"2019-10-22T04:05:11.000Z","content":"hahah"},{"user_name":"匿名用户","add_time":"2019-10-22T01:49:39.000Z","content":"07：59：27那位同学好早啊！我要向你看齐！如果你看到的话，我们来一个暗号吧，下次评论的时候说“我是小妖怪，逍遥又自在”"},{"user_name":"匿名用户","add_time":"2019-10-22T01:45:10.000Z","content":"我发现用这个服务器地址的人好多哦"},{"user_name":"匿名用户","add_time":"2019-10-21T23:59:27.000Z","content":"一群傻子"},{"user_name":"匿名用户","add_time":"2019-10-21T13:16:30.000Z","content":"嘻嘻嘻"},{"user_name":"匿名用户","add_time":"2019-10-21T13:16:09.000Z","content":"啦啦啦"}]},
                  
                    {"pageIndex":2,"message":[{"user_name":"匿名用户","add_time":"2019-10-21T11:55:24.000Z","content":"很好"},{"user_name":"匿名用户","add_time":"2019-10-21T11:55:06.000Z","content":"没有"},{"user_name":"匿名用户","add_time":"2019-10-21T11:52:15.000Z","content":"爱你"},{"user_name":"匿名用户","add_time":"2019-10-21T11:51:08.000Z","content":"undefined"},{"user_name":"匿名用户","add_time":"2019-10-21T11:50:40.000Z","content":"undefined"},{"user_name":"匿名用户","add_time":"2019-10-21T11:48:16.000Z","content":"你奶奶的"},{"user_name":"匿名用户","add_time":"2019-10-21T11:47:17.000Z","content":"很好"},{"user_name":"匿名用户","add_time":"2019-10-21T11:34:37.000Z","content":"这么多人发布评论的服务器都爆的吧！"},{"user_name":"匿名用户","add_time":"2019-10-21T10:30:04.000Z","content":"你试可以但别刷屏"},{"user_name":"匿名用户","add_time":"2019-10-21T08:29:43.000Z","content":"123123"}]},
                    {"pageIndex":3,"message":[]}
                ],
                    msg:''
                }
            },
            created() {
                this.getComments()
            },
            methods: {
                getComments(){
           
                       this.comment=this.comments[this.pageIndex].message
                       
                  
                    },
                getMore(){
                  
                    this.pageIndex++;
                    if(this.pageIndex<4){
                    this.comments[this.pageIndex].message.forEach(element => {
                        this.comment.unshift(element)
                      
                    });
                }
                 
                },
                postComment(){
                    //校验是否为空内容
                    if(this.msg.trim().length===0){
                        return Toast('评论内容不能为空！')
                    }          
                    var cmt={
                        user_name:'匿名用户',
                        add_time:Date.now(),
                        content:this.msg.trim()
                    };
                    this.comments.unshift(cmt);
                    this.msg="";
                    this.comments[1].message.unshift(cmt)
                    Toast('发表成功')
                },
                
            },
            props:["id"]
        }
    </script>
    <style scoped>
        h3{
            font-size:18px
        }
        textarea{
            font-size:14px;
            height:85px;
            margin:0;
        }
        .cmt-list{
            font-size:13px;
        }
        .cmt-title{
            line-height: 30px;
            background-color: #ccc;
        }
        .cmt-body{
            line-height: 35px;
            text-indent: 2em;
        }
        .comt{
            padding-bottom: 60px;
        }
    </style>