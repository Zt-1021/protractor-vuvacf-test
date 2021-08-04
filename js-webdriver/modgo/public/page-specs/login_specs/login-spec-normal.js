var angularLoginPage = require('D:\\js-webdriver\\vucacf\\public\\page-objects\\login-page.js');
const { notDeepEqual } = require('assert');

describe('Protractor Demo App', function() {
    it('should have a title', function() {  
        angularLoginPage.get();
        angularLoginPage.setName('zt111');//v15568568677
        angularLoginPage.setPassword('0000000');//000000
        angularLoginPage.setVercode('0');
        angularLoginPage.loginclick();
        browser.sleep(2000);

        expect(browser.getCurrentUrl()).not.toBe('http://rdt.vucacf.com/#/login');//以登录后的页面url与登录之前不一致，判断是否成功登录    
    });
});