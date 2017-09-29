"use strict";

import gulp from "gulp";
import gulpLoadPlugins from "gulp-load-plugins";

const $ = gulpLoadPlugins();

gulp.task("assets", () =>
  gulp.src("./assets/**/*.png", {base: "./"})
    .pipe($.imagemin({verbose: true}))
    .pipe(gulp.dest("./"))
);

gulp.task("default", ["assets"]);