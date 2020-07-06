const http = require('http');
let users = [{
    id: 1,
    name: 'zhufeng111'
}, {
    id: 2,
    name: 'zhufeng222'
}, {
    id: 3,
    name: 'zhufeng333'
}]
const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url === '/api/users') {
        res.end(JSON.stringify(users))
    } else {
        res.end('NOT FOUND API')
    }
});
server.listen(3000, () => {
    console.log('后端接口服务期已经启动在3000端口')
});