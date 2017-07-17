var gulp   = require('gulp');
var gulp = require("gulp");
var protractor = require("gulp-protractor").protractor;
var argv = require('yargs').argv;


gulp.task('e2eTests', function(){
	console.log('here');
	// let glob = argv.automationGlob || "./node_modules/@ms/**/*.e2e.js";
	// glob = glob.split(';');
	let glob = [];
	console.log('glob', glob);
	return gulp.src(glob)
	       .pipe(protractor({
	       	  configFile: "protractor.conf.js",
	       	  args:[
	       	     '--grep', argv.grep,
	       	  ]
	       }))
	       // .on('error', funcion(e){
	       // 	  console.log('e', e);
	       // 	  throw e;
	       // })
});

gulp.task('default', ['e2eTests']);



