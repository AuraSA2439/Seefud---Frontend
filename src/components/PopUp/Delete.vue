<script setup>
import { usePopup } from '@/stores/popup'
const popup = usePopup()
</script>
<template>
  <div class="popup-wrap" id="popup-delete-click" style="display: none">
    <div class="popup primary-500" id="popup-delete">
      <button class="close" @click="popup.closePopup($event.target)">
        <span class="material-icons">close</span>
      </button>
      <div class="confirm">
        <div class="bold xl">Apakah kamu yakin kamu mau menghapus data ini?</div>
        <div class="button-wrap">
          <button
            class="btn-medium red-300 bold xl"
            id="delete"
            @click="popup.executeEndpointDelete($event.target)"
          >
            Yes
          </button>
          <button class="btn-medium green-300 bold xl" @click="popup.closePopup($event.target)">
            No
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
