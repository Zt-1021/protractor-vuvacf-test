var AngularLoginPage = function(){
    var username = element(by.xpath('//app-login/div/div/div/div[2]/form/div[1]/input')),//邮箱
        userpassword = element(by.xpath('//app-login/div/div/div/div[2]/form/div[2]/input')),//密码
        uservercode = element(by.xpath('//app-login/div/div/div/div[2]/form/div[3]/div/input')),//验证码
        login = element(by.xpath('//app-login/div/div/div/div[2]/form/div[5]/button')),//登录页面按钮
        login01 = element(by.xpath('//app-header/nz-header/div/div[2]/div[2]'))//首页的登录

    this.get = function(){
        browser.ignoreSynchronization = true;   //这句代码很重要，不写会在11s的时候报错
        browser.driver.manage().window().maximize();  //浏览器最大化
        browser.get('http://rdt.vucauk.com/');
    }

    this.setName = function(name){
        username.sendKeys(name);
    }

    this.setPassword = function(password){
        userpassword.sendKeys(password);
    }

    this.setVercode = function(vercode){
        uservercode.sendKeys(vercode);
    }

    this.loginclick = function(){
        login.click();
    }

    this.login01click = function(){
        login01.click();
    }
}

module.exports = new AngularLoginPage();