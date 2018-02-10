import axios from 'axios';


axios.defaults.baseURL = 'http://116.62.204.229:8080';

axios.interceptors.request.use(function (config) { // 这里的config包含每次请求的内容
  if (localStorage.policeToken) {
    if (config.url.split('/')[config.url.split('/').length - 1] !== 'login.do') {
      // 给login请求之外的所有请求添加header: token
      config.headers.token = localStorage.policeToken;
    }
  }
  return config;
}, function (err) {
  return Promise.reject(err);
});


export function login(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function setForm(data){
  let result = "?";
  for(let key in data){
    result = result + key+'='+data[key] + '&'
  }
  return result;
}

export function post(url, data) {
  let config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  let params = setForm(data)
  url = url + params;
  return new Promise((resolve, reject) => {
    axios.post(url, data, config)
      .then(response => {
        if (response.data.code == '401') {
          window.location.href = '/login'
          localStorage.removeItem('policeToken');
        } else {
          resolve(response.data);
        }
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function get(url, params) {

  return new Promise((resolve, reject) => {
    axios.get(url, {params: params})
      .then(response => {
        if (response.data.code == '401') {
          // bus.$emit('please_login', response.data.message);
          window.location.href = '/login'
          localStorage.removeItem('policeToken');
        } else {
          resolve(response.data);
        }
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function formDataPost(url, formData) {
  let config = {
    headers: {
      'Content-Type': 'multipart/form-data'  //之前说的以表单传数据的格式来传递fromdata
    }
  };
  return new Promise((resolve, reject) => {
    axios.post(url, formData, config)
      .then(response => {
        if (response.data.code == '401') {
          // bus.$emit('please_login', response.data.message);
          window.location.href = '/#/login'
          localStorage.removeItem('policeToken');
        } else {
          resolve(response.data);
        }
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  login(data){
    return post('/jingwu/account/login.do', data)
  }
}
