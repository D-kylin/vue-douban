import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import actions from 'src/store/action'
// import getters from 'src/store/getters'

import TOPLISTCOMMENT from 'src/store/toplistcomment'

Vue.use(Vuex)

const state = {
    topList: [],
    topListComment: TOPLISTCOMMENT,
    subject: [],
    comingList: [],
    hotList: [],
    top250List: [],
    movieDetial: {}
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
    },
    SET_TOP250_LIST: (state, res) => {
        state.top250List = res
    },
    SET_MOVIE_DETIAL: (state, currentMovie) => {
        state.movieDetial = currentMovie
    },
    SET_SUBJECT: (state, data) => {
        state.subject = data
    }
}

export default new Vuex.Store({
	state,
	// getters,
	mutations,
	actions
})