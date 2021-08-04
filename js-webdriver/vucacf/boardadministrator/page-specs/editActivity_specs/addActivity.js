var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddActivityPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addActivity_page.js');

describe('add activity',function(){

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
    
    AddActivityPage.goToActivitysListclick();
    browser.sleep(1000);
    AddActivityPage.addActivityclick();
    browser.sleep(1000);

    AddActivityPage.setactivityTitle('测试活动');
    AddActivityPage.activityTimeclick();
    AddActivityPage.todayclick();
    AddActivityPage.setactivityLocation('上海富由');
    AddActivityPage.activityScaleclick();
    AddActivityPage.activityScalenumberclick();
    AddActivityPage.setactivitySponsor('上海富由');
    AddActivityPage.setactivityGuidance('上海富由');
    AddActivityPage.setactivityOrganizer('上海富由');
    AddActivityPage.setactivitySponsorIntroduce('上海富由');
    AddActivityPage.setactivityDetail('上海富由');
    AddActivityPage.setactivityDetail('<img src="group1/M00/00/67/77c6a7efce1b9d160a062583fedeb48f8d54640b.png"/>');

    browser.sleep(1000);
    AddActivityPage.submitclick();
    browser.sleep(2000);
    //AddActivityPage.commitclick();
    //browser.sleep(1000);

    it('managepage',function(){
        expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual(" 保存成功!");
    })
})