var gotomanagerPage = function(){
    var img01 = element(by.xpath('//div[@class="ng-tns-c4-0 ant-menu-submenu-title"]/span[@class="img-circle"]/img'));//进入后台的图片
    var manager = element(by.xpath('//*[@id="cdk-overlay-1"]/div/ul/ul/li[1]'));//管理

    this.img01click = function(){
        img01.click();
    }
    this.managerclick = function(){
        manager.click();
    }
}

module.exports = new gotomanagerPage();