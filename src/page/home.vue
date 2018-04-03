<template>
  <div class="home">
		<banner />
        <div class="hotlist-container">
            <div class="list-header">
                <div class="list-title fl">正在热映</div>
                <div class="check-more fr">查看更多</div>
            </div>
            <hot-movice-list />
        </div>
        <div class="mark"></div>
        <div class="newlist-container">
            <div class="list-header">
                <div class="list-title fl">新榜上线</div>
                <div class="check-more fr">查看更多</div>
            </div>
		    <new-movice-list />	
        </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Banner from 'src/components/banner'
import NewMoviceList from 'src/components/List'
import HotMoviceList from 'src/components/Hot'

export default {
  name: 'Home',
  components: {
		Banner,
        NewMoviceList,
        HotMoviceList
	}
}
</script>
<style lang="scss" scoped>
.home {
    margin-bottom: 40px;
}
.newlist-container {
    margin-top: 10px;
    padding: 10px;
    .list-header {
        margin-bottom: 10px;
    }
}
.mark {
    overflow: hidden;
    height: 1px;
    &::after {
        content: '';  
        display: block;  
        margin: -25px auto 0;  
        width: 100%;  
        height: 25px;  
        border-radius: 125px/10px;  
        box-shadow: 0 0 8px rgb(240, 240, 240); 
    }
}
.hotlist-container {
    margin-top: 10px;
    padding: 10px;
    .list-header {
        margin-bottom: 10px;
    }
}
.list-title {
    margin: 0 0 5px 15px;
}
.check-more {
    margin: 0 15px 5px 0;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
</style>

