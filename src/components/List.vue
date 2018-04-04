<template>
	<div class="swiper-container" id="swiper-container2">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in comingList" :key="index">
				<img :src="item.images.small" alt="">
                <div>{{item.title}}</div>
			</div>
		</div>
		<div class="swiper-pagination" id="swiper-pagination2"></div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'
import 'swiper/dist/css/swiper.css'
export default {
	name: 'list',
	computed: mapState({
		comingList: state => state.comingList
	}),
	mounted: function () {
		this.$store.dispatch('LOAD_COMING_LIST')
		new Swiper('#swiper-container2', {
                slidesPerView: 3,
                spaceBetween: 0,
                freeMode: false,
                autoplay: false
			})
	}
}
</script>

<style lang="scss" scoped>
	#swiper-container2 {
		width: 90%;
		height: 180px;
        font-size: 12px;
        img {
            width: 90%;
            height: 80%;
        }
	}
</style>

