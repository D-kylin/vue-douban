import { anualList, comingList, hotList, top250List, subjectData} from 'src/service/getData'

export default {
	async LOAD_2017_BANGDAN({commit}) {
        let res = await anualList();
        // console.log(res)
        commit('SET_TOP_LIST', res)
	},

	async LOAD_COMING_LIST({commit}) {
		let res = await comingList()
		// console.log(res.data.subjects)
		commit('SET_COMING_LIST', res.data.subjects)
    },
    
    async LOAD_HOT_LIST({ commit }) {
        let res = await hotList()
        commit('SET_HOT_LIST', res.data.subjects)
        console.log(res.data.subjects)
    },

    async LOAD_TOP250_LIST({ commit }) {
        let res = await top250List()
        // console.log('top250', res.data.subjects)
        commit('SET_TOP250_LIST', res.data.subjects)
    },

    async LOAD_SUBJECT({ commit }, id) {
        let res = await subjectData(id)
        console.log(res.data)
        commit('SET_SUBJECT', res.data)
    }
}
