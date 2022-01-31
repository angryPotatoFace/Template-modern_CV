const sass = require('gulp-sass') (require('sass'));
const {src, dest, watch} = require('gulp') ;
const plumber = require('gulp-plumber');
const webp = require('gulp-webp');
 
function runSass(done){
    src('scr/scss/*.scss')        // Identificar archivos .scss a compilar
        .pipe(plumber())               // Evita que corte la ejecucion de gulp si hay un error de sintaxis.
            .pipe(sass())               // Compilo el archi de Sass
                .pipe(dest('build/css')) //Almacenarla lo almaceno en la ruta especificada
    done();
}

function watchSass(done){
    watch('scr/scss/*.scss', runSass); // le paso la ruta del archivo a observa y cuando hay cambios, ejecuta la funcion pasada.
    done();
}

function imagesToWebp(done){
    const opciones = {                // Le paso el valor para setear la calidad con la que se convierten
        quality: 50
    };

    src('img/**/*.{jpg,png}')        // Identificar archivos jpg png a convertir
        .pipe(webp(opciones))  
            .pipe(dest('build/img')) //Almacenarla lo almaceno en la ruta especificada
    done();
}

function javascriptFiles(done){
    src('js/**/*.js')
        .pipe(dest('build/js'))
    done();
}

exports.runSass = runSass;
exports.watchSass = watchSass;
exports.imagesToWebp = imagesToWebp;
exports.javascriptFiles = javascriptFiles;