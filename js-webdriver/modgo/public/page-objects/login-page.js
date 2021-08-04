var AngularLoginPage = function(){
    var login01 = element(by.xpath('//*[@id="login"]'));
    var username = element(by.xpath('//*[@id="name"]'));
    var userpassword = element(by.xpath('//*[@id="password"]'));
    var uservercode = element(by.xpath('//*[@id="code"]'));
    var login = element(by.xpath('//img[@class="btn"]'));//定位登录页面各元素

    this.get = function(){
        browser.ignoreSynchronization = true;   //这句代码很重要，不写会在11s的时候报错
        browser.driver.manage().window().maximize();  //浏览器最大化
        browser.get('https://rdt.modgo.pro/');
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

    this.login01click = function(){
        login01.click();
    }

    this.loginclick = function(){
        login.click();
    }
}

module.exports = new AngularLoginPage();