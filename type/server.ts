/// <reference path="typings/tsd.d.ts" />

import * as cluster from 'cluster';
import { cpus } from 'os';
import * as Hapi from 'hapi';

const numCPUs = cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = new Hapi.Server();
  server.connection({
    host: 'localhost',
    port: 8000
  });

  server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: (request, reply) => reply('hello ' + request.params['name'])
  });

  server.start((err) => {
    if (err) { throw err; }
    console.log('Server running at:', server.info.uri);
  });
}