var EditLeaderPage = function(){
    var editLead = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));

    this.editLeadclick = function(){
        editLead.click();
    }

}

module.exports = new EditLeaderPage();