const { promise } = require("selenium-webdriver");
const { get } = require("http");
const { exception } = require("console");
const{webshot} = require("webshot");

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
        imgcode = $('[class="code"]'),
        login = element(by.buttonText('登录'));//定位登录页面各元素

    browser.waitForAngularEnabled(false);
    browser.get('http://www.vucacf.com/');
    waitFor(username, 'wait for username').then(
      waitFor(password, 'wait for password').then(
        waitFor(vercode, 'wait for vercode').then(
            waitFor(imgcode,'wait for image').then(
                waitFor(login, 'wait for login button')))));

    //browser.waitForAngularEnabled(true);

    
   /* 
    username.sendKeys('13519181075');
    password.sendKeys("181075");
    vercode.sendKeys("0");
    login.click();
     //browser.sleep(3000);
     waitForUrlElse();//等待页面加载

     expect(browser.getCurrentUrl())
      .not.toBe('http://rdt.vucacf.com/#/login');//以登录后的页面url与登录之前不一致，判断是否成功登录
     
      //browser.sleep(5000);

     */
  });
  


  /*
  it("uploadEnterprise" , function(){
    //板块企业：1.批量导入
  boardEnterprise = element(by.xpath("//li[@class='ant-menu-item']/div[@class='newPos']"));//板块企业
  addEnterprise = element(by.xpath('//div[@class="right-title-wrapper"]/button'));//添加企业
  manyAddEnterprise = element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[2]'));//批量导入企业
  //clickChooseFile = element(by.xpath('//div[@class="choose-txt ng-star-inserted"]'));//点击选择文件
  clickChooseFile = element(by.xpath('//div[@class="ant-upload"]/input'));

  boardEnterprise.click();
  addEnterprise.click();
  manyAddEnterprise.click();
  //browser.execute_script(arguments[0].value = 'D:\js-webdriver\files\模板7.xls',clickChooseFile);
  clickChooseFile.sendKeys("D:\\js-webdriver\\files\\模板7.xls");

  browser.sleep(2000);
  element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[1]')).click();
  browser.sleep(100000);
  expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("添加成功");
    });
  */
});
