<script setup>
import { onMounted, provide, ref } from 'vue'
import SkeletonLoading from '@/components/SkeletonLoading.vue'
import axiosInstance from '@/plugins/axios'
import Sidebar from '@/components/Sidebar.vue'
import { relativePath } from '@/plugins/mixins'
import ResponseClick from '@/components/PopUp/ResponseClick.vue'
import ReportClick from '@/components/PopUp/ReportClick.vue'
import Logout from '@/components/PopUp/Logout.vue'
import Edit from '@/components/PopUp/Edit.vue'
import Delete from '@/components/PopUp/Delete.vue'

import { usePopup } from '@/stores/popup'
const popup = usePopup()

const loading = ref(true)
const loadingVendorFeedback = ref(true)
const vendors = ref([])
const vendorFeedback = ref([])

const getVendors = async () => {
  try {
    const result = await axiosInstance.get('/vendor')
    console.log(result.data.data)
    vendors.value = result.data.data
    loading.value = false
  } catch (error) {
    console.error('Error fetching data:', error.message)
    loading.value = false
  }
}

const handleGetFeedbackVendor = async (idVendor) => {
  idVendor = parseInt(idVendor)
  loadingVendorFeedback.value = true
  popup.report_counts_popup()
  try {
    const result = await axiosInstance.get(`/admin/vendors/${idVendor}/feedback`)
    console.log(result.data.data)
    vendorFeedback.value = result.data.data
    loadingVendorFeedback.value = false
  } catch (error) {
    console.error('Error fetching data:', error.message)
    loadingVendorFeedback.value = false
  }
}

const reportsById = ref({})
const loadingReportsById = ref(true)
const handleTanggapi = async (eventTarget, idReport) => {
  idReport = parseInt(idReport)
  loadingReportsById.value = true
  popup.report_response(eventTarget)
  try {
    const result = await axiosInstance.get(`/feedback/${idReport}`)
    console.log(result.data.data)
    reportsById.value = result.data.data
  } catch (error) {
    console.log(error.message)
  }
  loadingReportsById.value = false
}
provide('eventButtonTanggapi', handleTanggapi)
onMounted(() => {
  getVendors()
})

const loadingRow = ref(true)
const row = ref({})
const handleEdit = async (id) => {
  loadingRow.value = true
  popup.edit_popup()
  try {
    const response = await axiosInstance.get(`/vendor/${id}`)
    row.value = response.data.data
    console.log(row.value)
  } catch (error) {
    console.log(error.message)
  } finally {
    loadingRow.value = false
  }
}
</script>

<template>
  <main>
    <Sidebar />
    <div class="main">
      <div class="frame white">
        <div class="navigation">
          <div class="title-ver">
            <span class="material-icons">update</span>
            <div class="xl bold">Vendor Data</div>
          </div>
        </div>
        <div class="content">
          <div class="table primary-300">
            <div class="table-wrapper1">
              <table class="main-tab">
                <thead class="medium base white">
                  <tr>
                    <th>Nama Vendor</th>
                    <th>Nama Pemilik Vendor</th>
                    <th>Foto</th>
                    <th>Lokasi</th>
                    <th class="count-cell">Report(s)</th>
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
                  <tr v-if="vendors.length == 0">
                    <th colspan="6">Data masih kosong</th>
                  </tr>
                  <tr v-for="(vendor, i) in vendors" :key="i">
                    <th>{{ vendor.store_name }}</th>
                    <th>{{ vendor.user_name }}</th>
                    <th>
                      <img
                        :src="relativePath('/images/vendor/', vendor.image)"
                        alt="vendor's photo"
                      />
                    </th>
                    <th>{{ vendor.location }}</th>
                    <th class="count-cell">
                      <a href="#" @click="handleGetFeedbackVendor(vendor.id)">{{
                        vendor.total_feedback
                      }}</a>
                    </th>
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup(`/admin/vendors/${vendor.id}`)"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="handleEdit(vendor.id)"
                        >
                          Edit
                        </button>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="vendors.length > 20" class="nav-bot primary-500">
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

    <ReportClick :loading="loadingVendorFeedback" :reports="vendorFeedback" />
    <ResponseClick :report="reportsById" :loading="loadingReportsById" />
    <Logout />
    <Delete />
    <edit>
      <div class="popup primary-500 popup-edit" style="height: fit-content" id="popup-edit-vendor">
        <button class="close" @click="popup.closePopup($event.target)">
          <span class="material-icons">close</span>
        </button>
        <div class="form">
          <div class="separete">
            <div class="input medium lg">
              Nama Vendor
              <SkeletonLoading v-if="loadingRow" height="30px" />
              <input
                v-else
                v-model="row.store_name"
                type="text"
                name="username"
                disabled="disabled"
                placeholder="Nama User"
              />
            </div>
            <div class="input input-big medium lg">
              Deksripsi
              <SkeletonLoading v-if="loadingRow" height="60px" />
              <textarea
                v-else
                name="comment"
                id="comment"
                disabled="disabled"
                placeholder="Deksripsi"
                v-model="row.description"
              >
              </textarea>
            </div>
            <div class="input medium lg">
              Foto Vendor
              <div class="wrapper base" id="foto_vendor">
                <SkeletonLoading v-if="loadingRow" height="40px" />
                <img
                  style="max-width: 50%; object-fit: cover; aspect-ratio: 16/9"
                  v-else
                  :src="relativePath('/images/vendor/', row.image)"
                  alt=""
                />
              </div>
            </div>
            <div class="input medium lg">
              Lokasi
              <SkeletonLoading v-if="loadingRow" height="30px" />
              <input
                v-model="row.location"
                type="text"
                name="email"
                disabled="disabled"
                placeholder="Lokasi Vendor"
              />
            </div>
          </div>
        </div>
        <div class="button-wrap">
          <button
            class="btn-medium green-300 bold xl"
            id="terima"
            @click="popup.redirectToReport()"
          >
            Update
          </button>
          <button class="btn-medium red-300 bold xl" @click="popup.closePopup($event.target)">
            Cancel
          </button>
        </div>
      </div>
    </edit>
  </main>
</template>
