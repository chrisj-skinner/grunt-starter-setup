#Grunt Starter Setup

A simple clean grunt setup with both a development ```grunt ``` and build / deployment ``` grunt build ``` command.

Typing ``` grunt ``` will concatenate, uglify and compile with an expanded output for easy debugging.

Typing ``` grunt build ``` will concatenate, uglify, reduce image size and compile with a compressed output for final production deployment.

Type ``` grunt watch ``` to watch all files for changes and run development task on file change.

Type ``` grunt imagemin ``` to reduce image size. Also added to ``` grunt build ```.


### Version
0.0.1

### Tech

Grunt Starter Setup uses a number of open source projects to work properly:

* [grunt-contrib-uglify]
* [grunt-contrib-watch]
* [grunt-sass]
* [grunt-contrib-imagemin]


[grunt-contrib-uglify]: <https://www.npmjs.com/package/grunt-contrib-uglify>

[grunt-contrib-watch]: <https://www.npmjs.com/package/grunt-contrib-watch>

[grunt-sass]: <https://www.npmjs.com/package/grunt-sass>

[grunt-contrib-imagemin]: <https://www.npmjs.com/package/grunt-contrib-imagemin>


### Installation

A packages.json file is included.

Run the following command in the root directory of the app to install the required node modules:

```sh
$ npm install
```

License
----

MIT
