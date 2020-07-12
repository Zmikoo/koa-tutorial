const Koa = require('koa');
const app = new Koa();
// app.use(async (ctx,next) => {
// 	const {url,method} = ctx;
// 	if (url === '/404' && method === 'GET') {
// 		ctx.body = 'Page Not Found';
// 	} else {
// 		ctx.body = 'Default Content';
// 	}
// 	await next();
// });

class Router {
	constructor() {
		this._routes = [];
	}
	get(url,handler) {
		this._routes.push({
			url: url,
			method: 'GET',
			handler
		});
	}
	routes(){
		return async (ctx,next) => {
			const {method,url} = ctx;
			const
		}
	}
}
app.listen(3000, () => {
	console.log('服务器已就绪')
})