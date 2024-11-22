<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <!-- Gunakan route.meta.layoutKey untuk memastikan layout di-reset -->
      <component :is="Component" :key="route.meta.layoutKey" />
    </Transition>
  </RouterView>
</template>

<style scoped>
/* Fade transition styles */
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
