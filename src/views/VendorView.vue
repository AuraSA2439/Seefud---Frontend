<script setup>
import Sidebar from '@/components/Sidebar.vue'

import ResponseClick from '@/components/PopUp/ResponseClick.vue'
import ReportClick from '@/components/PopUp/ReportClick.vue'
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
                    <th>Deksripsi</th>
                    <th>Foto</th>
                    <th>Lokasi</th>
                    <th class="count-cell">Report(s)</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody id="data" class="sm white">
                  <tr>
                    <th>Spicy Yakiniku</th>
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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
                    <th>Cheap bento box foods</th>
                    <th>
                      <img src="/assets/images/foto-vendor.jpg" alt="vendor's photo" />
                    </th>
                    <th>Sukapura, Dayeuhkolot, Bandung Regency, West Java 40267</th>
                    <th class="count-cell">
                      <a href="#" @click="popup.report_counts_popup()">3</a>
                    </th>
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

    <ReportClick />
    <ResponseClick />
    <Logout />
    <Delete />
    <edit>
      <div class="popup primary-500 popup-edit" id="popup-edit-vendor">
        <button class="close" @click="popup.closePopup($event.target)">
          <span class="material-icons">close</span>
        </button>
        <div class="form">
          <div class="separete">
            <div class="input medium lg">
              Nama Vendor
              <input type="text" name="username" disabled="disabled" placeholder="Nama User" />
            </div>
            <div class="input input-big medium lg">
              Deksripsi
              <textarea
                name="comment"
                id="comment"
                disabled="disabled"
                placeholder="Deksripsi"
              ></textarea>
            </div>
            <div class="input medium lg">
              Foto Vendor
              <div class="wrapper base" id="foto_vendor">
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
              Lokasi
              <input type="text" name="email" disabled="disabled" placeholder="Lokasi Vendor" />
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
