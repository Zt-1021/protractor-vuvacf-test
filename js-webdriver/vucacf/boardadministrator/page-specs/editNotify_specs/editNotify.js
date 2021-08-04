var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddNotifyPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addNotify_page.js');
var EditNotifyPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\editNotify_page.js');

describe('edit notify',function(){

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
    
    AddNotifyPage.goToNotifyListclick();
    browser.sleep(1000);
    EditNotifyPage.editNotifyclick();
    browser.sleep(1000);

    AddNotifyPage.setnotifyTitleClear();
    AddNotifyPage.setnotifyTitle('重新编辑公告');
    AddNotifyPage.setnotifyKeyWordClear();
    AddNotifyPage.setnotifyKeyWord('重新编辑公告关键字');
    AddNotifyPage.notifyContentclick();
    //AddNotifyPage.setnotifyContentClear();
    AddNotifyPage.setnotifyContent('重新编辑自有公告添加测试');
    AddNotifyPage.setnotifyAccessory('C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\0123.jpg');
    browser.sleep(1000);
    AddNotifyPage.submitclick();
    browser.sleep(1000);
    AddNotifyPage.commitclick();
    browser.sleep(1000);

    it('managepage',function(){
        expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("重新编辑公告");
    })
})