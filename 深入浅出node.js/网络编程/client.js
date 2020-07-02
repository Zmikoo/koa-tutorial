var net = require('net');
var client = net.connect({port: 8124},function(){
	console.log('客户端创建连接成功');
	client.write('连接到服务器了哈哈哈\n');
});
client.on('data',function(data){
	console.log('收到服务器数据:',data.toString());
	client.end();
})
client.on('end',function(){
	console.log('client end');
})