var EditNewsPage = function(){
    var editNew = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));

    this.editNewclick = function(){
        editNew.click();
    }

}

module.exports = new EditNewsPage();