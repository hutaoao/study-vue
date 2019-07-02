<template>
    <div class="homeBox">
        <el-container>
            <el-header style="background:#eee;lineHeight:60px;">
                <Header/>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Aside/>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Aside from '../components/Aside'
    import Header from '../components/Header'

    export default {
        name: "home",
        data(){
            return{
                tabIndex: '1'
            }
        },
        components: {
            Aside,
            Header
        },
        methods:{

        }
    };
</script>

<style scoped>
</style>
