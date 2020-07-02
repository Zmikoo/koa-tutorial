var net = require('net');
var server = net.createServer(function(socket){
	socket.on('data',function(socket){
		console.log('服务器收到客户端数据');
		socket.write('欢迎光临《深入浅出node.js》示例2:\n');
	})
	socket.on('end',function(){
		console.log('连接断开');
	});
	socket.write('欢迎光临《深入浅出node.js》示例:\n');
});

server.on('connection',function(socket){// socket 套接字
	console.log('服务器收到客户端连接');
})
server.listen(8124,function(){
	console.log('server bound');
})