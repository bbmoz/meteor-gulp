Package.describe({
    name: 'bbmoz:gulp',
    version: '0.0.14',
    summary: 'Easy scaffolding for gulp',
    git: 'https://github.com/bbmoz/meteor-gulp.git',
    documentation: 'README.md'
});

Npm.depends({
    "fs.extra": "1.3.2",
    "async": "0.9.0"
});

Package.onUse(function (api) {
    api.versionsFrom('1.0.5');
    api.addFiles(['gulp.js', 'package.json', 'gulpfile.js', '.jshintrc', 'jscsrc', '.gitignore'], 'server');
});