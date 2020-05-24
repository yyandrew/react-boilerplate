module.exports = {
  apps : [{
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'wyb',
      host : 'ky2k.top',
      ref  : 'origin/master',
      repo : 'git@github.com:yyandrew/react-boilerplate.git',
      path : '/var/www/react-boilerplate',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
