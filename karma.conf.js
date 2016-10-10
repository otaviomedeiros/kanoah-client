
module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      './tests/**/*.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './tests/**/*.js': ["webpack"]
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.js/, exclude: /node_modules/, loader: 'babel' }
        ]
      },
      watch: true
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity
  })
}
