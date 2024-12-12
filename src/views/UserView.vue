<script setup>
import { onMounted, ref } from 'vue'
import Sidebar from '@/components/Sidebar.vue'

import Logout from '@/components/PopUp/Logout.vue'
import Edit from '@/components/PopUp/Edit.vue'
import Delete from '@/components/PopUp/Delete.vue'
import SkeletonLoading from '@/components/SkeletonLoading.vue'
import axiosInstance from '@/plugins/axios'
import { usePopup } from '@/stores/popup'
const popup = usePopup()

const loading = ref(true)
const users = ref([])
const user = ref({})
const loadingUser = ref(true)

const getUsers = async () => {
  try {
    const result = await axiosInstance.get('/users')
    console.log(result.data.data)
    users.value = result.data.data
    loading.value = false
  } catch (error) {
    console.error('Error fetching data:', error.message)
    loading.value = false
  }
}

const handleEdit = async (id) => {
  loadingUser.value = true
  popup.edit_popup()
  try {
    const response = await axiosInstance.get(`/users/${id}`)
    user.value = response.data.data
    console.log(user.value)
  } catch (error) {
    console.log(error.message)
  } finally {
    loadingUser.value = false
  }
}
onMounted(() => {
  getUsers()
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
                  <tr v-if="users.length == 0">
                    <th colspan="4">Data masih kosong</th>
                  </tr>

                  <tr v-for="(user, i) in users" :key="i">
                    <th>{{ user.name }}</th>
                    <th>{{ user.email }}</th>
                    <th>{{ user.role }}</th>
                    <th class="aksi-cell">
                      <div class="wrapper">
                        <button
                          class="respon-btn btn-small red-300 bold sm"
                          @click="popup.delete_popup(`/admin/users/${user.id}`)"
                        >
                          Delete
                        </button>
                        <button
                          class="respon-btn btn-small green-300 bold sm"
                          @click="handleEdit(user.id)"
                        >
                          Edit
                        </button>
                      </div>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div v-if="users.length > 20" class="nav-bot primary-500">
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
              <SkeletonLoading height="30px" v-if="loadingUser" />
              <input v-else type="text" name="username" disabled v-model="user.name" />
            </div>
            <div class="input medium lg">
              Email
              <SkeletonLoading height="40px" v-if="loadingUser" />
              <input v-else v-model="user.email" disabled type="email" name="email" />
            </div>
            <div class="input input-big medium lg">
              Role
              <SkeletonLoading height="40px" v-if="loadingUser" />
              <div v-else class="wrapper base">
                <input
                  v-model="user.role"
                  type="radio"
                  id="vendor-role"
                  name="role"
                  value="vendor"
                />
                <label for="vendor-role">Vendor</label><br />
                <input
                  v-model="user.role"
                  type="radio"
                  id="consumer-role"
                  name="role"
                  value="customer"
                />
                <label for="consumer-role">Customer</label><br />
              </div>
            </div>
          </div>
        </div>
        <div class="button-wrap">
          <button class="btn-medium green-300 bold xl" id="terima" @click="popup.logout()">
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
