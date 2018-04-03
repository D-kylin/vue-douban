import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import actions from 'src/store/action'

Vue.use(Vuex)

const state = {
    topList: [],
    comingList: [],
    hotList: []
}

const mutations = {
	SET_TOP_LIST: (state, res) => {
        state.topList = res
    },
    SET_COMING_LIST: (state, res) => {
        state.comingList = res
    },
    SET_HOT_LIST: (state, res) => {
        state.hotList = res
    }
}

export default new Vuex.Store({
	state,
	// getters,
	mutations,
	actions
})