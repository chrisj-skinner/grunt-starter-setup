#Grunt Setup

A simple clean grunt setup with both a development ```grunt ``` and build / deployment ``` grunt build ``` command.

Typing ``` grunt ``` will concatenate, uglify and compile with an expanded output for easy debugging.

Typing ``` grunt build ``` will concatenate, uglify, reduce image size and compile with a compressed output for final production deployment.

Type ``` grunt watch ``` to watch all files for changes and run development task on file change.

Type ``` grunt imagemin ``` to reduce image size. Also added to ``` grunt build ```.


* [grunt-contrib-uglify]
* [grunt-contrib-watch]
* [grunt-sass]
* [grunt-contrib-imagemin]


[grunt-contrib-uglify]: <https://www.npmjs.com/package/grunt-contrib-uglify>

[grunt-contrib-watch]: <https://www.npmjs.com/package/grunt-contrib-watch>

[grunt-sass]: <https://www.npmjs.com/package/grunt-sass>

[grunt-contrib-imagemin]: <https://www.npmjs.com/package/grunt-contrib-imagemin>
