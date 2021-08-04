var layout = function(){

    var img01 = element(by.xpath('//app-header/nz-header/div/div[2]/ul/li/div/span/img'));//进入后台的图片
    var signout = element(by.xpath('//div[@class="cdk-overlay-container"]/div[4]//ul[@class="login_bottom ng-star-inserted"]/li[2]'));

    this.signoutclick = function(){
        signout.click();
    };

    this.img01click = function(){
        img01.click();
    };

}


module.exports = new layout();