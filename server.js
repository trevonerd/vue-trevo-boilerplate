const fastify = require('fastify')({
    logger: false
});
const path = require('path');

const port = process.env.PORT || '3000';

fastify.register(require('fastify-compress'));

fastify.register(require('fastify-static'), {
    root: path.join(__dirname, 'dist'),
    prefix: '/' // optional: default '/'
});

// Declare a route
fastify.get('/', function(req, reply) {
    reply.sendFile('index.html');
});

// Declare a route
fastify.get('/about', function(request, reply) {
    reply.sendFile('/about/index.html');
});

// Run the server!
fastify.listen(port, '0.0.0.0', function(err) {
    if (err) throw err;
    console.log(`server listening on ${fastify.server.address().port}`);
});
