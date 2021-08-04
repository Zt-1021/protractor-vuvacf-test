var DeleteCompanyPage = function(){
    var deleteCompany = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"]'));
    var commit02 = element(by.xpath('//app-enterprise-list[@class="ng-star-inserted"]/div/div/div[@class="dialog_btn"]/button[1]'));

    this.deleteCompanyclick = function(){
        deleteCompany.click();
    }

    this.commit02Click = function(){
        commit02.click();
    }

}

module.exports = new DeleteCompanyPage();