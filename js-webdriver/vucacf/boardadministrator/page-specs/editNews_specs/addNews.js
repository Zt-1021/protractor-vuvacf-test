var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddNewPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addNews_page.js');

describe('add news',function(){

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
    
    AddNewPage.goToNewsListclick();
    browser.sleep(1000);
    AddNewPage.addNewclick();
    browser.sleep(1000);

    AddNewPage.setnewTitle('测试新闻');
    AddNewPage.setnewTab('测试');
    AddNewPage.newContentclick();
    AddNewPage.setnewContent('测试新闻，测试新闻测试新闻，测试新闻测试新闻');
    AddNewPage.newTopclick();
    browser.sleep(1000);
    AddNewPage.submitclick();
    browser.sleep(1000);
    AddNewPage.commitclick();
    browser.sleep(1000);

    it('managepage',function(){
        expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("测试新闻");
    })
})