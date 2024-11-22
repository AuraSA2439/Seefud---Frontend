<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const username = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await authStore.login(username.value, password.value)
  } catch (error) {
    alert('Login failed: ' + error.message)
  }
}
</script>
<template>
  <main class="auth-layout">
    <div class="login-box primary-500">
      <div class="title-box xl5 bold">SEEFUD</div>
      <form @submit.prevent="handleLogin" class="input-form">
        <div class="input-box">
          <input
            v-model="username"
            type="text"
            name="username/email"
            placeholder="Username/Email"
          />
          <br />
          <input v-model="password" type="text" name="password" placeholder="Password" />
        </div>
        <button type="submit" id="login-button" class="xl bold prime">LOGIN</button>
        <a href="" class="base">Forgot password?</a>
      </form>
    </div>
  </main>
</template>
