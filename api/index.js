export default function ($api) {
  return {
    // 获取插件列表
    getPluginList: async (query) => {
      return await $api.$get('/users/plugin/crxlist', {params: query})
    },
    // 查看更多 --->  获取分类
    getCategory: async (query) => {
      return await $api.$get('/users/plugin/category', {params: query})
    },
    // 获取分组列表 「 首页中除去热门和排行榜剩下的 」
    getGroupList: async (query) => {
      return await $api.$get('/users/plugin/groupcategory', {params: query})
    },
    // 获取插件详情
    getPluginInfo: async (query) => {
      return await $api.$get('/users/plugin/crxinfo', {params: query})
    },
    // 获取相似插件列表
    getSimilarPluginList: async (query) => {
      return await $api.$get('/users/plugin/crxlike', {params: query})
    },
    // 添加插件
    installPlugin: async (query) => {
      return await $api.$get('/users/plugin/install', {params: query})
    },
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
