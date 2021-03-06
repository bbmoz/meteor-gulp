(function gulp() {
    'use strict';

    var exists = Npm.require('file-exists'),
        newGulpDir = process.env.PWD + '/.gulp/',
        fs, async, spawn, oldGulpDir;

    if (!exists(newGulpDir + 'gulpfile.js')) {
        fs = Npm.require('fs.extra');
        async = Npm.require('async');
        spawn = Npm.require('child_process').spawn;
        oldGulpDir = process.cwd() + '/assets/packages/bbmoz_gulp/plugin/';

        async.series({
            makeGulpDir: function (cb) {
                console.log('<---- START gulp scaffold ---->');
                fs.mkdirp(newGulpDir, function (err) {
                    if (!err) {
                        cb(null, 'Completed');
                    } else {
                        cb(err);
                    }
                });
            },

            copyFiles: function (cb) {
                async.parallel({
                    copyPackageFile: function (cbFile) {
                        fs.copy(oldGulpDir + 'package.json',
                            newGulpDir + 'package.json',
                            function (err) {
                                cbFile(err);
                            }
                        );
                    },

                    copyGulpFile: function (cbFile) {
                        fs.copy(oldGulpDir + 'gulpfile.temp',
                            newGulpDir + 'gulpfile.js',
                            function (err) {
                                cbFile(err);
                            }
                        );
                    },

                    copyJshintrcFile: function (cbFile) {
                        fs.copy(oldGulpDir + '.jshintrc',
                            newGulpDir + '.jshintrc',
                            function (err) {
                                cbFile(err);
                            }
                        );
                    },

                    copyJscsrcFile: function (cbFile) {
                        fs.copy(oldGulpDir + '.jscsrc',
                            newGulpDir + '.jscsrc',
                            function (err) {
                                cbFile(err);
                            }
                        );
                    },

                    copyCsslintrcFile: function (cbFile) {
                        fs.copy(oldGulpDir + '.csslintrc',
                            newGulpDir + '.csslintrc',
                            function (err) {
                                cbFile(err);
                            }
                        );
                    },

                    copyGitignoreFile: function (cbFile) {
                        fs.copy(oldGulpDir + '.gitignore',
                            newGulpDir + '.gitignore',
                            function (err) {
                                cbFile(err);
                            }
                        );
                    }
                }, function (err) {
                    if (!err) {
                        cb(null, 'Completed');
                    } else {
                        cb(null, 'Completed: ' + err.message);
                    }
                });
            },

            installGulpPlugins: function (cb) {
                var npmInstall = spawn('npm', ['install', '--save-dev'], {
                    cwd: newGulpDir,
                    stdio: 'inherit'
                });
                npmInstall.on('exit', function (code) {
                    if (code === 0) {
                        cb(null, 'Completed');
                    } else {
                        cb('Failed');
                    }
                });
            }
        }, function (err, results) {
            if (err) {
                console.error(err);
            } else {
                console.log(
                    JSON.stringify(results) +
                    '\n<---- END gulp scaffold ---->'
                );
            }
        });
    }
}());