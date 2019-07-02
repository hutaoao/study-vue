<template>
    <div>
        <div class="left">面包屑 / {{activeName}}</div>
        头部
    </div>
</template>

<script>
    export default {
        name: "",
        data(){
            return{

            }
        },
        computed:{
            activeName(){
                switch (this.$store.state.activeName) {
                    case '1':
                        return 'introJs使用';
                    case '2':
                        return 'Vuex学习';
                    case '3':
                        return 'sync修饰符';
                    case '4':
                        return '组件传值';
                    case '5':
                        return '导航五';
                }
            }
        },
        mounted(){

        }
    }
</script>

<style scoped>
    .left{
        float: left;
    }
</style>
