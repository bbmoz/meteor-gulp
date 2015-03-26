![CodeShip Status](https://codeship.com/projects/215bc240-b61d-0132-ac42-4286e2c721fd/status?branch=master)
<h1><b>Easy gulp scaffolding for Meteor</b></h1>

<h3>Installation</h3>
```bash
>> meteor add bbmoz:gulp
>> npm install -g gulp
>> meteor
```

<h3>Running gulp</h3>
After you run "meteor", everything should be set up for you! You can simply open up a new terminal and run "gulp" in the newly created <b>.gulp/</b> directory which contains the following two files:
- .gulp/gulpfile.js
- .gulp/package.json

Now everytime you make a change, the gulp task should run! By default, the jshint gulp plugin is installed and basically set up for you. Please refer to the official gulp page at https://github.com/gulpjs/gulp to create your own tasks.
