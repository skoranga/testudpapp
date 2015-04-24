### how to test

 - `npm start` - to start pm2 in cluster mode with 2 instances
 - `npm stop` - to stop pm2
 - `node index.js` - to start app without pm2
 - `node test` - hit page 100 times using `ab`(mac/linux only)


### Observation

 - On Node@0.12.x, pm2 cluster mode is acting very weird when hitting udp client code. First request is fine but pm2 is crashing without any error/warning and not recovering at all. Same usecase works perfectly fine on plain node.
