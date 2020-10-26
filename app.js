//使用express构建web服务器 --11:25
const express = require('express');

var app = express();

// 注册解析 表单数据的 body-parser
const bodyParser = require('body-parser')
    // 将请求响应设置content-type设置为application/json
const router = require('./routes/users.js')

app.use('/api/*', function(req, res, next) {
    // 设置请求头为允许跨域
    res.header("Access-Control-Allow-Origin", "*");
    // 设置服务器支持的所有头信息字段
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    // 设置服务器支持的所有跨域请求的方法
    res.header("Access-Control-Allow-Methods", "POST,GET");
    // next()方法表示进入下一个路由

    next();
});




// post
app.use(bodyParser.urlencoded({
        limit: '50mb',
        extended: true
    }))
    // 处理json格式的参数
app.use(bodyParser.json({ limit: '50mb' }))
    // 配置路由
app.use(router)



app.listen('9527', function() {
    console.log('running...')
})

// 端口号
// var server = app.listen(9527, function () {
//   console.log('running...')
// });

// //托管静态资源到public目录下
app.use(express.static('dist'));