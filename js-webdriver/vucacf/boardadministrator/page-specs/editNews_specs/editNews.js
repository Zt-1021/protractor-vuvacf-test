var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\gotoManage_page.js');
var managerboardPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\managerBoard_page.js');
var AddNewPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\addNews_page.js');
var EditNewsPage = require('D:\\js-webdriver\\vucacf\\boardadministrator\\page-objects\\editNews_page.js');

describe('edit news',function(){

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
    EditNewsPage.editNewclick();
    browser.sleep(1000);

    AddNewPage.setnewTitleClear();
    AddNewPage.setnewTitle('重新编辑测试新闻');
    AddNewPage.setnewTabClear();
    AddNewPage.setnewTab('重新编辑测试标签');
    AddNewPage.newContentclick();
    AddNewPage.setnewContent('重新编辑测试新闻，测试新闻测试新闻，测试新闻测试新闻');
    AddNewPage.newNotTopclick();
    browser.sleep(1000);
    AddNewPage.submitclick();
    browser.sleep(1000);
    AddNewPage.commitclick();
    browser.sleep(1000);


    it('managepage',function(){
        expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("重新编辑测试新闻");
    })
})