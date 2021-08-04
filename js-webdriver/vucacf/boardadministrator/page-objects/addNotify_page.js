var AddNotifyPage = function(){
    var goToNotifyList = element(by.xpath('//div[@class="right-item"]/div[2]//div[@class="title-right"]'));
    var addNotify = element(by.buttonText("添加公告"));
    var notifyTitle = element(by.xpath('//div[@class="form-group"]//input[@placeholder="请键入公告题目"]'));//标题
    var notifyKeyWord = element(by.xpath('//div[@class="form-group"]//input[@placeholder="请输入三个关键词，以“，”隔开"]'));//关键字
    var notifySource = element(by.xpath('//div[@class="form-group"]//select'));//公告来源;
    var notifyLinkChoose = element(by.xpath('//div[@class="form-group"]//select/option[2]'));//外链公告
    var notifyContent = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//自由公告所需填写的公告内容
    var notifyAccessory = element(by.xpath('//div[@class="ant-upload"]/input'));//上传附件，非必选项
    var notifyLink = element(by.xpath('//div[@id="container"]/input'));//外链公告的外链地址
    var submit = element(by.xpath('//div[@class="operatelist"]/button[1]'));//发布
    var commit = element(by.xpath("//button[@class='theme-purple spanY']"));//确定


    this.setnotifyTitle = function(title){
        notifyTitle.sendKeys(title);
    }

    this.setnotifyKeyWord = function(keyword){
        notifyKeyWord.sendKeys(keyword);
    }

    this.setnotifyContent = function(content){
        notifyContent.sendKeys(content);
    }

    this.setnotifyAccessory = function(accessory){
        notifyAccessory.sendKeys(accessory);
    }

    this.setnotifyLink = function(link){
        notifyLink.sendKeys(link);
    }    

    this.goToNotifyListclick = function(){
        goToNotifyList.click();
    }

    this.addNotifyclick = function(){
        addNotify.click();
    }

    this.notifySourceclick = function(){
        notifySource.click();
    }

    this.notifyLinkChooseclick = function(){
        notifyLinkChoose.click();
    }

    this.notifyContentclick = function(){
        notifyContent.click();
    }

    this.submitclick = function(){
        submit.click();
    }

    this.commitclick = function(){
        commit.click();
    }

    this.setnotifyTitleClear = function(){
        notifyTitle.clear();
    }

    this.setnotifyKeyWordClear = function(){
        notifyKeyWord.clear();
    }

    this.setnotifyContentClear = function(){
        notifyContent.clear();
    }

    this.setnotifyLinkClear = function(){
        notifyLink.clear();
    }

}

module.exports = new AddNotifyPage();