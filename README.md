![CodeShip Status](https://codeship.com/projects/215bc240-b61d-0132-ac42-4286e2c721fd/status?branch=master)

#<b>Easy gulp scaffolding for Meteor</b>

##Installation
```bash
>> meteor add bbmoz:gulp
>> npm install -g gulp
>> meteor
```
When you run "meteor", as long as you see the word "Completed" for the 3 tasks "makeGulpDir", "copyFiles", and "installGulpPlugins" at the very bottom of the console, the gulp scaffolding has been successful.

Below is an example of what this should look like when you first go through the installation.
```javascript
{"makeGulpDir":"Completed","copyFiles":"Completed","installGulpPlugins":"Completed"}
```

##Why Gulp for Meteor?
Gulp allows for a separation of concerns between Meteor's internal build system and a more general purpose task runner that gulp provides. By allowing gulp to use packages like linting, you are able to re-use the exact same gulp files from one project to another.

##Running Gulp
After you follow the installation instructions, gulp should be set up for you automatically in addition to useful code quality plugins (js and css linting) to work out-of-the-box with Meteor. You can simply open up a new terminal and run "gulp" in the newly created <b>.gulp/</b> directory which contains the following files:
- gulpfile.js
- package.json
- .jshintrc
- .csslintrc

The .jshintrc and .csslintrc files are modified versions of established guides to work in tandem with each other for Meteor. While you are running gulp, anytime you modify a JavaScript or CSS file, the corresponding gulp task will run the linting check.

Please refer to the official gulp page at https://github.com/gulpjs/gulp to create your own tasks.

##Linting Customization
You are welcome to modify any of the linting .*rc config files that are pre-generated for you to fit your own coding and style standards.