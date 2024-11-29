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
  <main>
    <div class="login-box primary-500">
      <!-- <div class="title-box xl5 bold">SEEFUD</div> -->
      <img src="/assets/images/seefud-logo.png" alt="logo" />
      <form class="input-form" @submit.prevent="handleLogin">
        <div class="input-box">
          <input
            type="text"
            name="username/email"
            placeholder="Username/Email"
            v-model="username"
          />
          <br />
          <input type="text" name="password" placeholder="Password" v-model="password" />
        </div>
        <button type="submit" id="login-button" class="xl bold prime">LOGIN</button>
        <a href="" class="base">Forgot password?</a>
      </form>
    </div>
  </main>
</template>
