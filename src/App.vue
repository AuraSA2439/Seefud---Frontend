<template>
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade" mode="out-in">
      <!-- Gunakan route.meta.layoutKey untuk memastikan layout di-reset -->
      <component :is="Component" :key="route.meta.layoutKey" />
    </Transition>
  </RouterView>
</template>
