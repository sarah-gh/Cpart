import axios from 'axios';
import { simulateRequest, writeCookie } from '@/resources/utilities.js';
const http = 'http://localhost:8000/api';

export const login = async () => {
  await simulateRequest(2000);
  // this is what server gives us
  const token = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';
  writeCookie('token', token);
  return { token };
};

export const getProfile = async () => {
  console.log('getting profile');
  const response = await axios.get('/api/profile');
  console.log(response);

  return response.data;
};

export const getArticles = async () => {
    // console.log('getting articles');
    const response = await axios.get(`${http}/posts`);
    console.log('getting articles');
    console.log(response);
  
    return response.data;
  };

export default { login, getProfile, getArticles };