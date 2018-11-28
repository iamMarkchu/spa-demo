import Vue from 'vue'
import Vuex from 'vuex'
import { login, get as getUser } from "./apis/users"
import JwtToken from './utils/jwtToken'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    name: '',
    email: '',
    isAuth: false,

    notiShow: false,
    notiType: 'primary',
    notiText: '',
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload.token
    },
    setName(state, payload) {
      state.name = payload.name
    },
    setEmail(state, payload) {
      state.email = payload.email
    },
    setAuth(state, payload) {
        state.isAuth = payload.isAuth
    },
    setNoti(state, payload) {
        state.notiShow = payload.notiShow
        state.notiType = payload.notiType
        state.notiText = payload.notiText
    }
  },
  actions: {
    loginRequest({ commit,dispatch }, payload) {
        return login(payload).then(response => {
          let token = response.data.data.access_token
          console.log('success')
          commit('setToken', {token: token})
          JwtToken.setToken(token)
          dispatch('setAuthUser')
        })
    },
    setAuthUser({commit}) {
        getUser().then(response => {
          console.log(response)
          commit('setName', {name: response.data.name})
          commit('setEmail', {email: response.data.email})
          commit('setAuth', {isAuth: true})
        })
    },
    delAuthUser({commit}) {
        commit('setName', {name: ''})
        commit('setEmail', {email: ''})
        commit('setAuth', {isAuth: false})
    },
    logoutRequest({commit, dispatch}) {
        JwtToken.delToken()
        dispatch('delAuthUser')
        commit('setToken', {token: ''})
        commit('setNoti', {
            notiShow: true,
            notiType: 'success',
            notiText: '您已成功退出！',
        })
    },
    showNotification({commit}, payload) {
      commit('setNoti', payload)
    }
  }
})
