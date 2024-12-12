import { ref, inject } from 'vue'
import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import { useReports } from './reports'
const reportStore = useReports()

export const usePopup = defineStore('popup', () => {
  const popUpResponseClick = ref(false)
  const endpointDelete = ref(null)
  let currentTargetButtonTanggapi = ref(null)

  const report_response = (target) => {
    currentTargetButtonTanggapi.value = target
    document.getElementById('popup-response-click').style.display = 'block'
  }
  const closePopup = (target) => {
    const parentElement = target.parentElement

    // Periksa apakah parentElement ada dan apakah memiliki class 'popup-wrap'
    if (parentElement) {
      if (parentElement.classList.contains('popup-wrap')) {
        parentElement.style.display = 'none'
      } else {
        // Jika belum ditemukan, panggil rekursi pada parentElement
        closePopup(parentElement)
      }
    }
  }
  const redirectToReport = async (target, reportStatus, idFeedback) => {
    if (!currentTargetButtonTanggapi.value) return // Pastikan tombol target ada

    try {
      const response = await axiosInstance.patch(`/admin/feedback/${idFeedback}`, {
        report_status: reportStatus,
      })

      if (response.data.status === 'success') {
        await reportStore.fetchAll()
        closePopup(target)
        // Redirect ke halaman utama
      } else {
        throw new Error(response.data.message || 'Login failed')
      }
    } catch (error) {
      console.error(error.message)
      throw new Error(error.response?.data?.error || error.message)
    }
  }

  const logout_popup = () => {
    document.getElementById('popup-logout-click').style.display = 'block'
  }

  const logout = () => alert('ok')

  const edit_popup = () => {
    document.getElementById('popup-edit-click').style.display = 'block'
  }

  const delete_popup = (endpoint) => {
    endpointDelete.value = endpoint
    document.getElementById('popup-delete-click').style.display = 'block'
  }

  const executeEndpointDelete = async (targetPopup) => {
    try {
      console.log(endpointDelete.value)
      const response = await axiosInstance.delete(endpointDelete.value)
      console.log(response)
      alert(response.data.message)
      window.location.reload()
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    } finally {
      closePopup(targetPopup)
    }
  }

  const report_counts_popup = () => {
    document.getElementById('popup-report-click').style.display = 'block'
  }

  return {
    executeEndpointDelete,
    popUpResponseClick,
    report_response,
    redirectToReport,
    closePopup,
    logout_popup,
    logout,
    edit_popup,
    delete_popup,
    report_counts_popup,
  }
})
