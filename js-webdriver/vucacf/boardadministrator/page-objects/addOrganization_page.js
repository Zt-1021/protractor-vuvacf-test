var AddOrganizationPage = function(){
    var goToOrganization = element(by.xpath('//div[@class="right-item"]/div[3]//div[@class="title-right"]'));
    var addPhoto = element(by.buttonText("添加图片"));
    var choosePhoto = element(by.xpath('//div[@class="ant-upload"]/input'));
    var submit = element(by.xpath('//div[@class="operatelist"]/button[1]'));//发布
    var commit01 = element(by.xpath("//button[@class='btn']"));//确定
    //var commit02 = element(by.xpath("//button[@class='theme-purple spanY']"));//确定

    this.goToOrganizationclick = function(){
        goToOrganization.click();
    }

    this.addPhotoclick = function(){
        addPhoto.click();
    }

    this.setchoosePhoto = function(photo){
        choosePhoto.sendKeys(photo);
    }    
    
    this.submitclick = function(){
        submit.click();
    }

    this.commit01click = function(){
        commit01.click();
    }
    
    /*
    this.commit02click = function(){
        commit02.click();
    }
    */

}

module.exports = new AddOrganizationPage();