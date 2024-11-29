<script setup>
import { usePopup } from '@/stores/popup'
const popup = usePopup()
</script>
<template>
  <div class="popup-wrap" id="popup-response-click">
    <div class="popup primary-500" id="popup-response">
      <button class="close" @click="popup.closePopup($event.target)">
        <span class="material-icons">close</span>
      </button>
      <div class="form">
        <div class="seperate">
          <div class="input medium lg">
            Nama Pelapor
            <input type="text" name="consumer" disabled placeholder="Nama Pelapor" />
          </div>
          <div class="input medium lg">
            Nama Vendor
            <input type="text" name="vendor" disabled placeholder="Nama Vendor yang Dilaporkan" />
          </div>
          <div class="input input-big medium lg">
            Komentar
            <textarea name="comment" id="comment" disabled placeholder="Deksripsi"></textarea>
          </div>
        </div>
        <div class="seperate">
          <div class="input medium lg">
            Foto Bukti
            <div class="wrapper base" id="foto_bukti">
              File(s):
              <input type="file" id="consumer_photo" name="bukti" accept=".jpg|.png" disabled />
            </div>
          </div>
          <div class="input medium lg">
            Rating
            <div class="wrapper sm" id="rating">
              Masukan angka 0.00 sampai 5.00:
              <input type="number" id="rating" name="rating" min="0" max="5" step="0.01" disabled />
            </div>
          </div>
        </div>
      </div>
      <div class="button-wrap">
        <button
          class="btn-medium green-300 bold xl"
          id="terima"
          @click="popup.redirectToReport($event.target)"
        >
          Terima
        </button>
        <button class="btn-medium red-300 bold xl" @click="popup.closePopup($event.target)">
          Tolak
        </button>
      </div>
    </div>
  </div>
</template>
