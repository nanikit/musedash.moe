module.exports = {
  apps: [{
    name: 'api.musedash.moe',
    script: 'api/index.js',
    instances: 1,
    autorestart: true,
    watch: false
  }, {
    name: 'musedash.moe',
    script: 'index.js',
    instances: 1,
    autorestart: true,
    watch: false
  }]
}
