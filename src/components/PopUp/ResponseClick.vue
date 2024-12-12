<script setup>
defineProps({
  report: {
    type: Object,
    default: () => {},
  },
  loading: {
    type: Boolean,
  },
})
import { usePopup } from '@/stores/popup'
import SkeletonLoading from '../SkeletonLoading.vue'
import { relativePath, encodeUrlFoto } from '@/plugins/mixins'

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
            <SkeletonLoading v-if="loading" width="100%" height="20px" borderRadius="4px" />
            <input
              v-else
              disabled
              :value="report?.user_name"
              type="text"
              name="consumer"
              placeholder="Nama Pelapor"
            />
          </div>
          <div class="input medium lg">
            Nama Vendor
            <SkeletonLoading v-if="loading" width="100%" height="20px" borderRadius="4px" />
            <input
              v-else
              disabled
              type="text"
              name="vendor"
              placeholder="Nama Vendor yang Dilaporkan"
              :value="report?.vendor_name"
            />
          </div>
          <div class="input input-big medium lg">
            Komentar
            <SkeletonLoading v-if="loading" width="100%" height="100px" borderRadius="4px" />
            <textarea
              v-else
              disabled
              name="comment"
              id="comment"
              placeholder="Deksripsi"
              v-text="report?.comment"
            ></textarea>
          </div>
        </div>
        <div class="seperate">
          <div class="input medium lg">
            Foto Bukti
            <div class="wrapper base" id="foto_bukti">
              <SkeletonLoading v-if="loading" width="100%" height="100px" borderRadius="4px" />
              <div v-else>
                <img
                  v-if="report.foto"
                  :src="relativePath('/images/feedback/', encodeUrlFoto(report.foto))"
                  alt="vendor's photo"
                />
                <span v-else>Tidak ada foto</span>
              </div>
            </div>
          </div>
          <div class="input medium lg">
            Rating
            <div class="wrapper sm" id="rating">
              <!-- Masukan angka 0.00 sampai 5.00: -->
              <SkeletonLoading v-if="loading" width="100%" height="20px" borderRadius="4px" />
              <input
                v-else
                disabled
                :value="report?.rating"
                type="number"
                id="rating"
                name="rating"
                min="0"
                max="5"
                step="0.01"
                placeholder="5.00"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="button-wrap" v-if="!loading">
        <button
          class="btn-medium green-300 bold xl"
          id="terima"
          @click="popup.redirectToReport($event.target, true, report.id)"
        >
          Terima
        </button>
        <button
          class="btn-medium red-300 bold xl"
          @click="popup.redirectToReport($event.target, false, report.id)"
        >
          Tolak
        </button>
      </div>
    </div>
  </div>
</template>
