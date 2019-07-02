<template>
    <div>
        <p>账号：
            <el-input v-model="account" placeholder="请输入账号" style="width: 300px;"></el-input>
        </p>
        <p>密码：
            <el-input v-model="password" placeholder="请输入密码" style="width: 300px;"></el-input>
        </p>
        <p><el-button type="primary" @click="login">登陆</el-button></p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            account:'',
            password:'',
        }
    },
    mounted(){

    },
    methods:{
        login(){
            let params = new URLSearchParams();
            params.append('subType', 1);
            params.append('name', this.account);
            params.append('password', this.password);
            this.$axios.post('/account/login.htm', params)
            .then(function (response) {
                console.log(response);
                if(response.data.success){
                    alert('成功');
                }else{
                    alert(response.data.data.msg);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>

</style>
