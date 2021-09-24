import axios from 'axios';
import store from '@/store'

const http = 'http://localhost:8000/api';
import { getCookieByName, writeCookie } from '@/resources/utilities.js';

export const getBookmark = async () => {
    const access_token = getCookieByName('token');
    const response = await axios.get(`${http}/users/savedMessages`, {
        headers:{
            'token': `${access_token}`
        }
    });
    console.log('getting Bookmark');
    console.log(response);
    return response.data;
  };

export const getProfileUser = async () => {
    const access_token = getCookieByName('token');
    const response = await axios.get(`${http}/users/savedMessages`, {
        headers:{
            'token': `${access_token}`
        }
    });
    console.log('getting Bookmark');
    console.log(response);
    return response.data;
};

export const login = async (data) => {
    const token = await axios.post(`${http}/login`, data)
    .then((res) => {
        console.log(res.data);
        writeCookie('token', res.data.token);
    })
    .catch((error) => {
      console.error(error);
    })
};


export default { getBookmark, login };