var EditActivityPage = function(){
    var editAcvitify = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));

    this.editAcvitifyclick = function(){
        editAcvitify.click();
    }

}

module.exports = new EditActivityPage();