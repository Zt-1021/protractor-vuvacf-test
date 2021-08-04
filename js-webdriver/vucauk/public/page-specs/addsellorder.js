var angularLoginPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\gotoManage_page.js');
var addsellorder = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\addsellorder_page.js');
const { browser, element } = require('protractor');

describe("Asynchronous specs", function() {
   
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        // 设置全局的默认超时时间
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1200000;
    });

    it('addsellorder', function() {  
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
        addsellorder.eyeclick();
        browser.sleep(1000);
        addsellorder.sellcertificateclick();
        addsellorder.clearshareNumber();
        addsellorder.setshareNumber('1000');
        addsellorder.clearprise();
        addsellorder.setprise('1.33');
        addsellorder.sendemailclick();
        browser.sleep(3000);

        addsellorder.yesclick();
        /*
        var comfiremassage = element(by.xpath('//div[@class="cdk-overlay-container"]/div[5]//div[@class="ant-modal modal-common"]//div[@class="modal_main ng-star-inserted"]')).getText();
        if(comfiremassage.toString().match('Number of shares: 1000')){
            addsellorder.yesclick();
        }else{
            addsellorder.noclick();
            addsellorder.clearshareNumber();
            addsellorder.setshareNumber('1000');
            addsellorder.sendemailclick();
        }
        
        browser.sleep(5000);
        addsellorder.ordersclick();
        browser.sleep(2000);
        var orderlist = element.all('//nz-layout/nz-content/div[2]/div/div[2]/div');
        expect(orderlist.last().getText()).toEqual("2020-10-19  -  -  YUBO  Accepting  1000  £ 1.33  - ");

        */
    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});