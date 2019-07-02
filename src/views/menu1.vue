<template>
    <div>
    	<!-- 路由嵌套 -->
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
			<el-menu-item index="1">
				<router-link to="/menu1/tab1">
					处理中心
				</router-link>
			</el-menu-item>
			<el-menu-item index="2">
				<router-link to="/menu1/tab2">
					登陆中心
				</router-link>
			</el-menu-item>
			<el-menu-item index="3">
				<router-link to="/menu1/tab3">
					订单管理
				</router-link>
			</el-menu-item>
        </el-menu>

		<router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
