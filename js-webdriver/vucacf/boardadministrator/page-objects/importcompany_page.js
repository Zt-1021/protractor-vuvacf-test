var importCompanyPage = function(){
    var manyAddEnterprise = element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[2]'));
    var clickChooseFile = element(by.xpath('//div[@class="ant-upload"]/input'));
    var commit03 = element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[1]'));

    this.manyAddEnterpriseclick = function(){
        manyAddEnterprise.click();
    }

    this.setclickChooseFile = function(filename){
        clickChooseFile.sendKeys(filename);
    }

    this.commit03click = function(){
        commit03.click();
    }
}

module.exports = new importCompanyPage();