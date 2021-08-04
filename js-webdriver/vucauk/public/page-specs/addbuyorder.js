var angularLoginPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\gotoManage_page.js');
var addbuyorder = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\addbuyorder_page.js');
const { browser, element, ExpectedConditions } = require('protractor');

describe("Asynchronous specs", function() {
   
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        // 设置全局的默认超时时间
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1200000;
    });

    it('addbuyorder', function() {  
        angularLoginPage.get();
       
        angularLoginPage.login01click();
        angularLoginPage.setName('zt_1021@163.com');//vuca@vucacapital.com
        angularLoginPage.setPassword('000000');
        angularLoginPage.setVercode('0');
        angularLoginPage.loginclick();
        browser.sleep(1000);
        gotomanagerPage.img01click(); 
        browser.sleep(2000);
        gotomanagerPage.managerclick();
        browser.sleep(2000);

        addbuyorder.ordersclick();
        addbuyorder.sellingordersclick();

        browser.sleep(2000);
        element(by.xpath('//nz-layout/nz-content/div[2]/div/div[2]/div[4]/div[4]/button')).click();
        browser.sleep(2000);
        element(by.xpath('//nz-modal/div/div[2]/div[1]/div/div/div[3]/button[1]')).click();
        browser.sleep(1000);

        expect(element(by.xpath('//nz-message-container/div/nz-message/div/div/div/span')).getText()).toEqual("Submitted successfully, your order has been accepted!");

        /*
        var orderlist01 = element.all(by.xpath('//app-order-account/nz-layout/nz-layout/nz-content/div[2]/div/div[2]/div'));
        var n = orderlist01.length();
        if(orderlist01.last().getText() == " YUBO  1.33  1000"){
            element(by.xpath('//app-order-account/nz-layout/nz-layout/nz-content/div[2]/div/div[2]/div[n]/div[4]/button')).click();
            browser.sleep();
            element(by.xpath('//*[@id="cdk-overlay-8"]/nz-modal/div/div[2]/div[1]/div/div/div[3]/button[1]/span')).click();

        }else{};

        addbuyorder.myordersclick();
        var orderlist02 = element.all(by.xpath('//app-order-account/nz-layout/nz-layout/nz-content/div[2]/div/div[2]/div'));
        
        expect(orderlist.last().getText()).toEqual(" 2020-10-18  -  -  YUBO  Accepting  1000  £ 1.33  - ");
        */
    });
        
    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});