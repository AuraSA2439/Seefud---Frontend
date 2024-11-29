<script setup>
import { usePopup } from '@/stores/popup'
const popup = usePopup()
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
              <th>Nama Vendor</th>
              <th>Pelapor</th>
              <th>Waktu</th>
              <th>Foto</th>
              <th>Komentar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody id="data" class="sm primary-700">
            <tr>
              <th>Spicy Yakiniku</th>
              <th>Asta</th>
              <th>11-29-2024 01:25 PM</th>
              <th>
                <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
              </th>
              <th>Tempat Kotor</th>
              <th>
                <button
                  class="respon-btn btn-small blue-300 bold sm"
                  @click="popup.report_response($event.target)"
                >
                  Tanggapi!
                </button>
              </th>
            </tr>
            <tr>
              <th>Spicy Yakiniku</th>
              <th>Asta</th>
              <th>11-29-2024 01:25 PM</th>
              <th>
                <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
              </th>
              <th>Tempat Kotor</th>
              <th>
                <button
                  class="respon-btn btn-small blue-300 bold sm"
                  @click="popup.report_response($event.target)"
                >
                  Tanggapi!
                </button>
              </th>
            </tr>
            <tr class="done">
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
