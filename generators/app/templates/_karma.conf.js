'use strict';

var bowerFilesToExclude = require('./tasks/config/bowerFilesToExclude.js');

module.exports = function (config) {
  config.set({

    basePath: 'client',

    frameworks: ['jasmine'],

    preprocessors: {
      '**/*.html': ['ng-html2js']
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'client/',
      moduleName: 'templates'
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    files: [
     'bower_components/angular/angular.js',
     'bower_components/angular-resource/angular-resource.js',
     'bower_components/angular-ui-router/release/angular-ui-router.js',
     'bower_components/angular-mocks/angular-mocks.js',
     'app/app.js',
     'app/**/*.module.js',
     'app/**/*.js'
    ],

    exclude: [
      'app/**/*.e2e.js'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    // possible values:
    // config.LOG_DISABLE
    // config.LOG_ERROR
    // config.LOG_WARN
    // config.LOG_INFO
    // config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
