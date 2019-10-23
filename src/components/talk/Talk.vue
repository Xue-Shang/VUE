<template>
    <div class="content">
            <header class="mui-bar mui-bar-nav">
                    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
                    <button id="submit" class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">发送</button>
                    <h1 class="mui-title">问题反馈</h1>
                </header>
                <div class="mui-content">
                    <div class="mui-content-padded">
                        <div class="mui-inline">问题和意见</div>
                       
                        <!--快捷输入具体内容，开发者可自己替换常用语-->
                        <div id="popover" class="mui-popover">
                            <div class="mui-popover-arrow"></div>
                            <div class="mui-scroll-wrapper">
                                <div class="mui-scroll">
                                    <ul class="mui-table-view">
                                        <!--仅流应用环境下显示-->
                                        <li class="mui-table-view-cell stream">
                                            <a href="#">桌面快捷方式创建失败</a>
                                        </li>
                                        <li class="mui-table-view-cell"><a href="#">界面显示错乱</a></li>
                                        <li class="mui-table-view-cell"><a href="#">启动缓慢，卡出翔了</a></li>
                                        <li class="mui-table-view-cell"><a href="#">偶发性崩溃</a></li>
                                        <li class="mui-table-view-cell"><a href="#">UI无法直视，丑哭了</a></li>
                                    </ul>
                                </div>
                            </div>
        
                        </div>
                    </div>
                    <div class="row mui-input-row">
                            <el-input
                            type="textarea"
                            autosize
                            placeholder="请输入内容"
                            v-model="textarea1">
                          </el-input>  
                    </div>
                    <p>图片(选填,提供问题截图,总大小10M以下)</p>
                    <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                    <div id='image-list' class="row image-list"></div>
                    <p>QQ/邮箱</p>
                    <div class="mui-input-row">
                            <el-input
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="请输入内容"
                            v-model="textarea2">
                          </el-input>                          
                    </div>
                    <div class="mui-content-padded">
                            <div class="block">
                                    <span class="demonstration">评分</span>
                                    <el-rate
                                      v-model="value2"
                                      :colors="colors">
                                    </el-rate>
                                  </div>
                    </div><br />
                </div>
          
    </div>
</template>
<style scoped>
    @import '../../lib/mui/css/feedback.css';
    @import '../../lib/mui/css/mui.css';

 
  button{background-color: #409eff;color: white}
.mui-content{padding:44px 10px 150px 10px}
</style>

    <script src="../../lib/mui/js/mui.min.js"></script>
    <script src="../../lib/mui/js/feedback.js" type="text/javascript" charset="utf-8"></script>
    <script>
      import mui from '../../lib/mui/js/mui.js'
        mui.init();
			mui('.mui-scroll-wrapper').scroll();
    import {Toast} from 'mint-ui'
    export default{
        data() {
            return {
                fileList: [{name: '', url: ''}],
                textarea1: '',
                textarea2: '',
                username:'',
                email:'',
                phone:'',
                introduction:'',
                value1: null,
              value2: null,
                colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }

            }
        },
        methods: {
            postComment(){
                    //校验是否为空内容
                    if(this.username.trim().length===0||this.email.trim().length===0||this.phone.trim().length===0||this.introduction.trim().length===0){
                        return Toast('请填写完整您的信息')
                    }else{
                        return Toast('谢谢您的建议')
                    }
        
        },
        handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
}
</script>