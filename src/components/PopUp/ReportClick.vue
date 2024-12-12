<script setup>
import { usePopup } from '@/stores/popup'
import SkeletonLoading from '../SkeletonLoading.vue'
const popup = usePopup()
import { convertTime, relativePath } from '@/plugins/mixins'
import { inject } from 'vue'
const handleTanggapi = inject('eventButtonTanggapi')
defineProps({
  reports: {
    type: Array,
    required: true,
    default: () => [],
  },
  loading: {
    type: Boolean,
  },
})
</script>
<template>
  <div class="popup-wrap" id="popup-report-click" style="display: none">
    <div class="popup primary-500 popout" id="popup-report-counts">
      <button class="close" @click="popup.closePopup($event.target)">
        <span class="material-icons">close</span>
      </button>
      <div class="reports">
        <table class="main-tab">
          <thead class="medium base primary-900">
            <tr>
              <th>Pelapor</th>
              <th>Waktu</th>
              <th>Foto</th>
              <th>Komentar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody v-if="loading" class="sm white">
            <SkeletonLoading
              v-for="n in 10"
              :key="n"
              width="100%"
              height="20px"
              style="margin-bottom: 5px"
            />
          </tbody>
          <tbody v-else id="data" class="sm primary-700">
            <tr v-if="reports.length == 0">
              <th colspan="5">Data masih kosong</th>
            </tr>
            <tr v-for="(report, i) in reports" :key="i">
              <th>{{ report.user_name }}</th>
              <th>{{ convertTime(report.created_at) }}</th>
              <th>
                <img
                  v-if="report.foto"
                  :src="relativePath('/images/feedback/', report.foto)"
                  alt="vendor's photo"
                />
                <span v-else>-</span>
              </th>
              <th>{{ report.comment }}</th>
              <th>
                <button
                  v-if="report.report_status == null"
                  class="respon-btn btn-small blue-300 bold sm"
                  @click="handleTanggapi($event.target, report.id)"
                >
                  Tanggapi!
                </button>
                <button
                  style="cursor: no-drop"
                  v-else
                  :class="[
                    'btn-small bold sm',
                    report.report_status == 1 ? 'green-300' : 'red-300',
                  ]"
                >
                  {{ report.report_status == 1 ? 'Diterima' : 'Ditolak' }}
                </button>
              </th>
            </tr>

            <!-- <tr class="done">
              <th>Spicy Yakiniku</th>
              <th>Asta</th>
              <th>11-29-2024 01:25 PM</th>
              <th>
                <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
              </th>
              <th>Tempat Kotor</th>
              <th>
                <button
                  class="respon-btn btn-small primary-300 bold sm"
                  @click="popup.report_response($event.target)"
                  disabled="disabled"
                >
                  Selesai
                </button>
              </th>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
