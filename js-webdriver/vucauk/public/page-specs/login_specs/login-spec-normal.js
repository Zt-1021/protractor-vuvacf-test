var angularLoginPage = require('D:\\js-webdriver\\vucauk\\public\\page-objects\\login-page.js');
const { notDeepEqual } = require('assert');
const { browser } = require('protractor');

describe('Protractor Demo App', function() {

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

        expect(browser.getCurrentUrl()).not.toBe('http://rdt.vucauk.com/#/login');//以登录后的页面url与登录之前不一致，判断是否成功登录    
    });


    afterEach(function() {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

});