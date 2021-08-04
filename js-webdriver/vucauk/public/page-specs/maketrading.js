var angularLoginPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\login-page.js');
var gotomanagerPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\gotoManage_page.js');
var maketradingPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\maketrading_page.js');
const { element, ExpectedConditions } = require('protractor');

describe("Asynchronous specs", function() {
   
    var originalTimeout;

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        // 设置全局的默认超时时间
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1200000;
    });

    it('make the trading', function() {  
        angularLoginPage.get();
       
        angularLoginPage.login01click();
        angularLoginPage.setName('vuca@vucacapital.com');//zt_1021@163.com;vuca@vucacapital.com
        angularLoginPage.setPassword('000000');
        angularLoginPage.setVercode('0');
        angularLoginPage.loginclick();
        browser.sleep(1000);
        gotomanagerPage.img01click(); 
        browser.sleep(2000);
        gotomanagerPage.managerclick();
        browser.sleep(2000);
        
        maketradingPage.orderlistclick();
        browser.sleep(2000);
        var usertype = element(by.xpath('//nz-layout/nz-content/div[2]/div/div[2]/div[1]/div[1]')).getText();

        /*
        if(usertype.toString().includes('Buyer')){
            
            maketradingPage.edittradingclick();
            browser.sleep(2000);
            maketradingPage.chooseselleruserclick();
            browser.sleep(2000);
            maketradingPage.chooseclick();
            browser.sleep(2000);
            maketradingPage.settranAmount('1330');
            maketradingPage.settranNumber('1000');
            maketradingPage.submitclick();
        }else
        {
            maketradingPage.edittradingclick();
            browser.sleep(2000);
            maketradingPage.choosebuyeruserclick();
            browser.sleep(2000);
            maketradingPage.chooseclick();
            browser.sleep(2000);
            maketradingPage.settranAmount('1330');
            maketradingPage.settranNumber('1000');
            maketradingPage.submitclick();
        };
        */

        maketradingPage.edittradingclick();
        browser.sleep(2000);
        maketradingPage.chooseselleruserclick();
        browser.sleep(2000);
        maketradingPage.chooseclick();
        browser.sleep(2000);
        maketradingPage.settranAmount('1330');
        maketradingPage.settranNumber('1000');
        maketradingPage.submitclick();
        browser.sleep(2000);

        expect(element(by.xpath('//nz-layout/nz-content/div[2]/div/div[2]/div[1]/div[6]'))).not.toBe(' Application for submission ');
        /*
        var choosebuyeruser = element(by.xpath('//nz-layout/nz-content/div/div[1]/div[2]/div[1]/div/div[3]/div[2]/div'));
        
        if(choosebuyeruser.getText() == " Select the buyer's user "){
            maketradingPage.choosebuyeruserclick();
        }else{
            maketradingPage.chooseselleruserclick();
        };

        maketradingPage.chooseclick();
        maketradingPage.settranAmount('1330');
        maketradingPage.settranNumber('1000');
        maketradingPage.submitclick();
        */


    });

    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
});