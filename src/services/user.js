import axios from 'axios'
import { getCookieByName, writeCookie } from '@/resources/utilities.js'
// import store from '@/store'

const http = 'http://localhost:8000/api'

export const getBookmark = async () => {
  const accessToken = getCookieByName('token')
  const response = await axios.get(`${http}/users/savedMessages`, {
    headers: {
      token: `${accessToken}`
    }
  }).catch((error) => {
    console.error(error)
    return false
  })
  return response.data
}

export const postBookmark = async (data) => {
  const accessToken = getCookieByName('token')
  await axios.post(`${http}/users/operation`, data, {
    headers: {
      token: `${accessToken}`
    }
  })
    .catch((error) => {
      console.error(error)

      return false
    })
}
export const userOperation = async (data) => {
  const accessToken = getCookieByName('token')
  console.log(data)
  await axios.post(`${http}/users/operation`, data, {
    headers: {
      token: `${accessToken}`
    }
  })
    .catch((error) => {
      console.error(error)
      return false
    })
}
export const getProfileUser = async () => {
  const accessToken = getCookieByName('token')
  const response = await axios.get(`${http}/users/profile`, {
    headers: {
      token: `${accessToken}`
    }
  }).catch((error) => {
    console.error(error)
    return false
  })
  // console.log('getting Bookmark');
  // console.log(response);
  return response.data
}

export const getSetting = async () => {
  const accessToken = getCookieByName('token')
  const response = await axios.get(`${http}/users/profileSetting`, {
    headers: {
      token: `${accessToken}`
    }
  }).catch((error) => {
    console.error(error)
    return false
  })
  return response.data
}

export const login = async (data) => {
  try {
    const config = {
      method: 'post',
      url: `${http}/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }
    const res = await axios(config)
    writeCookie('token', res.data)
    return res.status
  } catch (error) {
    console.log('\n\n\n\n\nerror login:')
    console.error(error.response.status)
    return error.response.status
  }
}

export const signup = async (data) => {
  try {
    const config = {
      method: 'post',
      url: `${http}/register`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    }
    const res = await axios(config)
    writeCookie('token', res.data)
    return res
  } catch (error) {
    console.log('\n\n\n\n\nerror:')
    console.error(error)
  }
  // const res = await axios.post(`${http}/register`, data)
  //   .then((res) => {
  //     console.log(res.data)
  //     writeCookie('token', res.data.token)
  //   })
  //   .catch((error) => {
  //     return error.response.status
  //   })
  // return res
}

export const search = async (data) => {
  const res = await axios.get(`${http}/search?query=${data}`)
    .then((res) => {
      console.log(res.data)
      return res.data
    })
    .catch((error) => {
      return error.response.status
    })
  return res
}

export default { getBookmark, login, getSetting, postBookmark, userOperation, signup, search }
