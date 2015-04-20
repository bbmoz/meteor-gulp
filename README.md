![CodeShip Status](https://codeship.com/projects/215bc240-b61d-0132-ac42-4286e2c721fd/status?branch=master)

#<b>Easy gulp scaffolding for Meteor</b>

##Installation
```bash
>> meteor add bbmoz:gulp
>> npm install -g gulp
>> meteor
```
When you run "meteor", you should see a bunch of packages being installed. If you see the starting and ending logs below, then the installation was successful. It should take a couple of seconds before you see the end log.

```javascript
<---- START gulp scaffold ---->
<---- END gulp scaffold ---->
```

At the moment, this package serves as a one-time install and should probably be removed afterwards via a "meteor remove". More features are being planned that will make this package more useful.

##Why Gulp for Meteor?
Gulp allows for a separation of concerns between Meteor's internal build system and a more general purpose task runner that gulp provides. By allowing gulp to use packages like linting, you are able to re-use the exact same gulp files from one project to another.

##Running Gulp
After you follow the installation instructions, gulp should be set up for you automatically in addition to useful code quality plugins (js and css linting) to work out-of-the-box with Meteor. You can simply open up a new terminal and run "gulp" in the newly created <b>.gulp/</b> directory which contains the following files:
- gulpfile.js
- package.json
- .jshintrc
- .jscsrc
- .csslintrc

The .jshintrc, .jscsrc, and .csslintrc files are modified versions of established guides to work in tandem with each other for Meteor. While you are running gulp, anytime you modify a JavaScript or CSS file, the corresponding gulp task will run the linting check.

Please refer to the official gulp page at https://github.com/gulpjs/gulp to create your own tasks.

##Linting Customization
You are welcome to modify any of the linting .*rc config files that are pre-generated for you to fit your own coding and style standards. You are also free to do whatever you want with the gulpfile.js.
