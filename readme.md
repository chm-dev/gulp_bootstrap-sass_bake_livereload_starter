# Gulp + Sass + LiveReload + Bake + Bootstrap

This is working empty template with gulp workflow.
Gulp serves static content from directory public/ and watches for changes of files in it to trigger live reload.
If change is made to sass file it is compiled to public/css/dist directory.

There is [grunt-bake](https://github.com/MathiasPaumgarten/grunt-bake) which allows you to use modular static html pages in development.
It is used in gulpfile.js with help of [gulp-grunt](https://github.com/gratimax/gulp-grunt), which allows to use both gulp and grunt tasks in gulpfile.js


Templated is based on [gist by user theRemix](https://gist.github.com/theRemix/b9f10de0bead6a7eaf5a) but Foundation is replaced with Bootstrap and bake added.


## First use

1. Clone / download

2. In main project directory
````
npm install
````

````
bower install
````

##Using template (start gulp tasks)
In main project directory (keep terminal opened)
````
gulp
````
##Please note
This template is meant to be used in development environment only for frontend developer before backend work.
It surely can be extended for a production use (mainly because of smart and simple templating capabilities of bake) but it wasn't my intention.
