import axios from 'axios';
import { getCookieByName } from '@/resources/utilities.js';
const http = 'http://localhost:8000/api';

export const getArticles = async () => {
    console.log('Getting')
    const response = await axios.get(`${http}/posts`)
    .catch((err) => {
      console.error(1,err);
    })
  
    return response.data;
  };
export const getArticlesUser = async () => {
    const access_token = getCookieByName('token');
    const response = await axios.get(`${http}/posts`, {
      headers:{
        'token': `${access_token}`
      }
    })
    .catch((err) => {
      console.error(1,err);
    })
    return response.data;
};
export const getArticlesUserfollow = async () => {
    const access_token = getCookieByName('token');
    const response = await axios.get(`${http}/followingPosts`, {
      headers:{
        'token': `${access_token}`
      }
    })
    .catch((err) => {
      console.error(1,err);
    })
    return response.data;
}


export const getSingleArticle = async (id) => {
  const response = await axios.get(
      `${http}/posts/${id}`
  ).then((res) => {
      return res.data; 
  }).catch((err) => {
      console.error(err);
  });
  const other = await axios.get(
          `${http}/posts?profileid=${response["0"].userid}&limit=3`
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

export const getSingleArticleUser = async (id) => {
  const access_token = getCookieByName('token');
  const response = await axios.get(
      `${http}/posts/${id}` , {
        headers:{
          'token': `${access_token}`
        }
      }
  ).then((res) => {
      return res.data; 
  }).catch((err) => {
      console.error(err);
  });
  const other = await axios.get(
      `${http}/posts?profileid=${response["0"].userid}&limit=3` , {
        headers:{
          'token': `${access_token}`
        }
      }
  ).then((res) => {
      return res.data;
  }).catch((err) => {
      console.error(err);
  });
  const comment = await axios.get(
      `${http}/comments/${id}` , {
        headers:{
          'token': `${access_token}`
        }
      }
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
    console.error(error);

    return false;
  })  
}


export default { getSingleArticle, getArticles, getArticlesUser, getSingleArticleUser, getArticlesUserfollow };