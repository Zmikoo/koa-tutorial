const express = require('express');
const app = express();
app.get('/',(req,res) => {
	res.send('你好');
});
app.get('/end',(req,res) => {
	process.exit(1);// 相当于ctrl + c,任何等待中或运行中的请求都会被终止（不太友好）。process不需引入，可直接使用
})
const server = app.listen(3000,() => {
	console.log('服务器已就绪');
});

// 发送信号（内部通信系统）给进程，以告知其发生的事件
// SIGKILL 是告诉进程要立即终止的信号，其行为类似于 process.exit()。
// 它是从进程管理者（如 upstart 或 supervisord）等发出的信号。
process.on("SIGTERM",() => {
	server.close(() => {
		console.log('进程已终止')
	})
})// 不知为何这段代码不能杀掉进程
// 也可以从程序内部另一个函数中发送此信号
process.kill(process.pid,'SIGTERM'); // 这行代码会杀掉进程；

process.argv.forEach((val,index) => {// argv是包含命令行调用的所有参数的数组
	console.log(`${index} : ${val}`);
})

console.log(process.env.NODE_ENV);// 访问环境变量，该变量默认情况下被设为development,在脚本运行之前将其设置为 "production"，则可告诉 Node.js 这是生产环境