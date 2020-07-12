const koa = require('koa');
const compose = require('koa-compose');// 用于将多个中间件组合成单一的中间件；
const app = new koa();

// 中间件函数，next用于把中间件的执行权交给下游的中间件，返回一个Promise
// const logger = async function(ctx,next) {
// 	console.log('logger');
// 	await next();
// }
// app.use(logger);
// app.use(async function(ctx,next) {
// 	ctx.body = 'Hello World';
// })

// 中间件执行顺序，先进后出
// app.use(async function(ctx,next){
// 	console.log('one start');
// 	await next();
// 	console.log('one end');
// });
// app.use(async function(ctx,next){
// 	console.log('two start');
// 	ctx.body = 'two';
// 	await next()
// 	console.log('two end');
// });
// app.use(async function(ctx,next){
// 	console.log('three start');
// 	await next();
// 	console.log('three end');
// })

/* 执行结果：   one start
				two start
				three start
				three end
				two end
				one end
*/

// 使用中间件获取相应时间（从服务器接收到HTTP请求到最终返回给客户端之间所耗时长）
app.use(async (ctx,next) => {
	let stime = new Date().getTime();
	await next();
	let etime = new Date().getTime();
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Hello World</h1>';
	console.log(`请求地址：${ctx.path},响应时间： ${etime - stime}ms`);
})
app.use(async (ctx,next) => {
	console.log('中间件 doSomething');
	await next();
	console.log('中间件执行over');
})


app.listen(3000,() => {
	console.log('server is running at http://localhost:3000')
})