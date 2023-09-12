import Axios from 'axios'
import Swal from 'sweetalert2'

const axios = Axios.create({
  headers: {
    post: {
      // dep: 'client_deb'
    }
  }
})

axios.interceptors.response.use((response) => {
  if (response.status === 204) {
    throw Promise.reject(response)
  } else {
    return response
  }
},
function (err) {
  // if (err.response.status === 401 || err.response.status === 500) {
  //   // window.$cookies.remove('token')
  //   // localStorage.removeItem('profileData')
  //   // router.push({ name: 'register' })
  // }
  if (err.response.status === 403) {
    Swal.fire({
      text: 'عدم دسترسی - شما مسدود شده اید',
      icon: 'error'
    })
  }
  return Promise.reject(err)
})

export default axios
