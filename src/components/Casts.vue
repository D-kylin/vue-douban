<template>
  <div class="swiper-container" id="swiper-container5">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(item, index) in casts" :key="index">
				<img :src="item.avatars.medium" alt="">
				<div>{{item.name}}</div>
			</div>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
	props: ['casts'],
  mounted: function () {
		new Swiper('#swiper-container5', {
				slidesPerView: 3,
				spaceBetween: 0,
				freeMode: false,
				autoplay: false
		})
	}
}
</script>

<style lang="scss" scoped>
	#swiper-container5 {
		width: 90%;
		height: 180px;
		font-size: 12px;
		text-align: center;
		img {
            width: 90%;
            height: 80%;
		}
	}
</style>




