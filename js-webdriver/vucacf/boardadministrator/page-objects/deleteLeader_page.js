var DeleteLeaderPage = function(){
    var deleteLead = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));

    this.deleteLeadclick = function(){
        deleteLead.click();
    }

}

module.exports = new DeleteLeaderPage();