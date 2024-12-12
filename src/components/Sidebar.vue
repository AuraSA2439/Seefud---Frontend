<script setup>
import { ref } from 'vue'
import { usePopup } from '@/stores/popup'
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()
const popup = usePopup()
const toggle = ref(true)
</script>

<template>
  <div class="side">
    <div class="sidebar primary-400">
      <div class="popup-btn" @click="toggle = !toggle">
        <span class="material-icons">dashboard</span>
      </div>
    </div>
    <div :class="['sidemenu primary-500', toggle ? 'd-block' : 'd-none']">
      <div class="img-contain"><img src="/assets/images/seefud-logo.png" alt="Logo Seefud" /></div>
      <div class="account" @click="popup.logout_popup()">
        <div class="img-frame primary-100">
          <!-- <img src="" alt="avatar"> -->
        </div>
        <div class="account-details">
          <div class="bold sm">{{ auth?.user?.name }}</div>
          <div class="medium sm">Administrator</div>
        </div>
      </div>
      <div class="menu">
        <!-- <p class="title">MAIN</p> -->
        <ul>
          <li :class="{ active: $route.name === 'Home' }">
            <router-link :to="{ name: 'Home' }">
              <span class="material-icons">analytics</span>
              <div class="txt">Dashboard</div>
            </router-link>
          </li>
          <li :class="{ active: $route.name === 'User' }">
            <router-link :to="{ name: 'User' }">
              <span class="material-icons">person</span>
              <div class="txt">User</div>
            </router-link>
          </li>
          <li :class="{ active: $route.name === 'Vendor' }">
            <router-link :to="{ name: 'Vendor' }">
              <span class="material-icons">restaurant</span>
              <div class="txt">Vendor</div>
            </router-link>
          </li>
          <li :class="{ active: $route.name === 'Report' }">
            <router-link :to="{ name: 'Report' }">
              <span class="material-icons">gpp_maybe</span>
              <div class="txt">Report</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-block {
  display: block;
}
.d-none {
  display: none;
}
</style>
