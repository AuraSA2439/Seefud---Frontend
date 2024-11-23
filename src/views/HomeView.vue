<script setup>
import Sidebar from '@/components/Sidebar.vue'

let currentTargetButtonTanggapi = null

const report_response = (target) => {
  currentTargetButtonTanggapi = target
  document.getElementById('popup-response-click').style.display = 'block'
}

const closePopup = () => {
  document.querySelector('.popup-wrap').style.display = 'none'
}

const redirectToReport = () => {
  if (!currentTargetButtonTanggapi) return // Pastikan tombol target ada
  closePopup()

  // Disable button dan tambahkan class done hanya pada elemen yang benar
  currentTargetButtonTanggapi.setAttribute('disabled', 'disabled')
  const row = currentTargetButtonTanggapi.closest('tr') // Pastikan manipulasi baris yang tepat
  if (row) {
    row.classList.add('done')
  }
}
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
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
                        @click="report_response($event.target)"
                      >
                        Tanggapi!
                      </button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            ``
            <div class="nav-bot primary-500"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="popup-wrap" id="popup-response-click">
      <div class="popup primary-500" id="popup-response">
        <button class="close" @click="closePopup()">
          <span class="material-icons">close</span>
        </button>
        <div class="form">
          <div class="seperate">
            <div class="input medium lg">
              Nama Pelapor
              <input type="text" name="consumer" disabled="disabled" placeholder="Nama Pelapor" />
            </div>
            <div class="input medium lg">
              Nama Vendor
              <input
                type="text"
                name="vendor"
                disabled="disabled"
                placeholder="Nama Vendor yang Dilaporkan"
              />
            </div>
            <div class="input input-big medium lg">
              Komentar
              <textarea
                name="comment"
                id="comment"
                disabled="disabled"
                placeholder="Deksripsi"
              ></textarea>
            </div>
          </div>
          <div class="seperate">
            <div class="input medium lg">
              Foto Bukti
              <div class="wrapper base" id="foto_bukti">
                File(s):
                <input
                  type="file"
                  id="consumer_photo"
                  name="bukti"
                  accept=".jpg|.png"
                  disabled="disabled"
                />
              </div>
            </div>
            <div class="input medium lg">
              Rating
              <div class="wrapper sm" id="rating">
                Masukan angka 0.00 sampai 5.00:
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  min="0"
                  max="5"
                  step="0.01"
                  disabled="disabled"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="button-wrap">
          <button class="btn-medium green-300 bold xl" id="terima" @click="redirectToReport()">
            Terima
          </button>
          <button class="btn-medium red-300 bold xl" @click="closePopup()">Tolak</button>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.content table tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
.content table tr.done {
  background-color: #c3c3c3;
}
button[disabled] {
  filter: grayscale(1);
  cursor: not-allowed;
}
</style>
