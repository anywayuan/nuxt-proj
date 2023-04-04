<template>
  <div>
    <div style="display: flex;gap: 0 30px;">
      <ul>
        <li v-for="item in hotList.data" :key="item.id">{{ item.name }}</li>
      </ul>
      <ul>
        <li v-for="item in rankList.data" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <button @click="handleButton(1)">login</button>
    <button @click="handleButton(2)">logout</button>
    <h1 v-if="userInfo && userInfo.company && userInfo.company.length > 0">
      {{ userInfo.company[0].name }}
    </h1>
  </div>
</template>

<script>
import api from '~/api'
import { mapActions, mapMutations, mapState } from 'vuex'

async function fetchData(apiInstance) {
  const getHotList = apiInstance.getPluginList({order_by: 1})
  const getRankList = apiInstance.getPluginList({order_by: 3})
  const getCategory = apiInstance.getCategory()

  const [hotList, rankList, categoryList] = await Promise.all([getHotList, getRankList, getCategory])
  return {
    hotList: hotList.data,
    rankList: rankList.data,
    categoryList: categoryList.data
  }
}

export default {
  name: 'IndexPage',
  async asyncData({app}) {
    const apiInstance = api(app.$api)
    return await fetchData(apiInstance)
  },
  data() {
    return {
      isShow: false,
    }
  },
  computed: {
    ...mapState('login', ['userInfo'])
  },
  watch: {
    async isShow(newVal) {
      if (newVal) {
        const apiInstance = api(this.$api)
        const newData = await fetchData(apiInstance)
        Object.assign(this.$data, newData)
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    ...mapMutations('login', ['SET_USER_INFO']),
    ...mapActions('login', ['loginFetch']),
    async handleButton(type) {
      if (type === 1) {
        const params = {
          mobile: 123456,
          password: 111111
        }
        try {
          const res = await this.loginFetch(params)
          if (res.code === 200) {
            console.log(res)
          }
        } catch (e) {
          console.log(e)
        }
        return
      }
      // log out
      this.SET_USER_INFO({})
    }
  }
}
</script>
