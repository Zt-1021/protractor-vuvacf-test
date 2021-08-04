var DeleteNewsPage = function(){
    var deleteNew = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));

    this.deleteNewclick = function(){
        deleteNew.click();
    }

}

module.exports = new DeleteNewsPage();