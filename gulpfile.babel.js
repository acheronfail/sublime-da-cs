"use strict";

import gulp from "gulp";
import imagemin from "gulp-imagemin";

gulp.task("assets", () =>
  gulp.src("./assets/**/*.png", {base: "./"})
    .pipe(imagemin({verbose: true}))
    .pipe(gulp.dest("./"))
);

gulp.task("default", ["assets"]);