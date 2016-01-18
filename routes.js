var fbHandler = require('./src/server.jsx');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: fbHandler
},
{
    method: 'GET',
    path: '/example',
    handler: fbHandler
}];
