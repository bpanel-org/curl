const { curl } = require('./handlers');

module.exports = [
  {
    method: 'GET',
    path: '/curl/:host',
    handler: curl
  }
];