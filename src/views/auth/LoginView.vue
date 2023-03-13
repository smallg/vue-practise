<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ref } from '@vue/reactivity';
import { useRouter, useRoute } from 'vue-router'
const username = ref('');
const pwd = ref('');
const router = useRouter()

const login = () => {
  console.log(username.value, pwd.value)
  localStorage.setItem('logined', 'yes');
  router.push({ name: 'home' });
}
</script>
<template>
  <section class="login-container">
    <el-card class="box-card">
      <el-row class="mt-10">
        <span class="ml-3 w-35 text-gray-600 inline-flex items-center">User Name:</span>
        <el-input v-model="username" class="w-50 m-2" placeholder="Input username" :suffix-icon="User" />
      </el-row>
      <el-row>
        <span class="ml-3 w-35 text-gray-600 inline-flex items-center">Password:</span>
        <el-input type="password" v-model="pwd" class="w-50 m-2" placeholder="Input password" :suffix-icon="Lock" />
      </el-row>
      <el-row class="justify-center mt-10">
        <el-button class="mr-15" type="success">Register</el-button>
        <el-button type="primary" @click="login">Login</el-button>
      </el-row>
    </el-card>
  </section>
</template>
<style scoped>
.login-container {
  display: flex;
  align-items: center;
  height: 100vh;
}

.el-card {
  width: 500px;
  height: 300px;
  margin: 0 auto;
}
</style>
