import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(!!localStorage.getItem('token'))
  const user = ref(null)
  const router = useRouter()

  // Simulasi login (gunakan API nyata di proyek sebenarnya)
  const login = async (username, password) => {
    try {
      // Simulasi API
      if (username === 'user' && password === 'password') {
        const token = 'fake-jwt-token'
        localStorage.setItem('token', token)
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
    isAuthenticated.value = false
    user.value = null
    router.push('/auth/login')
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
  }
})
