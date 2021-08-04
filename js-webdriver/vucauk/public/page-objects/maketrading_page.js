const { element } = require("protractor");

var maketradingPage = function(){
    var orderlist = element(by.xpath('//nz-layout/nz-sider/div/app-companyguide/ul/li[2]/span'));
    var edittrading = element(by.xpath('//nz-layout/nz-content/div[2]/div/div[2]/div[1]/div[9]/div/button'));
    var chooseselleruser = element(by.xpath('//nz-layout/nz-content/div/div[1]/div[2]/div[2]/div/div[3]/div[2]/div'));
    var choosebuyeruser = element(by.xpath('//nz-layout/nz-content/div/div[1]/div[2]/div[1]/div/div[3]/div[2]/div'));
    var tranAmount = element(by.xpath('//nz-layout/nz-content/div/div[1]/div[2]/div[1]/div/div[5]/div[2]/div/input'));
    var tranNumber = element(by.xpath('//nz-layout/nz-content/div/div[1]/div[2]/div[2]/div/div[5]/div[2]/input'));
    var choose = element(by.xpath('//nz-modal/div/div[2]/div[1]/div/div/div/div[2]/div[2]/div[1]/div[6]/span'));
    var submit = element(by.xpath('//nz-layout/nz-content/div/div[2]/div/button[2]'));

    this.orderlistclick = function(){
        orderlist.click();
    }

    this.edittradingclick = function(){
        edittrading.click();
    }

    this.chooseselleruserclick = function(){
        chooseselleruser.click();
    }

    this.choosebuyeruserclick = function(){
        choosebuyeruser.click();
    }

    this.submitclick = function(){
        submit.click();
    }

    this.chooseclick = function(){
        choose.click();
    }


    this.settranAmount = function(amount){
        tranAmount.sendKeys(amount);
    }

    this.settranNumber = function(number){
        tranNumber.sendKeys(number);
    }
}

module.exports = new maketradingPage();