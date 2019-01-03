const { curl } = require('./handlers');

module.exports = [
  {
    method: 'GET',
    path: '/curl/:host/:path',
    handler: curl
  }
];