
//  本案例未调通；
const koa = require('koa');
const views = require('koa-views');
const path = require('path');
const bodyParse = require('koa-bodyparser');
const static = require('koa-static');
const Router = require('koa-router');
const app = new koa();
const router = new Router();
app.use(views(__dirname+'/views',{
	map: {html:'ejs'}
}));
app.use(static(path.join(__dirname,'/static')));

router.get('/',async(ctx,next) => {
	await ctx.render('index');
})
router.post('/',async(ctx,next) => {
	let postData = ctx.request.body;
	ctx.body = postData;
});
app.use(bodyParse())
	.use(router.routes())
	.use(router.allowedMethods())
app.listen(3000,() => {
	console.log('server is running at http://localhost:3000');
});