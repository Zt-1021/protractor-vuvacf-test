var DeleteActivityPage = function(){
    var deleteActivity = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));
   

    this.deleteActivityclick = function(){
        deleteActivity.click();
    }

}

module.exports = new DeleteActivityPage();