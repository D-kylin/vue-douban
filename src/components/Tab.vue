<template>
    <div id="app-nav">
        <nav>
            <router-link to="/" tag="div">
                <span>主页</span>
            </router-link>
            <router-link to="/" tag="div">
                <span>电影推荐</span>
            </router-link>
            <router-link to="/top250" tag="div">
                <span>Top250</span>
            </router-link>
            <router-link to="/userinfo" tag="div">
                <span>个人</span>
            </router-link>
        </nav>
    </div>
</template>
<script>
export default {
}
</script>

<style lang="scss" scoped>
    #app-nav {
        width: 100%;
        height: 50px;
        background-color: rgb(28, 15, 45);
        position: fixed;
        bottom: 0;
        z-index: 9999;
        nav {
            display: flex;
            height: 50px;
            div {
                flex: 1;
                span {
                    font-size: 16px;
                    line-height: 50px;
                }
            }
        }
    }
</style>

