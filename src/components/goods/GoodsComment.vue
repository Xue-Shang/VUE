<template>
    <div>
       <comments :id="$route.params.id"></comments>
    </div>
</template>
<script>
    import comments from '../subcomponents/comment.vue'
    export default{
        data() {
            return {
                
            }
        },
        methods: {
            
        },
        components:{
            comments
        }
    }
</script>
<style scoped>
</style>