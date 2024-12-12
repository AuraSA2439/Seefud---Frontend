<template>
  <div class="skeleton-loader" :style="loaderStyle"></div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '20px',
    },
    borderRadius: {
      type: String,
      default: '0px',
    },
  },
  setup(props) {
    const loaderStyle = computed(() => ({
      width: props.width,
      height: props.height,
      borderRadius: props.borderRadius,
      background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
      backgroundSize: '200% 100%',
      animation: 'skeleton-loading 1.5s infinite',
    }))

    return { loaderStyle }
  },
}
</script>

<style>
@keyframes skeleton-loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
.skeleton-loader {
  display: block;
}
</style>
