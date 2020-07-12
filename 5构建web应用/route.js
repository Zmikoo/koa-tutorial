// 专门处理路由
const router = require('koa-router')();
const HomeController = require('./controller/home'); // 处理业务逻辑函数
module.exports = (app) => {
    router.get('/', HomeController.index);
    router.get('/home',HomeController.home)
    router.get('/home/:id/:name',HomeController.homeParams)
    router.get('/login',HomeController.user)
    router.post('/user/login',HomeController.login)
    app.use(router.routes()).use(router.allowedMethods());
}