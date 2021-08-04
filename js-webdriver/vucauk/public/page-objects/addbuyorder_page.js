const { element } = require("protractor");

var addbuyorder = function(){
    var orders = element(by.xpath('//nz-layout/nz-sider/div/app-companyguide/ul/li[2]/span'));
    var sellingorders = element(by.xpath('//nz-layout/nz-content/div[1]/form/nz-form-item/nz-form-control/div/span/div/div[3]'));
    var myorders = element(by.xpath('//nz-layout/nz-content/div[1]/form/nz-form-item/nz-form-control/div/span/div/div[1]'));



    this.ordersclick = function(){
        orders.click();
    }

    this.sellingordersclick = function(){
        sellingorders.click();
    }

    this.myordersclick = function(){
        myorders.click();
    }
}


module.exports = new addbuyorder();