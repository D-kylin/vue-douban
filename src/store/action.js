import {anualList, comingList, hotList} from 'src/service/getData'

export default {
	async LOAD_2017_BANGDAN({commit}) {
        let res = await anualList();
        console.log(res)
        commit('SET_TOP_LIST', res)
	},

	async LOAD_COMING_LIST({commit}) {
		let res = await comingList()
		console.log(res.data.subjects)
		commit('SET_COMING_LIST', res.data.subjects)
    },
    
    async LOAD_HOT_LIST({ commit }) {
        let res = await hotList()
        commit('SET_HOT_LIST', res.data.subjects)
    }
}
