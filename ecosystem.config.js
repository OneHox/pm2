module.exports = {
  apps: [
    {
      name: 'pm2',
      script: 'index.js',
      instances: 'MAX',
      autorestart: true,
      exec_mode: "cluster",
      watch: true,
      max_memory_restart: '1G',
    },
  ]
};