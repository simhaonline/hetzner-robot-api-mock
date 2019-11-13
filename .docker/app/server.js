const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser')
const custom_routes = require('./routes.json')
const process = require('process');

process.on('SIGINT', function(){
  process.abort();
});

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(jsonServer.rewriter(custom_routes))
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
