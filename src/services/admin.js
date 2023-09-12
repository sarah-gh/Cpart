import axios from '@/plugins/axios.plugin.js'
import { getCookieByName } from '@/resources/utilities.js'

const http = 'http://localhost:8000/api'

export const blockUser = async (data) => {
  const accessToken = getCookieByName('token')
  const response = await axios.post(`${http}/admin/blockUser`, data, {
    headers: {
      token: `${accessToken}`
    }
  }).catch((error) => {
    console.error(error)
    return false
  })
  return response.data
}

export const unblockUser = async (data) => {
  const accessToken = getCookieByName('token')
  const response = await axios.post(`${http}/admin/unblockUser`, data, {
    headers: {
      token: `${accessToken}`
    }
  }).catch((error) => {
    console.error(error)
    return false
  })
  return response.data
}

export const deleteComment = async (data) => {
  const accessToken = getCookieByName('token')
  const response = await axios.post(`${http}/admin/deleteComment`, data, {
    headers: {
      token: `${accessToken}`
    }
  }).catch((error) => {
    console.error(error)
    return false
  })
  return response.data
}
