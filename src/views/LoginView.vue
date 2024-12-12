<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import Logout from '@/components/PopUp/Logout.vue'
import { usePopup } from '@/stores/popup'

const messageError = ref('')

const popup = usePopup()

const authStore = useAuthStore()
const email = ref('')
const password = ref('')
const buttonSubmit = ref(null)

const handleLogin = async () => {
  buttonSubmit.value.disabled = true
  try {
    await authStore.login(email.value, password.value)
  } catch (error) {
    popup.logout_popup()
    messageError.value = error
    // alert('Login failed: ' + error)
  }
  buttonSubmit.value.disabled = false
}
</script>
<template>
  <main>
    <div class="login-box primary-500">
      <!-- <div class="title-box xl5 bold">SEEFUD</div> -->
      <img src="/assets/images/seefud-logo.png" alt="logo" />
      <form class="input-form" @submit.prevent="handleLogin">
        <div class="input-box">
          <input type="email" name="email" placeholder="Email" v-model="email" />
          <br />
          <input type="password" name="password" placeholder="Password" v-model="password" />
        </div>
        <button ref="buttonSubmit" type="submit" id="login-button" class="xl bold prime">
          LOGIN
        </button>
        <a href="" class="base">Forgot password?</a>
      </form>
    </div>
    <logout>
      <div class="xl" v-text="messageError"></div>
    </logout>
  </main>
</template>
