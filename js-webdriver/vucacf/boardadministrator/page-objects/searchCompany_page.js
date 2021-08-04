var SearchCompanyPage = function(){
    var searchCompany = element(by.xpath('//div[@class="search-box-wrapper"]/input'));
    var searchButton = element(by.xpath('//div[@class="search-box-wrapper"]/button'));

    this.setsearchCompany = function(companyname){
        searchCompany.sendKeys(companyname);
    }

    this.searchButtonClick = function(){
        searchButton.click();
    }

}

module.exports = new SearchCompanyPage();