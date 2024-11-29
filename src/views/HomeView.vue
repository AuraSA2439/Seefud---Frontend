<script setup>
import Sidebar from '@/components/Sidebar.vue'

import ResponseClick from '@/components/PopUp/ResponseClick.vue'
import Logout from '@/components/PopUp/Logout.vue'

import { usePopup } from '@/stores/popup'
const popup = usePopup()
</script>

<template>
  <main>
    <Sidebar />
    <div class="main">
      <div class="frame white">
        <div class="info">
          <div class="status yellow-300" id="total_user">
            <div class="title-hor base bold">
              <span class="material-icons">group</span>
              Total User
            </div>
            <div class="stats xl bold">2143</div>
          </div>
          <div class="status red-300" id="total_consumer">
            <div class="title-hor base bold">
              <span class="material-icons">mood</span>
              Total Consumer
            </div>
            <div class="stats xl bold">2143</div>
          </div>
          <div class="status green-300" id="total_vendor">
            <div class="title-hor base bold">
              <span class="material-icons">restaurant</span>
              Total Vendor
            </div>
            <div class="stats xl bold">2143</div>
          </div>
          <div class="status blue-300" id="total_report">
            <div class="title-hor base bold">
              <span class="material-icons">gpp_maybe</span>
              Total Report
            </div>
            <div class="stats xl bold">2143</div>
          </div>
        </div>
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
                    <th>Deksripsi</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody id="data" class="sm white">
                  <tr>
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
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
                    <th>IPC</th>
                    <th>Asta</th>
                    <th>22-11-2024</th>
                    <th>Tempat kotor</th>
                    <th>
                      <button
                        class="respon-btn btn-small blue-300 bold sm"
                        @click="popup.report_response($event.target)"
                      >
                        Tanggapi!
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="nav-bot primary-500">
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
    <ResponseClick />
  </main>
</template>
