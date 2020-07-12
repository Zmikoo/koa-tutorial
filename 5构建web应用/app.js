const Koa = require('koa');
const bodyParser = require('koa-bodyparser');// 解析请求参数的中间件
const path = require('path');
const nunjucks = require('koa-nunjucks-2');// 模板引擎
const staticFiles = require('koa-static');// 处理静态资源文件如img,css,js

const app = new Koa();

app.use(staticFiles(path.resolve(__dirname),'./public'),{// 指定静态资源目录
    maxage: 30 * 24 * 60 * 60 * 1000 // 指定缓存时长
})
app.use(nunjucks({
    ext:'html',      // 指定视图文件默认后缀
    path: path.join(__dirname,'views'), // 指定视图目录
    nunjucksConfig:{
        trimBlocks: true// 开启转义 防止Xss漏洞
    }
}))

const router = require('./route');
app.use(bodyParser());

router(app);

app.listen(3000,() => {
    console.log('server is running at http://localhost:3000');
})