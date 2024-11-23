<script>
export default {
  name: 'DashboardLayout',
  mounted() {
    this.addStyle('/assets/css/styles-general.css')
  },
  beforeUnmount() {
    console.log('DashboardLayout is being destroyed')
    this.removeStyle('/assets/css/styles-general.css')
  },
  methods: {
    addStyle(href) {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }
    },
    removeStyle(href) {
      const link = document.querySelector(`link[href="${href}"]`)
      if (link) {
        document.head.removeChild(link)
      }
    },
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
