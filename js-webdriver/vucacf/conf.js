// conf.js

//var Jasmine2HtmlReporter = require('../node_modules/protractor-jasmine2-html-reporter');
//var report = require('../node_modules/jasmine-reporters');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  suites:{
    //specs: ['spec.js'],
    //specs:['./public/page-specs/login_specs/login-spec-normal.js'],
    //specs:['./public/page-specs/gotoManage.js'],
    //specs:['./boardadministrator/page-specs/managerBoarder.js'],
    specs:['./boardadministrator/page-specs/editLeader_specs/addLeader.js'],
    //specs:['./boardadministrator/page-specs/editLeader_specs/editLeader.js'],
    //specs:['./boardadministrator/page-specs/editLeader_specs/deleteLeader.js'],
    //specs:['./boardadministrator/page-specs/editNotify_specs/addNotify.js'],
    //specs:['./boardadministrator/page-specs/editNotify_specs/editNotify.js'],
    //specs:['./boardadministrator/page-specs/editNotify_specs/deleteNotify.js'],
    //specs:['./boardadministrator/page-specs/editOrganizationPhoto/addOrganization.js'],
    //specs:['./boardadministrator/page-specs/editNews_specs/addNews.js'],
    //specs:['./boardadministrator/page-specs/editNews_specs/editNews.js'],
    //specs:['./boardadministrator/page-specs/editNews_specs/deleteNews.js'],
    //specs:['./boardadministrator/page-specs/editActivity_specs/addActivity.js'],
    //specs:['./boardadministrator/page-specs/editActivity_specs/editActivity.js'],
    //specs:['./boardadministrator/page-specs/editActivity_specs/deleteActivity.js'],
    //specs:['./boardadministrator/page-specs/boardCompany_specs/onecompanyadd.js'],
    //specs:['./boardadministrator/page-specs/boardCompany_specs/searchCompany.js'],
    //specs:['./boardadministrator/page-specs/boardCompany_specs/deleteCompany.js'],
    //specs:['./boardadministrator/page-specs/boardCompany_specs/importcompany.js'],
  },

  /*
  onPrepare: function(){
    jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'report/e2e/',
          takeScreenshots: true,  //是否截屏
          takeScreenshotsOnlyOnFailures: true //测试用例执行失败时才截屏
        })
      );
    jasmine.getEnv().addReporter(
      new report.JUnitXmlReporter({
          savePath: 'report/tc/e2e/',
          consolidateAll: false,
          filePrefix:'',
          package:'E2E'
      })
    );
  },
  */
}