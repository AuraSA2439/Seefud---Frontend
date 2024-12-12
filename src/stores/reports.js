import { defineStore } from 'pinia'
import axiosInstance from '@/plugins/axios'
import { ref } from 'vue'

export const useReports = defineStore('reports', () => {
  const reports = ref([])
  const fetchAll = async () => {
    try {
      const result = await axiosInstance.get('/feedback')
      reports.value = result.data.data
    } catch (error) {
      console.error('Error fetching data:', error.message)
      throw new Error(error.response?.data?.error || error.message)
    }
  }

  const fetchById = async (id) => {
    try {
      const result = await axiosInstance.get(`/feedback/${parseInt(id)}`)
      return result.data.data
    } catch (error) {
      console.error('Error fetching data:', error.message)
      throw new Error(error.response?.data?.error || error.message)
    }
  }

  return { reports, fetchAll, fetchById }
})
