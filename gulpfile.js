const {series, src, dest, watch } = require('gulp')

const sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/scss/app.scss')
    .pipe(sass({
        outputStyle:'compressed'

    }))
    .pipe(dest('css/css'))
}



function watchArchivos() {
    watch('src/scss/**/*.scss', css)
}

exports.css = css

exports.watchArchivos = watchArchivos

