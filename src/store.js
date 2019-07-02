import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1,
        activeName:'2'
    },
    mutations: {
    	//传值
        add(state,num) {
            state.count+=num
        },
        reduce(state){
        	state.count--
        },
        setActiveName(state,name){
            state.activeName = name;
        }
    },
});

export default store;
