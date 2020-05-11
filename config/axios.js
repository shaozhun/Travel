import axios from 'axios'

// 配置默认的host,假如你的API host是：http://api.htmlx.club
// axios.defaults.baseURL = 'http://api.htmlx.club'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config.url = 'http://api_travel.soaz.xyz' + config.url
  // if (config.method === 'post') {
  //   config.data = { "cityId": localStorage.cityId || '270' }
  // }
  console.log(1, config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
});
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  console.log(2, response)
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
});