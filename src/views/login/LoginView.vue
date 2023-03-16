<template>
    <div class="login-wrapper" style="height:100%">
        <div class="login-content">
            <el-card class="box" header="Log in" shadow="always">
                <el-input v-model="username" placeholder="使用者帳號" />
                <el-input v-model="password" placeholder="使用者密碼" style="padding-bottom:10px" />
                <el-button type="primary" @click="login">登入</el-button>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("1111");
const password = ref("2222");
const router = useRouter();

function login() {
    let name = username.value;
    let pass = password.value;
    router.push({
        name: "menu",
        params: { name, pass },
    });
}
</script>

<style>
.box {
    position: relative;
    top: 0;
    opacity: 1;
    padding: 60px 50px 40px 50px;
    width: 100%;
    background: #fff;
    border-radius: 10px;
    transform: scale(1);
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    z-index: 5;
    max-width: 330px;
}

.login-wrapper .el-card__header {
    text-align: center;
    width: 100%;
    display: block;
    font-weight: 700;
    font-size: 30px;
    margin: 0;
}

.login-wrapper .el-card {
    padding: 40px 70px 50px;
}

.login-content {
    text-align: -webkit-center;
    height: 100%;
    display: inline-flex;
    align-items: center;
}
</style>