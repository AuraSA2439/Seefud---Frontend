<script setup>
import { onMounted, ref } from 'vue'
import SkeletonLoading from '@/components/SkeletonLoading.vue'
import axiosInstance from '@/plugins/axios'
import { convertTime, encodeUrlFoto, relativePath } from '@/plugins/mixins'
import Sidebar from '@/components/Sidebar.vue'

import Logout from '@/components/PopUp/Logout.vue'
import Edit from '@/components/PopUp/Edit.vue'
import Delete from '@/components/PopUp/Delete.vue'

import { usePopup } from '@/stores/popup'
const popup = usePopup()

const loading = ref(true)
const reports = ref([])

const getReports = async () => {
  try {
    const result = await axiosInstance.get('/feedback')
    console.log(result.data.data)
    reports.value = result.data.data
    loading.value = false
  } catch (error) {
    console.error('Error fetching data:', error.message)
    loading.value = false
  }
}

const reportsById = ref({})
const loadingReportsById = ref(true)

const handleEdit = async (idReport) => {
  idReport = parseInt(idReport)
  loadingReportsById.value = true
  popup.edit_popup()
  try {
    const result = await axiosInstance.get(`/feedback/${idReport}`)
    console.log(result.data.data)
    reportsById.value = result.data.data
  } catch (error) {
    console.log(error.message)
  } finally {
    loadingReportsById.value = false
  }
}

onMounted(() => {
  getReports()
})
</script>

<template>
  <main>
    <Sidebar />
    <div class="main">
      <div class="frame white">
        <div class="navigation">
          <div class="title-ver">
            <span class="material-icons">update</span>
            <div class="xl bold">Report Data</div>
          </div>
        </div>
        <div class="content">
          <div class="table primary-300">
            <div class="table-wrapper1">
              <table class="main-tab">
                <thead class="medium base white">
                  <tr>
                    <th>Nama Vendor</th>
                    <th>Pelapor</th>
                    <th>Waktu</th>
                    <th>Foto</th>
                    <th>Komentar</th>
                    <th>Status</th>
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
                <tbody v-else id="data" class="sm white">
                  <tr v-if="reports.length == 0">
                    <th colspan="7">Data masih kosong</th>
                  </tr>
                  <tr v-for="(report, i) in reports" :key="i">
                    <th>{{ report.vendor_name }}</th>
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
                      <button v-if="report.report_status == 1" class="btn-small bold-sm green-300">
                        Diterima
                      </button>
                      <button v-if="report.report_status == 0" class="btn-small bold-sm red-300">
                        Ditolak
                      </button>
                      <span v-if="report.report_status == null"> Belum Direspon </span>
                    </th>
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          @click="popup.delete_popup(`/feedback/${report.id}`)"
                          class="respon-btn btn-small red-300 bold sm"
                        >
                          Delete</button
                        ><button
                          @click="handleEdit(report.id)"
                          class="respon-btn btn-small green-300 bold sm"
                        >
                          Edit
                        </button>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="reports.length > 20" class="nav-bot primary-500">
              <div class="wrapper">
                <span class="material-icons">chevron_left</span>
                <div class="page-number">
                  <div class="icon-number bold xs active">1</div>
                  <div class="icon-number bold xs">2</div>
                  <div class="icon-number bold xs">3</div>
                  <div class="icon-number bold xs">4</div>
                  <div class="icon-number bold xs">5</div>
                </div>
                <span class="material-icons">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Logout />
    <Delete />
    <edit>
      <div class="popup primary-500 popup-edit" id="popup-edit-report">
        <button class="close" @click="popup.closePopup($event.target)">
          <span class="material-icons">close</span>
        </button>
        <div class="form">
          <div class="seperate">
            <div class="input medium lg">
              Nama Pelapor
              <SkeletonLoading v-if="loadingReportsById" width="100%" height="20px" />
              <input
                v-else
                disabled
                :value="reportsById?.user_name"
                type="text"
                name="consumer"
                placeholder="Nama Pelapor"
              />
            </div>
            <div class="input medium lg">
              Nama Vendor
              <SkeletonLoading v-if="loadingReportsById" width="100%" height="20px" />
              <input
                v-else
                disabled
                type="text"
                name="vendor"
                placeholder="Nama Vendor yang Dilaporkan"
                :value="reportsById?.vendor_name"
              />
            </div>
            <div class="input input-big medium lg">
              Komentar
              <SkeletonLoading v-if="loadingReportsById" width="100%" height="100px" />
              <textarea
                v-else
                disabled
                name="comment"
                id="comment"
                placeholder="Deksripsi"
                v-text="reportsById?.comment"
              ></textarea>
            </div>
          </div>
          <div class="seperate">
            <div class="input medium lg">
              Foto Bukti
              <SkeletonLoading v-if="loadingReportsById" width="100%" height="40px" />
              <div v-else class="wrapper base" id="foto_bukti">
                <img
                  v-if="reportsById?.foto"
                  :src="relativePath('/images/feedback/', encodeUrlFoto(reportsById?.foto))"
                  alt="vendor's photo"
                />
                <span v-else>Tidak ada foto</span>
              </div>
            </div>
            <div class="input medium lg">
              Rating
              <div class="wrapper sm" id="rating">
                <SkeletonLoading v-if="loadingReportsById" width="100%" height="20px" />
                <input
                  v-else
                  disabled
                  :value="reportsById?.rating"
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
        <div class="button-wrap">
          <button
            class="btn-medium green-300 bold xl"
            id="terima"
            @click="popup.redirectToReport()"
          >
            Terima
          </button>
          <button class="btn-medium red-300 bold xl" @click="popup.closePopup($event.target)">
            Tolak
          </button>
        </div>
      </div>
    </edit>
  </main>
</template>
