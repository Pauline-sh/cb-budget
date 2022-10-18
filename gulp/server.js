import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import child_process from 'child_process';

const { watch } = gulp;

export function buildServer(cb) {
  child_process.exec(
    'tsc --project ./tsconfig.json',
    function (err, stdout, stderr) {
      console.log(stdout);
      console.log(stderr);
      cb(err);
    });
}

export function watchServer() {
  watch([
    'src/**/*.ts',
  ], buildServer);
}

export function restartOnChangeServer() {
  nodemon({
    watch: ['./dist'],
    script: './dist/index.js'
  });
}

export function devServer() {
  watchServer(),
  restartOnChangeServer();
}
