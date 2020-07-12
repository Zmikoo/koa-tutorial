
const HomeService = require('../service/home');// 与数据库有交互的函数处理

// 业务逻辑处理，将html和data结合起来返回给客户端
module.exports = {
    index: async(ctx,next) => {
        // ctx.response.body = '<h1>index page</h1>';
        await ctx.render('home/index',{content:'欢迎来到首页'});
    },
    home: async(ctx,next) => {
        ctx.response.body = '<h1>Home page</h1>';
    },
    homeParams: async (ctx,next) => {
        ctx.response.body = '<h1>Home page /:id/:name</h1>';
    },
    user: async(ctx,next) => {
        await ctx.render('home/login',{});
    },
    login: async(ctx,next) => {
        let {name,password} = ctx.request.body;
        let res = await HomeService.login(name,password);
        if (res.status === -1) {
            await ctx.render('home/login',res);
        } else {
            await ctx.render('home/success',res);
        }
        // ctx.response.body = 'Heel';
    }
}