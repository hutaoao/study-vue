<template>
		<transition>
			<div v-if="isShow" :class="isShow ? 'component-base-sideslider-show' : 'component-base-sideslider-hide'" class="component-base-sideslider">
				<div class="ant-spin-container">
					<div class="sideslider-header">
						<div class="title">
							<slot name="slot1"></slot>
						</div>
						<i class="el-icon-close" @click="close"></i>
					</div>
					<div class="sideslider-body">
						<slot name="slot2"></slot>
					</div>
				</div>
			</div>
		</transition>
</template>

<script>
	export default {
		props:['isShow'],
		data() {
			return {
				list:[
                    {
                        title:'标题1',
                        count:'内容1'
                    },
                    {
                        title:'标题2',
                        count:'内容2'
                    }
                ]
			}
		},
        watch:{
		    isShow(){
		        if(this.isShow){
                    this.$emit('open', this.list);
                }else{
                    this.$emit('close', this.list);
                }
            }
        },
		mounted() {
			// console.log(this.isShow);
		},
		methods: {
			close(){
				this.$emit("update:isShow",false);
			}
		}
	}
</script>

<style scoped="scoped">
	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */

	.v-enter-active {
		transition: all .3s ease;
	}

	.v-leave-active {
		transition: all .3s ease;
	}

	.v-enter,
	.v-leave-to {
		transform: translateX(500px);
	}

	.component-base-sideslider {
		position: fixed;
		width: 500px;
		bottom: 0;
		right: 0px;
		top: 90px;
		border: 1px solid #e0e0e0;
		overflow: auto;
		background-color: #FFFFFF;
		-webkit-box-shadow: 0 7px 21px rgba(0, 0, 0, .3);
		box-shadow: 0 7px 21px rgba(0, 0, 0, .3);
		z-index: 99;
	}
	.component-base-sideslider::-webkit-scrollbar{
		width: 0;
	}

	.ant-spin-container {
		position: relative;
	}

	.component-base-sideslider .sideslider-header {
		height: 40px;
		line-height: 40px;
		color: white;
		font-size: 16px;
		border-bottom: 1px solid #e0e0e0;
		background-color: #00c2f2;
	}
	.component-base-sideslider .sideslider-header .title{
		width: 445px;
		float: left;
	}
	.component-base-sideslider .sideslider-header i{
		float: right;
		height: 40px;
		width: 40px;
		line-height: 40px;
		font-size: 20px;
		margin-right: 15px;
		cursor: pointer;
	}
	.component-base-sideslider .sideslider-body {
		padding: 0;
	}

	.component-base-sideslider .sideslider-header .header-icon-close {
		cursor: pointer;
		line-height: 18px;
		padding-right: 10px;
		border-right: 1px solid #e0e0e0;
		border-width: 2px;
		border-radius: 0!important;
		margin-right: 10px;
	}

	.anticon {
		display: inline-block;
		font-style: normal;
		vertical-align: baseline;
		text-align: center;
		text-transform: none;
		line-height: 1;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
