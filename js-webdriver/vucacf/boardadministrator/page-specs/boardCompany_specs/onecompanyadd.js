var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddOneCompanyPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\onecompanyadd_page.js');

describe('add company',function(){

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
    
    AddOneCompanyPage.boardEnterpriseclick();
    browser.sleep(1000);
    AddOneCompanyPage.addEnterpriseclick();
    browser.sleep(1000);
    AddOneCompanyPage.addOneEnterpriseclick();
    browser.sleep(1000);

    AddOneCompanyPage.setcompanyName('深圳市京深大通商贸有限公司');//渭源县渭和家园商行
    AddOneCompanyPage.setcompanySocialCreditCode('91440300305929662M');//92621123MA72NK108J
   
    browser.sleep(1000);
    AddOneCompanyPage.commit02click();
    browser.sleep(3000);
    AddOneCompanyPage.commitclick();
    browser.sleep(5000);

    it('add one company',function(){
        expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("深圳市京深大通商贸有限公司");
    })
})