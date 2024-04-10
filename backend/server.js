// import jsonServer from "json-server"

const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router('data/products.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
const port = process.env.PORT || 4000;

server.listen(port, () => {
	console.log( "holiwi :3" )
    console.log('JSON Server is running port 4000');
})
