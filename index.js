//import json server
const jsonserver=require('json-server');
//create server
const server=jsonserver.create();
//set path for/route for middleware
const route=jsonserver.router('db.json');
//create middlewares
const middlewares=jsonserver.defaults();
server.use(middlewares);

server.use(route);
//set port
const PORT=3000;

server.listen(PORT,()=>{
    console.log('server started')
})