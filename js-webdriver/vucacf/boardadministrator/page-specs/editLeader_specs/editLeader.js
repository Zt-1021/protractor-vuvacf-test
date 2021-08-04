var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddLeaderPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addLeader_page.js');
var EditLeaderPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\editLeader_page.js');

describe('edit leader',function(){

    angularLoginPage.get();
    browser.sleep(2000);
    angularLoginPage.setName('zt111');//v15568568677
    angularLoginPage.setPassword('0000000');//000000
    angularLoginPage.setVercode('0');
    angularLoginPage.loginclick();
    browser.sleep(3000);

    gotomanagerPage.img01click(); 
    browser.sleep(3000);
    gotomanagerPage.managerclick();
    browser.sleep(4000);
    
    managerboardPage.managerboardclick();
    browser.sleep(4000);
    
    AddLeaderPage.goToLeaderListclick();
    browser.sleep(1000);
    EditLeaderPage.editLeadclick();
    browser.sleep(1000);

    AddLeaderPage.setLeaderNameClear();
    AddLeaderPage.setLeaderName('重新编辑测试领导');
    AddLeaderPage.setLeaderPositionClear();
    AddLeaderPage.setLeaderPosition('重新编辑测试');
    AddLeaderPage.leaderRecordclick();
    //AddLeaderPage.setLeaderRecordClear();
    AddLeaderPage.setLeaderRecord('重新编辑测试领导，测试领导，测试领导，测试测试测试');
    browser.sleep(1000);
    AddLeaderPage.submitclick();
    browser.sleep(1000);
    AddLeaderPage.commitclick();
    browser.sleep(1000);

    it('managepage',function(){
        expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[2]')).getText()).toEqual("重新编辑测试");
    })
})