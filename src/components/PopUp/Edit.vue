<script setup>
import { usePopup } from '@/stores/popup'
const popup = usePopup()
</script>
<template>
  <div class="popup-wrap" id="popup-edit-click" style="display: none">
    <slot></slot>
  </div>
</template>
