<template>
    <div>
        <div class="left">面包屑 / {{title}}</div>
        头部
    </div>
</template>

<script>
    import eventBus from '../assets/js/eventBus'
    export default {
        name: "",
        data(){
            return{
                title:'导航二'
            }
        },
        mounted(){
            eventBus.$on("passIndex", (index) => {
                switch (index) {
                    case '1':
                        this.title = '导航一';
                        break;
                    case '2':
                        this.title = '导航二';
                        break;
                    case '3':
                        this.title = '导航三';
                        break;
                    case '4':
                        this.title = '导航四';
                        break;
                    case '5':
                        this.title = '导航五';
                }
            })
        }
    }
</script>

<style scoped>
    .left{
        float: left;
    }
</style>
