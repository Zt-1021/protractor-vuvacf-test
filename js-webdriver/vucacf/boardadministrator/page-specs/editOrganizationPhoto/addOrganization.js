var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddOrganizationPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addOrganization_page.js');

describe('add notify',function(){

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

    AddOrganizationPage.goToOrganizationclick();
    AddOrganizationPage.addPhotoclick();
    AddOrganizationPage.setchoosePhoto('C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\157.png');
    browser.sleep(2000);
    AddOrganizationPage.commit01click();
    browser.sleep(1000);
    //AddOrganizationPage.commit02click();
    //browser.sleep(1000);
    

    it('managepage',function(){
        expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功");
    })
})