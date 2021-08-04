const { element } = require("protractor");

var addsellorder = function(){
    var eye = element(by.xpath('//nz-layout/app-essential-info/nz-layout/nz-layout/nz-content/div[2]/div/div/div/div[4]/em'));//进入订单页面的图片
    //var tranctiontype = element(by.xpath('//nz-layout/nz-content/div/div/div[1]/div[2]/div[1]/div/div[2]/nz-select/div'));//tranctiontype
    var sellcertificate = element(by.xpath('//nz-layout/nz-content/div/div/div[2]/div/div[2]/div[1]'));//
    var shareNumber = element(by.xpath('//nz-layout/nz-layout/nz-content/div/div/div[1]/div[2]/div[2]/div[1]/div[2]/input'));
    var prise = element(by.xpath('//nz-layout/nz-content/div/div/div[1]/div[2]/div[2]/div[2]/div[2]/input'));
    var sendemail = element(by.xpath('//nz-layout/nz-content/div/div/div[1]/div[2]/div[3]/div/button'));
    //var comfirm = element(by.xpath('//*[@id="cdk-overlay-30"]/nz-modal/div/div[2]/div[1]/div/div/div[2]'));
    //var yes = element(by.xpath('//*[@id="cdk-overlay-30"]/nz-modal/div/div[2]/div[1]/div/div/div[3]/button[1]'));
    var yes = element(by.xpath('//div[@class="cdk-overlay-container"]/div[5]//div/button[1]'));
    var no = element(by.xpath('//div[@class="cdk-overlay-container"]/div[5]//div/button[2]'));
    var orders = element(by.xpath('//nz-layout/nz-sider/div/app-companyguide/ul/li[2]/span'));


    this.eyeclick = function(){
        eye.click();
    }
/*
    this.tranctiontypeclick = function(){
        tranctiontype.click();
    }
*/
    this.sellcertificateclick = function(){
        sellcertificate.click();
    }

    this.sendemailclick = function(){
        sendemail.click();
    }

    this.yesclick = function(){
        yes.click();
    }

    this.noclick = function(){
        no.click();
    }

    this.ordersclick = function(){
        orders.click();
    }


    this.setshareNumber = function(number){
        shareNumber.sendKeys(number);
    }

    this.setprise = function(prise01){
        prise.sendKeys(prise01);
    }

    this.clearshareNumber = function(){
        shareNumber.clear();
    }

    this.clearprise = function(){
        prise.clear();
    }
}


module.exports = new addsellorder();