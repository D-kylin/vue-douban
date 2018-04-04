<template>
	<div class="swiper-container" id="swiper-container3">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in hotList" :key="index">
				<img :src="item.images.small" alt="">
                <div>{{item.title}}</div>
			</div>
		</div>
		<div class="swiper-pagination" id="swiper-pagination3"></div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'
import 'swiper/dist/css/swiper.css'
export default {
	name: 'list',
	computed: mapState({
		hotList: state => state.hotList
	}),
	mounted: function () {
		this.$store.dispatch('LOAD_HOT_LIST')
		new Swiper('#swiper-container3', {
					slidesPerView: 3,
					spaceBetween: 0,
					freeMode: false,
                    autoplay: false
			})
	}
}
</script>
<style lang="scss" scoped>
    #swiper-container3 {
		width: 90%;
		height: 180px;
        font-size: 12px;
        img {
            width: 90%;
            height: 80%;
        }
	}
</style>
