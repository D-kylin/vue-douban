<template>
  <div class = "top-list-detial">
      <header>Top250榜单推荐</header>
        <div v-for="(item, index) in top250datas" :key="index" class="detial-cell"> 
            <div class="item-container">
                <div class="movice-img">
                    <img :src="item.images.small" :alt="item['original_title']">
                </div>
                <div class="movice-info">
                    <ul>
                        <li>片名:<strong>《{{item.title}}》</strong></li>
                        <li>年份: {{item.year}}</li>
                        <li>导演: <strong>{{item.directors[0].name}}</strong></li>
                        <li>分类: {{item.genres[0]}} {{item.genres[1]}} {{item.genres[2]}}</li>
                        <li>豆瓣评分: {{item.rating.average}}</li>
                    </ul>
                </div>
            </div>
            <div class="mark"></div>
        </div>
  </div>
</template>
<script>
export default {
    name: 'top250',
    props: ['top250datas'],
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    header {
        height: 40px;
        font-size: 20px;
        margin-top: 5px;
    }
    .top-list-detial {
        margin: 0 20px 50px 20px;
    }
    .item-container {
        display: flex;
        text-align: left;
        .movice-img{
            flex: 2;
            img {
                width: 80%;
                height: 95%;
            }
        }
        .movice-info {
            flex: 3;
            li {
                padding: 3px 0;
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

