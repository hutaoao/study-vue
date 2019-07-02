<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
	<div>
		<!-- sync修饰符 -->
		<a-slider :isShow.sync="show" @open="openSlider" @close="closeSlider">
			<!-- v-slot 指令自 Vue 2.6.0 起被引入，提供更好的支持 slot 和 slot-scope 特性的 API 替代方案。 -->
            <!-- v-slot可以缩写成 # -->
			<template v-slot:slot1>
				<div>我是标题</div>
			</template>
			<!-- 低版本的slote -->
			<div slot="slot2">我是内容,{{count}}</div>
		</a-slider>
		<button @click="toggle" style="float: left;">{{show}}—slider</button>
	</div>
</template>

<script>
	import slider from '@/components/slider.vue'
	export default {
	    data(){
	    	return {
		    	show:true,
		    	count:'大家好'
			}
		},
		components:{
		    "a-slider":slider
		},
		methods:{
			toggle(){
				this.show = !this.show;
			},
            openSlider(list){
			    console.log(list);
            },
            closeSlider(list){
                console.log(list);
            }
		}
	}
</script>

<style scoped="scoped">

</style>
