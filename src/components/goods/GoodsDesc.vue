<template>
        <div>
            <h3>{{info.title}}</h3>
            <div class="content" v-html="info.content"></div>
        </div>
       
    </template>
    <script>
        export default{
            data() {
                return {
                    info:[]
                }
            },
            created(){
                    this.getGoodsDesc()
                },
            methods: {
                getGoodsDesc(){
                 
                }
            },
        }
    </script>
    <style scoped>
        h3{
            font-size: 16px;
            color: #226aff;
            text-align: center;
            margin: 15px 0;
        }
    </style>