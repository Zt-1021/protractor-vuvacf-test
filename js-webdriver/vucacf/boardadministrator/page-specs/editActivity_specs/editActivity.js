var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddActivityPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addActivity_page.js');
var EditActivityPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\editActivity_page.js');

describe('edit activity',function(){

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
    EditActivityPage.editAcvitifyclick();
    browser.sleep(1000);

    AddActivityPage.setactivityTitleClear();
    AddActivityPage.setactivityTitle('重新编辑测试活动');
    AddActivityPage.setactivityLocationClear();
    AddActivityPage.setactivityLocation('重新编辑上海富由');
    browser.sleep(1000);
    AddActivityPage.submitclick();
    browser.sleep(1000);
    AddActivityPage.commitclick();
    browser.sleep(1000);


    it('managepage',function(){
        expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("重新编辑测试活动");
    })
})