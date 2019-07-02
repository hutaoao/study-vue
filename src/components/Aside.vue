<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo" @select="selectMenu">
            <router-link to="/menu1">
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">introJs使用</span>
                </el-menu-item>
            </router-link>
            <router-link to="/menu2">
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Vuex学习</span>
                </el-menu-item>
            </router-link>
            <router-link to="/menu3">
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">sync修饰符</span>
                </el-menu-item>
            </router-link>
            <router-link to="/menu4">
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">组件传值</span>
                </el-menu-item>
            </router-link>
            <router-link to="/menu5">
                <el-menu-item index="5">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航五</span>
                </el-menu-item>
            </router-link>
        </el-menu>
    </div>
</template>

<script>
    import eventBus from '../assets/js/eventBus'
    export default {
        name: "",
        methods:{
            selectMenu(index){
                eventBus.$emit('passIndex',index);
            }
        }
    }
</script>

<style scoped>

</style>
