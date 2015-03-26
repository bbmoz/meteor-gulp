Package.describe({
  name: 'bbmoz:gulp',
  version: '0.0.1',
  summary: 'Scaffolding for gulp in your Meteor application',
  git: 'https://github.com/bbmoz/meteor-gulp.git',
  documentation: 'README.md'
});

Npm.depends({
  "fs.extra": "1.3.2",
  "async": "0.9.2"
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.5');
  api.addFiles('gulp.js', 'server');
});