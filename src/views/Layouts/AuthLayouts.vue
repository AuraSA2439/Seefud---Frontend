<script>
export default {
  beforeUnmount() {
    console.log('AuthLayout is being destroyed')
    // Tambahkan logika reset atau cleanup di sini
  },
}
</script>

<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<style>
/* Import styles-login.css dan gunakan dalam auth-layout */

/* Tambahkan Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
