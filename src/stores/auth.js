import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

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

  const login = async (username, password) => {
    try {
      // Simulasi API
      if (username === 'user' && password === 'password') {
        const token = 'fake-jwt-token'
        const expiryTime = new Date().getTime() + 60 * 60 * 1000 // 1 hour in milliseconds

        localStorage.setItem('token', token)
        localStorage.setItem('tokenExpiry', expiryTime.toString())
        isAuthenticated.value = true
        user.value = { username }
        router.push('/')
      } else {
        throw new Error('Invalid credentials')
      }
    } catch (error) {
      console.error(error.message)
      throw error
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
    if (localStorage.getItem('token') && checkTokenExpiry()) {
      isAuthenticated.value = true
      user.value = { username: 'user' } // Fetch user info if required
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
