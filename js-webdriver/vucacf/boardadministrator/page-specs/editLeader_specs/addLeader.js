var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddLeaderPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addLeader_page.js');

describe('add leader',function(){

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
    AddLeaderPage.addLeaderclick();
    browser.sleep(1000);

    AddLeaderPage.setLeaderName('测试领导');
    AddLeaderPage.setLeaderPosition('测试');
    AddLeaderPage.leaderRecordclick();
    AddLeaderPage.setLeaderRecord('测试领导，测试领导，测试领导，测试测试测试');
    browser.sleep(1000);
    AddLeaderPage.setLeaderPhotoInput("C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\wKgCbF2RlfyAL1NPAAAa1E29Ncg770.png");
    browser.sleep(1000);
    AddLeaderPage.submitclick();
    browser.sleep(1000);

    it('managepage',function(){
        expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功！");
    })
})