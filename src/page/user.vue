<template>
  <div class="user-info">
      <img src="../assets/logo.png" alt="">
      <blockquote>
          几分钟光影体验生活，<br />
          一段故事温暖人心。
      </blockquote>
        <div class="signin">
            <input type="button" value="SING IN">
        </div>
        <div class="register">
            <input type="button" value="REGISTER">
        </div>
  </div>
</template>
<style lang="scss" scoped>
    .user-info {
        width: 100%;
        margin-top: 168px;
        text-align: center;
    }
    img {
        width: 120px;
        height: 120px;
    }
    blockquote {
        font-size: 20px;
        margin: 40px;
    }
    .signin, .register {
        height: 50px;
        font-size: 30px;
        font-style: bold;
        margin-bottom: 40px;
        input {
            width: 80%;
            height: 50px;
            font-size: 30px;
            background-color: transparent;
            outline: none;
            overflow: hidden;
            border: 2px solid;
            padding: 2px;
            border-radius: 25px;
            border-image: -webkit-linear-gradient(143deg, rgba(86, 3, 119, 0.883), rgba(65, 1, 138, 0.966)) 20 stretch;
        }
    }
</style>

