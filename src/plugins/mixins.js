export const convertTime = (isoString) => {
  const date = new Date(isoString)

  // Konversi ke Asia/Jakarta
  const options = { timeZone: 'Asia/Jakarta' }
  const localDate = new Date(date.toLocaleString('en-US', options))

  // Format manual ke YYYY-MM-DD HH:mm:ss
  const year = localDate.getFullYear()
  const month = String(localDate.getMonth() + 1).padStart(2, '0')
  const day = String(localDate.getDate()).padStart(2, '0')
  const hours = String(localDate.getHours()).padStart(2, '0')
  const minutes = String(localDate.getMinutes()).padStart(2, '0')
  const seconds = String(localDate.getSeconds()).padStart(2, '0')

  return `${day}-${month}-${year} ${hours}:${minutes}`
}

export const relativePath = (path, filename) => import.meta.env.VITE_API_URL + path + filename

export const encodeUrlFoto = (foto) => foto.split(',').pop() //  fileName akan berisi "feedback_1.jpg"
