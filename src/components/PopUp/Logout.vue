<script setup>
import { usePopup } from '@/stores/popup'
import { useAuthStore } from '@/stores/auth'
const popup = usePopup()
const auth = useAuthStore()
</script>
<template>
  <div class="popup-wrap" id="popup-logout-click" style="display: none">
    <div class="popup primary-500" id="popup-logout">
      <button class="close" @click="popup.closePopup($event.target)">
        <span class="material-icons">close</span>
      </button>
      <div class="confirm">
        <slot>
          <div class="xl">Do you want to logout?</div>
          <div class="button-wrap">
            <button class="btn-medium blue-300 bold xl" id="logout" @click="auth.logout">
              Yes
            </button>
            <button
              class="btn-medium primary-300 bold xl"
              @click="
                popup.closePopup(
                  $event.target.parentElement.parentElement.parentElement.parentElement,
                )
              "
            >
              Cancel
            </button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
