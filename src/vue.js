/**
 * Created by yanpeipan on 2017/2/23.
 */
import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default instance
