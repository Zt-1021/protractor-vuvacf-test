var AngularLoginPage = function(){
    var username = $('[name=username]'),
        userpassword = $('[name=password]'),
        uservercode = $('[name=vercode]'),
        login = element(by.buttonText('登录'));//定位登录页面各元素

    this.get = function(){
        browser.ignoreSynchronization = true;   //这句代码很重要，不写会在11s的时候报错
        browser.driver.manage().window().maximize();  //浏览器最大化
        browser.get('http://rdt.vucacf.com/');
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

}

module.exports = new AngularLoginPage();