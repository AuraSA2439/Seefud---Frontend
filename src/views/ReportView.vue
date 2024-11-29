<script setup>
import Sidebar from '@/components/Sidebar.vue'

import Logout from '@/components/PopUp/Logout.vue'
import Edit from '@/components/PopUp/Edit.vue'
import Delete from '@/components/PopUp/Delete.vue'

import { usePopup } from '@/stores/popup'
const popup = usePopup()
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
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody id="data" class="sm white">
                  <tr>
                    <th>Spicy Yakiniku</th>
                    <th>Asta</th>
                    <th>11-29-2024 01:25 PM</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Tempat Kotor</th>
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup()"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="popup.edit_popup()"
                        >
                          Edit
                        </button>
                      </div>
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
    <Delete />
    <edit>
      <div class="popup primary-500 popup-edit" id="popup-edit-report">
        <button class="close" @click="popup.closePopup($event.target)">
          <span class="material-icons">close</span>
        </button>
        <div class="form">
          <div class="seperate">
            <div class="input medium lg">
              Pelapor
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
