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
      user: 'vagrant',
      host: '192.168.1.242',
      ref: 'origin/master',
      repo: 'git@github.com:yyandrew/react-boilerplate.git',
      path: '/var/www/react-boilerplate',
      "post-deploy": 'npm install && npm run build && sudo service nginx restart'
    }
  }
};
