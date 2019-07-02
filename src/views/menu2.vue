<template>
    <div>
    	<h1>{{msg}}</h1>
        <h2>{{$store.state.count}}--{{count}}</h2>
        <p>
			<button @click="$store.commit('add',10)">增加</button>
			<button @click="reduce">减少</button>
		</p>
		<!--<p>-->
			<!--<button @click="addActions">增加</button>-->
			<!--<button @click="reduceActions">减少</button>-->
		<!--</p>-->
    </div>
</template>

<script>
	import store from '@/store';
	import {mapState,mapMutations,mapGetters} from 'vuex';
	export default {
	    data(){
	    	return {
		    	msg:'vuex学习'
			}
		},
		//一、通过computed的计算属性直接赋值
		/*
		computed:{
			count(){
				return this.$store.state.count;
			}
		}*/
		//二、通过mapState的对象来赋值
		/*computed:mapState({
			count:state=>state.count
		})*/
		//三、通过mapState的数组来赋值--推荐使用
		// computed:mapState(['count']),

		computed:{
			...mapState(['count']),
			/*count(){
				this.$store.getters.count;
			}*/
			...mapGetters(['count'])
		},

		methods:mapMutations(['add','reduce'])
	}
</script>

<style scoped>

</style>
