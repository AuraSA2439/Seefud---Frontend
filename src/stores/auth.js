import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axiosInstance from '@/plugins/axios'
import { jwtDecode } from 'jwt-decode'
// Correct import for jwt-decode

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(false)
  const user = ref(null)
  const router = useRouter()

  const checkTokenExpiry = () => {
    const tokenExpiry = localStorage.getItem('tokenExpiry')
    if (tokenExpiry && new Date().getTime() > parseInt(tokenExpiry, 10)) {
      logout()
      return false
    }
    return true
  }

  const login = async (email, password) => {
    try {
      // Request ke API untuk login
      const response = await axiosInstance.post('/admin/auth/login', {
        email,
        password,
      })

      if (response.data.status === 'success') {
        const { token } = response.data.data
        const expiryTime = new Date().getTime() + 60 * 60 * 1000 // Contoh: 1 jam (kustomisasi sesuai backend)

        // Simpan token dan waktu expire di localStorage
        localStorage.setItem('token', token)
        localStorage.setItem('tokenExpiry', expiryTime.toString())

        // Decode token untuk mendapatkan data pengguna
        const decodedToken = jwtDecode(token)

        // Update state
        isAuthenticated.value = true
        user.value = {
          id: decodedToken.id,
          name: decodedToken.name,
          email: decodedToken.email,
        }

        // Redirect ke halaman utama
        router.push('/')
      } else {
        throw new Error(response.data.message || 'Login failed')
      }
    } catch (error) {
      console.error(error.message)
      throw new Error(error.response?.data?.error || error.message)
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiry')
    isAuthenticated.value = false
    user.value = null
    router.push('/auth/login')
  }

  const initializeAuth = () => {
    const token = localStorage.getItem('token')
    if (token && checkTokenExpiry()) {
      // Decode token untuk mendapatkan data pengguna
      const decodedToken = jwtDecode(token)

      isAuthenticated.value = true
      user.value = {
        id: decodedToken.id,
        name: decodedToken.name,
        email: decodedToken.email,
      }
    } else {
      logout()
    }
  }

  initializeAuth()

  return {
    isAuthenticated,
    user,
    login,
    logout,
  }
})
