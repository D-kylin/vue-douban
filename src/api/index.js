const API_CONFIG = {
    // 电影条目信息 GET
    subject: 'http://api.douban.com/v2/movie/subject/',
    // 影人条目信息 GET
    celebrity: 'http://api.douban.com/v2/movie/celebrity/:id',
    // 电影条目搜索 GET
    search: 'http://api.douban.com/v2/movie/search?q={text}',
    // 北美票房榜 GET
    us_box: 'http://api.douban.com/v2/movie/us_box',
    // Top250 GET
    top: 'http://api.douban.com/v2/movie/top250',
    // 正在上映 GET
    theater: 'http://api.douban.com/v2/movie/in_theaters',
    // 即将上映 GET
    coming: 'http://api.douban.com/v2/movie/coming_soon'


    // 以下api由于需要通过审核豆瓣才能使用
    // 电影条目剧照 GET 
    // subject_photos: '/v2/movie/subject/:id/photos',
    // 电影条目影评列表 GET
    // subject_reviews: '/v2/movie/subject/:id/reviews',
    // 电影条目短评列表 GET
    // subject_comments: '/v2/movie/subject/:id/comments',
    // 影人作品 GET
    // celebrity_works: '/v2/movie/celebrity/:id/works',
    // 影人剧照 GET
    // celebrity_photos: '/v2/movie/celebrity/:id/photos',
    // 周榜 GET
    // weekly: '/v2/movie/weekly',
    // 新片榜 GET
    // new_movies: '/v2/movie/new_movies',
}

export default API_CONFIG
