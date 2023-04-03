import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'myStorage', // 自定义键名，用于存储在 localStorage 中
      paths: ['login'], // 要持久化的状态路径，可以是多个 如果要持久化index.js中的数据，不能直接写"index"，要使用index.js中的state的某个值
    })(store)
  })
}
