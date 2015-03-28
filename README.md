![CodeShip Status](https://codeship.com/projects/215bc240-b61d-0132-ac42-4286e2c721fd/status?branch=master)

<h1><b>Easy gulp scaffolding for Meteor</b></h1>

<h3>Installation</h3>
```bash
>> meteor add bbmoz:gulp
>> npm install -g gulp
>> meteor
```

<h3>Running Gulp</h3>
After you run "meteor", gulp should be set up for you automatically in addition to code quality plugins (jshint and jscs) to work out-of-the-box with Meteor. You can simply open up a new terminal and run "gulp" in the newly created <b>.gulp/</b> directory which contains the following files:
- gulpfile.js
- package.json
- .jshintrc
- .jscsrc

The .jshintrc and .jscsrc files are modified versions of established style guides to work in tandem with each other for Meteor. Many of the rules have been inspired by Douglas Crockford.

Please refer to the official gulp page at https://github.com/gulpjs/gulp to create your own tasks.

<h3>Output Messages</h3>
As long as you see the word "Completed" for the 3 tasks "makeGulpDir", "copyFiles", and "installGulpPlugins" at the very bottom of the console when you run your Meteor application, this means the gulp scaffolding has been successful.

Below is an example of what this should look like when you first go through the installation.
```javascript
{"makeGulpDir":"Completed","copyFiles":"Completed","installGulpPlugins":"Completed"}
```