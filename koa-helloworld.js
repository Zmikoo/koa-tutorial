const koa = require('koa');
const app = new koa();
app.use(async (ctx,next) => {
	await next();
	// ctx.response.type = 'text/html';
	// ctx.response.body = '<h1>Hello World</h1>'

	// get请求获取参数
	// ctx.response.body = {
	// 	url: ctx.request.url,
	// 	query: ctx.request.query,
	// 	querystring: ctx.request.querystring
	// }

	// post请求获取参数的方法
	// let postdata = '';
	// ctx.req.on('data',(data) => {
	// 	postdata += data;
	// });
	// ctx.req.on('end',() => {
	// 	console.log(postdata);
	// })

	// if (ctx.request.method === 'POST') {
	// } else if (ctx.request.method === 'GET') {
	// 	if (ctx.request.path !== '/') {
	// 		ctx.response.type = 'html';
	// 		ctx.response.body = '<a href="/">Go To Index</a>';
	// 	} else {
	// 		ctx.response.body = 'Hello World';
	// 	}
	// }

	ctx.response.status = 200;
	if (ctx.request.accepts('json')) {
		ctx.response.type = 'json';
		ctx.response.body = {data: 'Hello  World'};
	} else if (ctx.request.accepts('html')) {
		ctx.response.type = 'html';
		ctx.response.body = '<p>Hello World</p>';
	} else {
		ctx.response.type = 'text';
		ctx.response.body = 'Hello World';
	}
})
app.listen(3000, () => {
	console.log('server is running at http://localhost:3000');
});