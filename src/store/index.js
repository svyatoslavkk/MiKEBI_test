import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    jsonData: null
  },
  mutations: {
    setJsonData(state, data) {
      state.jsonData = data;
    }
  },
  actions: {
    fetchJsonData({ commit }) {
      return axios.get('./src/services/taskData.json')
        .then(response => {
          commit('setJsonData', response.data);
        })
        .catch(error => {
          console.error('Failed response:', error);
        });
    }
  },
  modules: {},
})