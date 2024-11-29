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
            <div class="xl bold">User Data</div>
          </div>
        </div>
        <div class="content">
          <div class="table primary-300">
            <div class="table-wrapper1">
              <table class="main-tab">
                <thead class="medium base white">
                  <tr>
                    <th>Nama User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody id="data" class="sm white">
                  <tr>
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
                    <th>John Doe</th>
                    <th>johndoe@gmail.com</th>
                    <th>Vendor</th>
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
      <div class="popup primary-500 popup-edit" id="popup-edit-user">
        <button class="close" @click="popup.closePopup($event.target)">
          <span class="material-icons">close</span>
        </button>
        <div class="form">
          <div class="separete">
            <div class="input medium lg">
              Nama User
              <input type="text" name="username" disabled placeholder="Nama User" />
            </div>
            <div class="input medium lg">
              Email
              <input type="email" name="email" disabled placeholder="namamu@gmail.com" />
            </div>
            <div class="input input-big medium lg">
              Role
              <div class="wrapper base">
                <input type="radio" id="vendor-role" name="role" value="Vendor" />
                <label for="vendor-role">Vendor</label><br />
                <input type="radio" id="consumer-role" name="role" value="Consumer" />
                <label for="consumer-role">Consumer</label><br />
              </div>
            </div>
          </div>
        </div>
        <div class="button-wrap">
          <button class="btn-medium green-300 bold xl" id="terima" @click="popup.logout()">
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
