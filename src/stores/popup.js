import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePopup = defineStore('popup', () => {
  const popUpResponseClick = ref(false)
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
  const redirectToReport = (target) => {
    if (!currentTargetButtonTanggapi.value) return // Pastikan tombol target ada

    closePopup(target)

    // Disable button dan tambahkan class done hanya pada elemen yang benar
    currentTargetButtonTanggapi.value.setAttribute('disabled', 'disabled')
    currentTargetButtonTanggapi.value.textContent = 'Selesai'
    const row = currentTargetButtonTanggapi.value.closest('tr') // Pastikan manipulasi baris yang tepat
    if (row) {
      row.classList.add('done')
    }
  }

  const logout_popup = () => {
    document.getElementById('popup-logout-click').style.display = 'block'
  }

  const logout = () => alert('ok')

  const edit_popup = () => {
    document.getElementById('popup-edit-click').style.display = 'block'
  }

  const delete_popup = () => {
    document.getElementById('popup-delete-click').style.display = 'block'
  }

  const report_counts_popup = () => {
    document.getElementById('popup-report-click').style.display = 'block'
  }

  return {
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
