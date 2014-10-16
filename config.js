// Path configs
var config = {
    paths: {
        baseDir: './client',
        bundleName: 'bundle.js',
        js: {
            app: './src/main.js', // entry point for browserify'd application
            src: './src/**/*.js',
            dest: './client/scripts/'
        }
    }
};


module.exports = config;