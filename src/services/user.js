import axios from 'axios';
// import store from '@/store'

const http = 'http://localhost:8000/api';
import { getCookieByName, writeCookie } from '@/resources/utilities.js';

export const getBookmark = async () => {
    const access_token = getCookieByName('token');
    const response = await axios.get(`${http}/users/savedMessages`, {
        headers:{
            'token': `${access_token}`
        }
    }).catch((error) => {
        console.error(error);
        return false;
    });
    return response.data;
  };

export const postBookmark = async (data) => {
    const access_token = getCookieByName('token');
    const token = await axios.post(`${http}/users/operation`, data , {
      headers:{
        'token': `${access_token}`
      }
    }) 
    .catch((error) => {
      console.error(error);
      return false;
    })  
}
export const userOperation = async (data) => {
    const access_token = getCookieByName('token');
    const token = await axios.post(`${http}/users/operation`, data , {
      headers:{
        'token': `${access_token}`
      }
    }) 
    .catch((error) => {
      console.error(error);
      return false;
    })  
}
export const getProfileUser = async () => {
    const access_token = getCookieByName('token');
    const response = await axios.get(`${http}/users/profile`, {
        headers:{
            'token': `${access_token}`
        }
    }).catch((error) => {
        console.error(error);
        return false;
    });
    return response.data;
};

export const getSetting = async () => {
    const access_token = getCookieByName('token');
    const response = await axios.get(`${http}/users/profileSetting`, {
        headers:{
            'token': `${access_token}`
        }
    }).catch((error) => {
        console.error(error);
        return false;
    });
    return response.data;
};

export const login = async (data) => {
    const token = await axios.post(`${http}/login`, data)
    .then((res) => {
        writeCookie('token', res.data.token);
    })
    .catch((error) => {
        return error.response.status
    })
    return token
};

export const signup = async (data) => {
  const res = await axios.post(`${http}/register`, data)
  .then((res) => {
      writeCookie('token', res.data.token);
  })
  .catch((error) => {
    return error.response.status
  })
  return res;
};

export const search = async (data) => {
  const res = await axios.get(`${http}/search?query=${data}`)
  .then((res) => {
      return res.data;
  })
  .catch((error) => {
    return error.response.status
  })
  return res;
}


export default { getBookmark, login, getSetting, postBookmark, userOperation , signup, search };