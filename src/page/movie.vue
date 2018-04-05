<template>
	<div class="moive-container">
		<div v-for="(item, index) in movieList" :key="index" class="moive-item">
			<div class="moive-item-img">
				<img :src="item.data.res.payload['background_img']" alt="">
				<!-- <div class="title">{{item.data.res.payload.title}}</div> -->
				<div class="toggle" @click="changeCommentVisiable(index)">查看电影短评</div>
			</div>
			<div class="moive-item-comments" v-if="isCommentVisiable === index">
				<div class="moive-item-subject">
					<h2 class="title fl">
						《{{item.data.res.subject.title}}》
					</h2>
					<div class="rating fr">
						豆瓣评分: {{item.data.res.subject.rating}}
					</div>
				</div>
				<div class="comments clearfix">
					<div v-for="(content, index) in commentLists[item.data.res.subject.id]" :key="index">
						<div class="comment-cell">
							<div class="avatar">
								<img :src="content.avatar" :alt="content.id">
							</div>
							<div class="comment">
								<h3>
									<strong>{{content.id}}</strong>
									<span class="fr">{{content.time}}</span>
								</h3>
								<p>{{content.comment}}</p>
							</div>
						</div>
						<div class="mark"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	data() {
		return {
			isCommentVisiable: -1,
		}
	},
	computed: mapState({
		movieList: state => state.topList,
		commentLists: state => state.topListComment
	}),
	methods: {
		changeCommentVisiable(index) {
			this.isCommentVisiable === index ? this.isCommentVisiable = -1 : this.isCommentVisiable = index
			console.log(this)
		}
	}
}
</script>

<style lang="scss" scoped>
.clearfix {
	content: '';
	display: block;
	clear: both;
}
.fr {
	float: right;
	font-size: 14px;
	line-height: 25px;
	color: rgb(170, 170, 170);
}
.moive-container {
	margin-bottom: 50px;
}
.moive-item {
	width: 100%;
	.moive-item-img {
		position: relative;
		img {
			width: 100%;
			height: 220px;
		}
		.toggle {
			position: absolute;
			bottom: 0;
			right: 0;
			font-size: 18px;
			padding: 20px;
		}
	}
	.moive-item-comments {
		margin: 0 10px;
		.fl {
			float: left;
		}
		.fr {
			float: right;
		}
	}
}
.moive-item-subject {
	position: sticky;
	top: 0;
	overflow: hidden;
	background: rgb(28, 15, 45);
}
.comments {
	text-align: left;
	.comment-cell {
		padding: 5px 0;
		display: flex;
		.avatar {
			flex: 1;
			margin-right: 15px;
			img {
				vertical-align: middle;
			}
		}
		.comment {
			flex: 9;
			strong {
				color: rgb(69, 90, 187)
			}
		}
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


