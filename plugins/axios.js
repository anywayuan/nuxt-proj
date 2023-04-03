export default function ({$axios}, inject) {
  // 创建一个新的 axios 实例
  const api = $axios.create()

  // 设置基本 URL
  api.setBaseURL('http://192.168.0.74:90/api/v1/')

  // 设置超时时间
  api.defaults.timeout = 5000

  // 请求拦截器
  api.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  // 响应拦截器
  api.onResponse((response) => {
    console.log('Received response from ' + response.config.url)
    return response
  })

  // 错误处理
  api.onError((error) => {
    console.error('Error occurred during request:', error)
    return Promise.reject(error)
  })

  // 将封装好的 axios 实例注入到 Nuxt 上下文中
  inject('api', api)
}
