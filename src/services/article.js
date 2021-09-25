import axios from 'axios';
import { getCookieByName, delete_cookie } from '@/resources/utilities.js';
const http = 'http://localhost:8000/api';

// export const login = async () => {
//   await simulateRequest(2000);
//   // this is what server gives us
//   const token = '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d';
//   writeCookie('token', token);
//   return { token };
// };

// export const getProfile = async () => {
//   console.log('getting profile');
//   const response = await axios.get('/api/profile');
//   console.log(response);

//   return response.data;
// };

export const getArticles = async () => {
    const response = await axios.get(`${http}/posts`);
    console.log('getting articles');
    console.log(response);
  
    return response.data;
  };

export const getSingleArticle = async (id) => {
  const response = await axios.get(
      `${http}/posts/${id}`
  ).then((res) => {
      return res.data; 
  }).catch((err) => {
      console.error(err);
  });
  const other = await axios.get(
          `${http}/posts?userid=${response["0"].userid}&limit=3`
  ).then((res) => {
      return res.data;
  }).catch((err) => {
      console.error(err);
  });
  const comment = await axios.get(
      `${http}/comments/${id}`
  ).then((res) => {
      return res.data; 
  }).catch((err) => {
      console.error(err);
  });
  return [response, other, comment]
}

export const postArticle = async (data) => {
  const access_token = getCookieByName('token');
  const token = await axios.post(`${http}/users/operation`, data , {
    headers:{
      'token': `${access_token}`
    }
  }) 
  .catch((error) => {
    delete_cookie('token');
    console.error(error);

    return false;
  })  
}


export default { getSingleArticle, getArticles };