(function gulp() {
    'use strict';

    var fs = Npm.require('fs.extra'),
        async = Npm.require('async'),
        spawn = Npm.require('child_process').spawn,
        newGulpDir = process.env.PWD + '/.gulp/',
        gulpFileContent, packageFileContent;

    gulpFileContent = "var gulp = require('gulp'),\n\tjshint = require('gulp-jshint');\n\nvar srcs = {\n\tlint: ['./../client/templates/**/*.js', './../lib/**/*.js', './../server/**/*.js']\n};\n\ngulp.task('lint', function () {\n\treturn gulp.src(srcs.lint)\n\t\t.pipe(jshint())\n\t\t.pipe(jshint.reporter('default'))\n\t\t.pipe(jshint.reporter('fail'));\n});\n\ngulp.task('watch', function () {\n\tgulp.watch(srcs.lint, ['lint']);\n});\n\ngulp.task('default', ['lint', 'watch']);";
    packageFileContent = '{\n\t"name": "task-runner",\n\t"version": "0.0.1",\n\t"description": "gulp plugins",\n\t"main": "gulpfile.js",\n\t"devDependencies": {\n\t\t"gulp": "latest",\n\t\t"jshint": "latest"\n\t}\n}';

    async.series({
        makeGulpDir: function (cb) {
            fs.mkdirp(newGulpDir, function (err) {
                cb(null, err);
            });
        },

        writeGulpFile: function (cb) {
            fs.writeFile(newGulpDir + 'gulpfile.js', gulpFileContent, function (err) {
                cb(null, err);
            });
        },

        writePackageFile: function (cb) {
            fs.writeFile(newGulpDir + 'package.json', packageFileContent, function (err) {
                cb(null, err);
            });
        },

        installGulpPlugins: function (cb) {
            var npmInstall = spawn('npm', ['install'], {
                cwd: newGulpDir,
                stdio: 'inherit'
            });
            npmInstall.on('exit', function (code) {
                if (code === 0) {
                    cb(null, 'SUCCESS: npm install in .gulp/');
                } else {
                    cb('FAIL: npm install in .gulp/');
                }
            });
        }
    }, function (err, msg) {
        if (err) {
            console.error(err);
        } else {
            console.log(msg);
        }
    });
}());