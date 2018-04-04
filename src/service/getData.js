import axios from 'axios'
import API_CONFIG from 'src/api/index'

export const widget = () => axios.get('https://movie.douban.com/ithil_j/activity/movie_annual2017/widget/1')
export const widget2 = () => axios.get('https://movie.douban.com/ithil_j/activity/movie_annual2017/widget/2')
export const widget3 = () => axios.get('https://movie.douban.com/ithil_j/activity/movie_annual2017/widget/3')
export const widget4 = () => axios.get('https://movie.douban.com/ithil_j/activity/movie_annual2017/widget/4')
export const widget5 = () => axios.get('https://movie.douban.com/ithil_j/activity/movie_annual2017/widget/5')

//年度榜单
export const anualList = () => {
    return Promise.all([widget(), widget2(), widget3(), widget4(), widget5()])
}

// 即将上映
export const comingList = () => axios.get(API_CONFIG.coming)

// 正在热映
export const hotList = () => axios.get(API_CONFIG.theater)

//tog250榜
export const top250List = () => axios.get(API_CONFIG.top)
