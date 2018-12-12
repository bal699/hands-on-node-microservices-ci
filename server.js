'use strict';

require('dotenv').config()
const Hapi = require('hapi');

// Create a server with a host and port
const server = Hapi.server({
    host:'0.0.0.0',
    port: process.env.PORT || 8009
});

// Add the route
server.route({
    method:'GET',
    path:'/',
    handler:function(request,h) {
        return 'Hellow World! Finalmente consegui terminar esse tutorial!';
    }
});

// Start the server
async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Server running at:', server.info.uri);
};

// Start Now!
start();