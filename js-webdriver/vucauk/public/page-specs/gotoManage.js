var angularLoginPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\gotoManage_page.js');


describe("Asynchronous specs", function() {
   
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        // 设置全局的默认超时时间
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1200000;
    });

    it('should have a title', function() {  
        angularLoginPage.get();
       
        angularLoginPage.login01click();
        angularLoginPage.setName('wd18275075653@163.com');//zt_1021@163.com;vuca@vucacapital.com
        angularLoginPage.setPassword('000000');
        angularLoginPage.setVercode('0');
        angularLoginPage.loginclick();
        browser.sleep(1000);
        gotomanagerPage.img01click(); 
        browser.sleep(2000);
        gotomanagerPage.managerclick();
        browser.sleep(2000);
        expect(element(by.xpath('//div/app-companyguide/ul/li[1]/span')).getText()).toEqual("Companies");
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});