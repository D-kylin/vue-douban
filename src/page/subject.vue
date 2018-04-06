<template>
  <div id="movieDetial">
		<header>
			<div class="bgimg">
				<img :src="movieDetial.data.res.payload['background_img']" alt="">
			</div>
			<div class="poster">
				<img :src="subjectDetial.images.small" alt="">
				<span></span>
			</div>
		</header>
		<main>
			<ul>
				<li>
					<strong>年份:</strong>
					<span>{{subjectDetial.year}}</span>
					<div class="mark"></div>
				</li>
				<li>
					<strong>导演:</strong>
					<span v-for="(director, index) in subjectDetial.directors" :key="index">{{director.name}}</span>
					<div class="mark"></div>
				</li>
				<li>
					<strong>地区:</strong>
					<span v-for="(country, index) in subjectDetial.countries" :key="index">{{country}}    </span>
					<div class="mark"></div>
				</li>
				<li>
					<strong>分类:  </strong>
					<span v-for="(genre, index) in subjectDetial.genres" :key="index">{{genre}}    </span>
					<div class="mark"></div>
				</li>
				<li>
					<strong>剧情预览:</strong>
					<p>{{subjectDetial.summary}}</p>
					<div class="mark"></div>
				</li>
			</ul>
			<div class="cast-list">
				<strong>主演:</strong>
				<my-cast :casts="subjectDetial.casts" />
			</div>
		</main>
	</div>
</template>
<script>
import { mapState } from 'vuex'
// import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
import MyCast from 'src/components/Casts'
export default {
	data() {
		return {}
	},
	components: {
		MyCast
	},
	computed: mapState({
		movieDetial: state => state.movieDetial,
		subjectDetial: state => state.subject
	}),
}
</script>
<style lang="scss" scoped>
	#movieDetial {
		width: 100%;
		text-align: left;
		margin-bottom: 50px;
	}
	header {
		position: relative;
		margin-bottom: 50px;
		.bgimg {
			img {
				display: block;
				width: 100%;
				height: 220px;
			}
		}
		.poster {
			position: absolute;
			bottom: -50px;
			left: 30px;
			margin-bottom: 10px;
			img {
				width: 100px;
			}
			span {
				vertical-align: baseline;
			}
		}
	}
	main {
		ul {
			margin: 0 10px;
		}
		strong {
			font-size: 18px;
			margin-left: 20px;
		}
		p {
			text-indent: 2em;
		}
	}
	.mark {
		overflow: hidden;
		height: 10px;
		&::after {
			content: '';  
			display: block;  
			margin: -25px auto 0;  
			width: 100%;  
			height: 25px;  
			border-radius: 125px/10px;  
			box-shadow: 0 0 8px rgb(49, 42, 72); 
		}
	}
</style>


