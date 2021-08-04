var DeleteNotifyPage = function(){
    var deleteNotify = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));

    this.deleteNotifyclick = function(){
        deleteNotify.click();
    }

}

module.exports = new DeleteNotifyPage();