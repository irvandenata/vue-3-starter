import axios from 'axios'
// import qs from 'qs'
// import router from '@/router'
// import store from '@/store'

const baseURL = "https://qodelight.com/api";
const service = axios.create({
  baseURL,
})

export default service