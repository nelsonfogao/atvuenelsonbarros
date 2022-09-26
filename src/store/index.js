import { createStore } from 'vuex'

export default createStore({
  state: {
    primeiroNome:"Bem",
    ultimoNome:"Vindos",
    favorites:[]
  },
  getters: {
    nomeTodo:function (state){
      return `${state.primeiroNome} ${state.ultimoNome}`
    }
  },
  mutations: {
    UPDATE_FAVORITES(state, payload){
      state.favorites = payload
    }
  },
  actions: {
    addToFavorites(context,payload){
      const favorites = context.state.favorites
      favorites.push(payload)
      context.commit('UPDATE_FAVORITES', favorites)
    }
  },
  modules: {
  }
})
