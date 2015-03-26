(function gulp() {
    'use strict';

    var fs = Npm.require('fs.extra'),
        async = Npm.require('async'),
        spawn = Npm.require('child_process').spawn,
        newGulpDir = process.env.PWD + '/../../.gulp/',
        oldGulpDir = process.env.PWD + '/';

    async.series({
        makeGulpDir: function (cb) {
            console.log('makedir');
            fs.mkdirp(newGulpDir, function (err) {
                cb(null, err);
            });
        },

        copyGulpFile: function (cb) {
            console.log('makefile1');
            fs.copy(oldGulpDir + 'scaffold/gulpfile.js', newGulpDir + 'gulpfile.js', function (err) {
                cb(null, err);
            });
        },

        copyPackageFile: function (cb) {
            console.log('makefile2');
            fs.copy(oldGulpDir + 'scaffold/package.json', newGulpDir + 'package.json', function (err) {
                cb(null, err);
            });
        },

        installGulpGlobally: function (cb) {
            console.log('gulp global');
            var npmInstall = spawn('sudo npm', ['install', '-g', 'gulp'], {
                cwd: process.cwd(),
                stdio: 'inherit'
            });
            npmInstall.on('exit', function (code) {
                if (code === 0) {
                    cb(null, 'npm install -g gulp')
                } else {
                    cb('FAILED: npm install -g gulp')
                }
            });
        },

        installGulpPlugins: function (cb) {
            console.log('gulp');
            var npmInstall = spawn('sudo npm', ['install'], {
                cwd: newGulpDir,
                stdio: 'inherit'
            });
            npmInstall.on('exit', function (code) {
                if (code === 0) {
                    cb(null, 'npm install in .gulp/')
                } else {
                    cb('FAILED: npm install in .gulp/')
                }
            });
        }
    }, function (err, msg) {
        if (err) {
            return console.error(err);
        } else {
            console.log(msg);
        }
    });
}());