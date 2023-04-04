export default ($api)=>{
  return {
    // 账号密码登录、企业登录
    login: async (payload) => {
      return await $api.$post('/users/login', payload)
    },
    // 获取验证码
    sendSms: async (query) => {
      return await $api.$get('/users/sendsms', {params: query})
    },
    // 手机验证码登录
    smsLogin: async (data) => {
      return await $api.$post('/users/smslogin', data)
    },
    // 注册账号
    register: async (data) => {
      return await $api.$post('/users/register', data)
    }
  }
}
