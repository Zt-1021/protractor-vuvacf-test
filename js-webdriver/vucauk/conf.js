// conf.js

//var Jasmine2HtmlReporter = require('../node_modules/protractor-jasmine2-html-reporter');
//var report = require('../node_modules/jasmine-reporters');

var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites:{
    //specs: ['spec.js'],
    //specs:['./public/page-specs/login_specs/login-spec-normal.js'],
    //specs:['./public/page-specs/gotoManage.js'],
    //specs:['./public/page-specs/addsellorder.js'],
    //specs:['./public/page-specs/addbuyorder.js'],
    specs:['./public/page-specs/maketrading.js'],
    //specs:['./public/page-specs/layout.js'],
    
  },

  
  onPrepare: function(){
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: './test/reports/',
        screenshotsFolder: 'images',
        takeScreenshots: true,
      })
    );
    /* 
    jasmine.getEnv().addReporter(
      new report.JUnitXmlReporter({
          savePath: 'report/tc/e2e/',
          consolidateAll: false,
          filePrefix:'',
          package:'E2E'
      })
    );
    */
  },
  
}