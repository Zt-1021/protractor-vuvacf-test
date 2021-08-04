function waitFor(testElement, msg) {
    return new Promise(function(resolve, reject) {
      var EC = protractor.ExpectedConditions;
      browser.wait(EC.presenceOf(testElement), 5000, msg);
    });
  }
  
  function waitForUrlElse() {
    browser.getCurrentUrl().then(function(currentUrl){
      var EC = protractor.ExpectedConditions;
      browser.wait(EC.not(EC.urlIs(currentUrl)), 10000, 'waitForUrlElse() timeout: ' + currentUrl);
    });
  }
  
  describe('Protractor Demo App', function() {
    it('should have a title', function() {
      var username = $('[name=username]'),
          password = $('[name=password]'),
          vercode = $('[name=vercode]'),
          login = element(by.buttonText('登录'));
  
      browser.waitForAngularEnabled(false);
      browser.get('http://rdt.vucacf.com/');
      waitFor(username, 'wait for username').then(
        waitFor(password, 'wait for password').then(
          waitFor(vercode, 'wait for vercode').then(
            waitFor(login, 'wait for login button'))));
  
      //browser.waitForAngularEnabled(true);
      
      username.sendKeys('v15568568677');
      password.sendKeys("000000");
      vercode.sendKeys("0");
      login.click();
  
      
      //browser.sleep(3000);
      waitForUrlElse();
  
      expect(browser.getCurrentUrl())
       .not.toBe('http://rdt.vucacf.com/#/login');
  
       //browser.sleep(5000);
  
    });
    it('click the vuca',function(){
      var vuca = element(by.className('ant-menu-item ng-star-inserted'));
      if (expect(vuca.gettext().toEqual('VUCA'))){
        vuca.click();
      };
  
  
  
  
  
    });
  });