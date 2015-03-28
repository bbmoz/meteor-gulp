(function gulp() {
    'use strict';

    var fs = Npm.require('fs.extra'),
        async = Npm.require('async'),
        spawn = Npm.require('child_process').spawn,
        newGulpDir = process.env.PWD + '/.gulp/';


    async.series({
        makeGulpDir: function (cb) {
            fs.mkdirp(newGulpDir, function (err) {
                cb(null, err);
            });
        },

        copyFiles: function (cb) {
            async.parallel({
                copyPackageFile: function (cbFile) {
                    fs.copy('package.json', newGulpDir + 'package.json',
                        function (err) {
                            cbFile(null, err);
                        }
                    );
                },

                copyGulpFile: function (cbFile) {
                    fs.copy('gulpfile.js', newGulpDir + 'gulpfile.js',
                        function (err) {
                            cbFile(null, err);
                        }
                    );
                },

                copyJshintrcFile: function (cbFile) {
                    fs.copy('.jshintrc', newGulpDir + '.jshintrc',
                        function (err) {
                            cbFile(null, err);
                        }
                    );
                },

                copyJscsrcFile: function (cbFile) {
                    fs.copy('.jscsrc', newGulpDir + '.jscsrc',
                        function (err) {
                            cbFile(null, err);
                        }
                    );
                },

                copyGitignoreFile: function (cbFile) {
                    fs.copy('.gitignore', newGulpDir + '.gitignore',
                        function (err) {
                            cbFile(null, err);
                        }
                    );
                }
            }, function (err) {
                cb(null, err);
            });
        },

        installGulpPlugins: function (cb) {
            var npmInstall = spawn('npm', ['install', '--save-dev'], {
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
        },

        installGulpGlobal: function (cb) {
            var npmInstall = spawn('npm', ['install', '-g', 'gulp'], {
                cwd: newGulpDir,
                stdio: 'inherit'
            });
            npmInstall.on('exit', function (code) {
                if (code === 0) {
                    cb(null, 'SUCCESS: npm -g install gulp');
                } else {
                    cb('FAIL: npm -g install gulp');
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