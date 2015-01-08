Package.describe({
  name: 'maxlibin:font-awesome',
  summary: 'font-awesome CDN',
  version: '1.0.0',
  git: 'https://github.com/meteor-singapore/font-awesome'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.use('templating', 'client');
  api.addFiles('font-awesome.js');
});