const fastify = require('fastify');
const server = fastify();
const emailRoutes = require('./routes/emailRoutes');

server.register(emailRoutes);

server.listen({port: process.env.PORT || 3200});

