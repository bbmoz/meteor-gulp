(function gulp() {
    'use strict';

    var fs = Npm.require('fs.extra'),
        async = Npm.require('async'),
        exec = Npm.require('child_process').exec,
        gulpDir = process.env.PWD + '/.gulp/';

    async.series({
        runMakefile: function (cb) {
            exec('(cd ./../util/ && make setup)', function (err) {
                if (err) {
                    return cb(err);
                }
                cb('Make has run successfully for the setup task');
            });
        },

        makeGulpDir: function (cb) {
            fs.mkdirp(gulpDir, function (err) {
                if (err) {
                    return cb(err);
                }
                cb('Gulp directory has been created as .gulp');
            });
        },

        moveGulpFile: function (cb) {
            fs.move('scaffold/gulpfile.js', gulpDir + 'gulpfile.js', function (err) {
                if (err) {
                    return cb(err);
                }
                cb('gulpfile.js has been created in .gulp');
            });
        },

        movePackageFile: function (cb) {
            fs.move('scaffold/package.json', gulpDir + 'package.json', function (err) {
                if (err) {
                    return cb(err);
                }
                cb('gulpfile.js has been created in .gulp');
            });
        }
    });
}());