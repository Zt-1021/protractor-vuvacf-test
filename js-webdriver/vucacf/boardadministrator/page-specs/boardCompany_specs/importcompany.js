var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddOneCompanyPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\onecompanyadd_page.js');
var importCompanyPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\importcompany_page.js');

describe('import company',function(){

    angularLoginPage.get();
    browser.sleep(2000);
    angularLoginPage.setName('zt111');//v15568568677
    angularLoginPage.setPassword('0000000');//000000
    angularLoginPage.setVercode('0');
    angularLoginPage.loginclick();
    browser.sleep(3000);

    gotomanagerPage.img01click(); 
    browser.sleep(1000);
    gotomanagerPage.managerclick();
    browser.sleep(4000);
    
    managerboardPage.managerboardclick();
    browser.sleep(1000);
    
    AddOneCompanyPage.boardEnterpriseclick();
    browser.sleep(1000);
    AddOneCompanyPage.addEnterpriseclick();
    browser.sleep(1000);
    importCompanyPage.manyAddEnterpriseclick();
    browser.sleep(2000);
    importCompanyPage.setclickChooseFile("D:\\js-webdriver\\files\\模板7.xls");
    browser.sleep(2000);
    importCompanyPage.commit03click();
    browser.sleep(3000);

    it('import company',function(){
        expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).not.toBe("添加失败");
    })
})