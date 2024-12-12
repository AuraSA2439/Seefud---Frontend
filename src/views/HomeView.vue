<script setup>
import Sidebar from '@/components/Sidebar.vue'
import SkeletonLoading from '@/components/SkeletonLoading.vue'
import ResponseClick from '@/components/PopUp/ResponseClick.vue'
import Logout from '@/components/PopUp/Logout.vue'

import { convertTime } from '@/plugins/mixins'

import { ref, onMounted, computed } from 'vue'
import { usePopup } from '@/stores/popup'
import axiosInstance from '@/plugins/axios'

import { useReports } from '@/stores/reports'

const popup = usePopup()

const reportsStore = useReports()

const loadingCounts = ref(true)
const loadingReports = ref(true)
const loadingReportsById = ref(true)
const counts = ref({
  totalUsers: 0,
  totalCustomers: 0,
  totalVendors: 0,
  totalReports: 0,
})

const reportsById = ref({})

const getInfo = async () => {
  try {
    const result = await axiosInstance.get('/admin/counts')

    counts.value = result.data.data // Asumsikan API mengembalikan data sesuai kebutuhan
    loadingCounts.value = false
  } catch (error) {
    console.error('Error fetching data:', error.message)
    loadingCounts.value = false
  }
}
const reports = computed(() => reportsStore.reports)
const getReports = async () => {
  try {
    const result = await reportsStore.fetchAll()

    loadingReports.value = false
  } catch (error) {
    console.error('Error fetching data:', error.message)
    loadingReports.value = false
  }
}

const handleTanggapi = async (eventTarget, idReport) => {
  loadingReportsById.value = true
  popup.report_response(eventTarget)
  try {
    const result = await reportsStore.fetchById(idReport)

    reportsById.value = result
  } catch (error) {
    console.log(error.message)
  }
  loadingReportsById.value = false
}

onMounted(() => {
  getReports()
  getInfo()
})
</script>

<template>
  <main>
    <Sidebar />
    <div class="main">
      <div class="frame white">
        <div class="info">
          <div class="status yellow-300" id="totalUsers">
            <div class="title-hor base bold">
              <span class="material-icons">group</span>
              Total User
            </div>
            <SkeletonLoading v-if="loadingCounts" width="100%" height="20px" borderRadius="4px" />
            <div v-else class="stats xl bold">
              {{ counts.totalUsers }}
            </div>
          </div>
          <div class="status red-300" id="total_consumer">
            <div class="title-hor base bold">
              <span class="material-icons">mood</span>
              Total Consumer
            </div>
            <SkeletonLoading v-if="loadingCounts" width="100%" height="20px" borderRadius="4px" />
            <div v-else class="stats xl bold">
              {{ counts.totalCustomers }}
            </div>
          </div>
          <div class="status green-300" id="totalVendors">
            <div class="title-hor base bold">
              <span class="material-icons">restaurant</span>
              Total Vendor
            </div>
            <SkeletonLoading v-if="loadingCounts" width="100%" height="20px" borderRadius="4px" />
            <div v-else class="stats xl bold">
              {{ counts.totalVendors }}
            </div>
          </div>
          <div class="status blue-300" id="totalReports">
            <div class="title-hor base bold">
              <span class="material-icons">gpp_maybe</span>
              Total Report
            </div>
            <SkeletonLoading v-if="loadingCounts" width="100%" height="20px" borderRadius="4px" />
            <div v-else class="stats xl bold">
              {{ counts.totalReports }}
            </div>
          </div>
        </div>

        <!-- Konten lainnya tetap sama -->
        <div class="navigation">
          <div class="title-ver">
            <span class="material-icons">update</span>
            <div class="xl bold">Latest Reports</div>
          </div>
        </div>
        <div class="content">
          <div class="table primary-300">
            <div class="table-wrapper">
              <table class="main-tab">
                <thead class="medium base white">
                  <tr>
                    <th>Nama Vendor</th>
                    <th>Pelapor</th>
                    <th>Waktu</th>
                    <th>Komentar</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody v-if="loadingReports" class="sm white">
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
                    <th colspan="5">Data masih kosong</th>
                  </tr>
                  <tr v-for="(report, i) in reports" :key="i">
                    <th>{{ report.vendor_name }}</th>
                    <th>{{ report.user_name }}</th>
                    <th>{{ convertTime(report.created_at) }}</th>
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
    <ResponseClick :report="reportsById" :loading="loadingReportsById" />
  </main>
</template>
