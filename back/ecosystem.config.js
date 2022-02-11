const pack = require('./package.json');

module.exports = {
  apps: [
    {
      name: `${pack.name}@${pack.version}`,
      script: 'dist/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '100M',
      env: {
        NODE_ENV: 'production',
      }
    },
],
};