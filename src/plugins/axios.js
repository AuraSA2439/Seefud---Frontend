import axios from 'axios'

// Buat instance Axios
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Ganti dengan base URL API-mu
  timeout: 5000, // Waktu timeout (ms)
  headers: {
    'Content-Type': 'application/json',
  },
})

// Tambahkan interceptor untuk menyisipkan token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // Ambil token dari local storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(config)
      }, 500) // Delay selama 2 detik (2000 ms)
    })
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Logging out...')
      // Redirect ke halaman login atau logout user
    }
    return Promise.reject(error)
  },
)

export default axiosInstance
