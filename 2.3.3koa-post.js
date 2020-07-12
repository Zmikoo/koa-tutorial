const koa = require('koa');
const app = new koa();
const bodyParser = require('koa-bodyparser');// 可解析post的参数

// app.use(bodyParser());
// app.use(async (ctx) => {
// 	if (ctx.url === '/' && ctx.method === 'GET') {
// 		ctx.type = 'html';
// 		let html = `
// 			<h1>登陆</h1>
// 			<form method="POST" action="/">
// 				<p>用户名</p>
// 				<input name="userName"/>
// 				<p>密码</p>
// 				<input name="password" type="password"/>
// 				<button type="submit">提交</button>
// 			</form>
// 		`;
// 		ctx.body = html;
// 	} else if (ctx.url === '/' && ctx.method === 'POST') {
// 		// 当POST请求时，中间件koa-bodyparser解析POST表单里的数据;
// 		let postData = ctx.request.body;
// 		ctx.body = postData;
// 	}
// });

const Router = require('koa-router');// 路由
const router = new Router();
router.get('/',(ctx,next) => {
		ctx.type = 'html';
		let html = `
			<h1>登陆</h1>
			<form method="POST" action="/">
				<p>用户名</p>
				<input name="userName"/>
				<p>密码</p>
				<input name="password" type="password"/>
				<button type="submit">提交</button>
			</form>
		`;
		ctx.body = html;
});
router.post('/',(ctx,next) => {
		let postData = ctx.request.body;
		ctx.body = postData;
})

app.use(bodyParser())
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000,()=>{
	console.log('server is running at http://localhost:3000')
});