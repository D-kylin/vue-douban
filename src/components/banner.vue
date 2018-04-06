<template>
	<div class="swiper-container" id="swiper-container1">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in topList" :key="index" @click="selectItem(item)">
                <div class="swiper-slide-title">{{item.data.res.subject.title}}</div>
				<img :src="item.data.res.payload['background_img']" alt="">
			</div>
		</div>
		<!-- 如果需要分页器 -->
		<div class="swiper-pagination" id="swiper-pagination1"></div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import { mapState, mapMutations } from 'vuex'
import 'swiper/dist/css/swiper.css'
export default {
	computed: mapState({
		topList: state => state.topList
    }),
    methods: {
        /* 切换路由并跳转到特定电影详情页 */
        selectItem(item) {
            this.$router.push({
                path: `/moive/${item.data.res.subject.id}`
            })
            this.setMovie(item)
            this.$store.dispatch('LOAD_SUBJECT', item.data.res.subject.id)
            console.log(item.data.res.subject)
        },
        ...mapMutations({
            setMovie: 'SET_MOVIE_DETIAL'
        })
    },
	mounted: function () {
        this.$store.dispatch('LOAD_2017_BANGDAN')
		var myswiper = new Swiper('#swiper-container1', {
			slidesPerView: 1,
            spaceBetween: 0,
            freeMode: false,
            loop: true,
            pagination: {
                el: '#swiper-pagination1'
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false
            }
        })
  }
}
</script>
<style lang="scss" scoped>
	#swiper-container1 {
		width: 100%;
        height: 220px;
        position: relative;
        img {
            width: 100%;
            height: 100%;
        }
        #swiper-pagination1 {
            width: 30%;
            position: absolute;
            bottom: 14px;
            left: 70%;
        }
        .swiper-slide {
            position: relative;
            .swiper-slide-title {
                position: absolute;
                bottom: 14px;
                left: 20px;
            }
        }
	}
</style>


