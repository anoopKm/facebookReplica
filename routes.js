var cfRentalsHandler = require('./src/server.jsx');

module.exports = [{
    method: 'GET',
    path: '/',
    handler: cfRentalsHandler
},
{
    method: 'GET',
    path: '/example',
    handler: cfRentalsHandler
}];
