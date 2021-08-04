var EditNotifyPage = function(){
    var editNotify = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));

    this.editNotifyclick = function(){
        editNotify.click();
    }

}

module.exports = new EditNotifyPage();