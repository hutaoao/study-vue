import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
    	//传值
        add(state,num) {
            state.count+=num
        },
        reduce(state){
        	state.count--
        }
    },
    getters:{
    	count:function (state) {
    		return state.count+=10;
    	}
    },
    actions:{
    	addActions(context){
    		context.commit('add',10)
    	},
    	reduceActions({commit}){
    		state,mutations,getters,actions
    	}
    }
});

export default store;