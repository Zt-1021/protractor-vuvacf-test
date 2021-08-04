var gotomanagerPage = function(){
    var img01 = element(by.xpath('//app-header/nz-header/div/div[2]/ul/li/div/span/img'));//进入后台的图片
    var manager = element(by.xpath('//*[@id="cdk-overlay-5"]/div/ul/ul/li[1]'));//account

    this.img01click = function(){
        img01.click();
    }
    this.managerclick = function(){
        manager.click();
    }
}

module.exports = new gotomanagerPage();