# 前言

一个电影资讯推荐app，从UI到代码实现都是亲自完成，由于官方公开的api中只有一部分能使用，大部分比较重要的信息都需要权限才能获取到，即使在某些自己写脚本爬取文件的情况下，依然给项目的设计带来影响（不过毕竟是豆瓣开放的免费api，再次鸣谢）。

## 技术栈

vue2 + vuex + vue-router + webpack + ES2015 + axios + sass

## 项目运行

#### 注意:由于项目使用最新vue-cli(@version2.9.3)生成，请正确安装对应版本的webpack和node

``` 
git clone https://github.com/D-kylin/vue-douban.git

cd vue-douban

npm install

npm start

```

#目标功能
- [x] 获取电影推荐 -- 完成
- [x] 电影详情 -- 完成
- [x] 电影海报预览 -- 完成
- [] 登陆、注册 -- 未完成
- [] 主动推送功能 -- 未完成


#总结

1、项目写到现在，从一个个单独的组件到页面之间，由于一开始对vuex不熟悉而惧怕使用，结果导致多个页面进行数据传递的时候变得容易出错，而且出现bug查找效率低下，在仔细阅读vuex的官方文档后觉得还是利用vuex进行数据管理，在项目开始时候会麻烦不少，但是随着代码量以及数据引用的数量提升，数据之间逻辑关系的复杂度并没有提升多少。

2、由于软件是倾向于图形化传递信息，所以用上了swiper这个对于图片展示有较好封装的插件，对于插件的使用只有一个观点就是：出现问题时查找官方文档才是最快速的解决办法。日后工作中自己也需要培养写出有良好阅读性的文档。

3、对vue的各个生命周期理解更深一层，对以后掌控大型项目的时候也有非常多的帮助。接下来准备仔细研读vue一些重要功能的实现原理，知己知彼百战不殆嘛。

4、vue组件的设计欠缺，导致组件复用率不高，功能性薄弱，后续会进行组件解耦优化，缩减代码量，提高代码可读性这个项目还会继续进行下去，希望能实现一个在快节奏生活中慢下来细细品味生活的app。

# License

#### 如果您喜欢这个软件不妨点个star，也欢迎fork。
<<<<<<< HEAD
#### 个人邮箱：2017kylin@gmail.com
=======
#### 个人邮箱：2017kylin@gmail.com
>>>>>>> 26b4b3b9adf6e628c183d5d60af96515bbf8ba0d
