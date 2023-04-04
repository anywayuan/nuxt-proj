import api from '~/api'

export const state = () => ({
  userInfo: {}
})

export const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

export const actions = {
  async loginFetch({commit}, payload) {
    const apiInstance = api(this.$api)
    const resources = await apiInstance.login(payload)
    commit('SET_USER_INFO', resources.data)
    return resources
  }
}
