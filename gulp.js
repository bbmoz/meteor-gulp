(function gulp() {
    'use strict';

    var fs = Npm.require('fs.extra'),
        async = Npm.require('async'),
        spawn = Npm.require('child_process').spawn,
        newGulpDir = process.env.PWD + '/../../.gulp/',
        oldGulpDir = process.env.PWD + '/',
        npmInstall;

    async.series({
        makeGulpDir: function (cb) {
            fs.mkdirp(newGulpDir, function (err) {
                cb(null, err);
            });
        },

        copyGulpFile: function (cb) {
            fs.copy(oldGulpDir + 'scaffold/gulpfile.js', newGulpDir + 'gulpfile.js', function (err) {
                cb(null, err);
            });
        },

        copyPackageFile: function (cb) {
            fs.copy(oldGulpDir + 'scaffold/package.json', newGulpDir + 'package.json', function (err) {
                cb(null, err);
            });
        },

        /*
         installGulpGlobally: function (cb) {
         console.log('gulp global');
         var npmInstall = spawn('npm', ['install', '-g', 'gulp'], {
         stdio: 'inherit'
         });
         npmInstall.on('exit', function (code) {
         if (code === 0) {
         cb(null, 'SUCCESS: npm install -g gulp')
         } else {
         cb('FAIL: npm install -g gulp')
         }
         });
         },
         */

        installGulpPlugins: function (cb) {
            npmInstall = spawn('npm', ['install'], {
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
        console.log('--DONE WITH GULP SETUP--');
    });
}());