<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>{{$store.state.count}}--{{count}}</h2>
        <h3>{{number}}--{{oldNumber}}</h3>
        <p>
            <button @click="$store.commit('add',10)">增加</button>
            <button @click="$store.commit('reduce')">减少</button>
            <button @click="number++">计算属性</button>
        </p>
    </div>
</template>

<script>
    // import store from '@/store';
    // import {mapState, mapMutations, mapGetters} from 'vuex';

    export default {
        data() {
            return {
                msg: 'vuex学习',
                number: 100
            }
        },
        computed: {//计算属性 响应式依赖进行缓存的 相关响应式依赖发生改变时它们会重新求值
            count(){
                return this.$store.state.count
            },
            oldNumber(){
                return this.number
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
