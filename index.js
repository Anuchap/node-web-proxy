var http = require('http');
var httpProxy = require('http-proxy');
// var proxy = httpProxy.createProxyServer({});

// http.createServer(function(req, res) {
//     proxy.web(req, res, { target: 'https://pantip.com/topic/32389898' });
// }).listen(process.env.PORT);



httpProxy.createProxyServer({
    target: 'https://pantip.com:80'
}).listen(process.env.PORT);