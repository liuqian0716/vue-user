/**
 * Created by yanpeipan on 2017/2/23.
 */
import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://api.example.com'
// axios.defaults.headers.common['Authorization'] = 'xxxx'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// // axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('base64')
// axios.defaults.timeout = 5000
const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default instance
