var AddLeaderPage = function(){
    var goToLeaderList = element(by.xpath('//div[@class="right-item"]/div[1]//div[@class="title-right"]'));
    var addLeader = element(by.buttonText("添加领导"));
    var leaderName = element(by.xpath('//input[@placeholder="请键入名字"]'));//领导名字
    var leaderPosition = element(by.xpath('//input[@placeholder="请键入职位"]'));//领导职位
    var leaderRecord = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//领导履历
    var leaderPhotoInput = element(by.xpath('//div[@class="ant-upload"]/input'));//上传照片
    var submit = element(by.xpath('//div[@class="operatelist"]/button[1]'));//发布
    var commit = element(by.xpath("//button[@class='theme-purple spanY']"));//确定


    this.setLeaderName = function(name){
        leaderName.sendKeys(name);
    }

    this.setLeaderPosition = function(position){
        leaderPosition.sendKeys(position);
    }

    this.setLeaderRecord = function(record){
        leaderRecord.sendKeys(record);
    }

    this.setLeaderPhotoInput = function(photoInput){
        leaderPhotoInput.sendKeys(photoInput);
    }    

    this.goToLeaderListclick = function(){
        goToLeaderList.click();
    }

    this.addLeaderclick = function(){
        addLeader.click();
    }

    this.leaderRecordclick = function(){
        leaderRecord.click();
    }

    this.submitclick = function(){
        submit.click();
    }

    this.commitclick = function(){
        commit.click();
    }

    this.setLeaderNameClear = function(){
        leaderName.clear();
    }

    this.setLeaderPositionClear = function(){
        leaderPosition.clear();
    }

    this.setLeaderRecordClear = function(){
        leaderRecord.clear();
    }

}

module.exports = new AddLeaderPage();