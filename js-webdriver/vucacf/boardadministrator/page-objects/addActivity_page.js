var AddActivityPage = function(){
    var goToActivitysList = element(by.xpath('//div[@class="bottom-left"]//div[@class="title-right"]'));
    var addActivity = element(by.buttonText("添加活动"));
    var activityTitle = element(by.xpath('//input[@placeholder="请输入活动主题"]'));//活动主题
    var activityTime = element(by.xpath('//input[@placeholder="请选择活动时间"]'));//活动时间
    var today = element(by.xpath('//div[@class="ant-calendar-footer  "]//today-button'));//活动时间的今天
    var activityLocation = element(by.xpath('//input[@placeholder="请输入活动地点"]'));//活动地点
    var activityScale = element(by.xpath('//div[@class="ant-select-selection ant-select-selection--single"]'));//活动规模
    var activityScalenumber = element(by.xpath('//ul[@class="ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical"]/li[2]'));//50-100
    var activitySponsor = element(by.xpath('//input[@placeholder="请输入主办单位名称"]'));//主办单位
    var activityGuidance = element(by.xpath('//input[@placeholder="请输入指导单位名称"]'));//指导单位
    var activityOrganizer  = element(by.xpath('//input[@placeholder="请输入承办单位名称"]'));//承办单位
    var activitySponsorIntroduce = element(by.xpath('//div[@class="input_bg_txt"]/textarea'));//主办单位介绍
    var activityDetail = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//活动详情
    var activityPhotoIframe = element(by.xpath('//*[@title="单图上传"]//iframe'))//活动详情内的图片
    var submit = element(by.xpath('//div[@class="operatelist"]/button[1]'));//发布
    var commit = element(by.xpath("//button[@class='theme-purple spanY']"));//确定
    var commit01 = element(by.xpath("//button[@class='btn']"));//确定


    this.setactivityTitle = function(title){
        activityTitle.sendKeys(title);
    }

    this.setactivityLocation = function(location){
        activityLocation.sendKeys(location);
    }

    this.setactivitySponsor = function(sponsor){
        activitySponsor.sendKeys(sponsor);
    }

    this.setactivityGuidance = function(guidance){
        activityGuidance.sendKeys(guidance);
    }

    this.setactivityOrganizer = function(organizer){
        activityOrganizer.sendKeys(organizer);
    }

    this.setactivitySponsorIntroduce = function(sponsorIntroduce){
        activitySponsorIntroduce.sendKeys(sponsorIntroduce);
    }

    this.setactivityDetail = function(detail){
        activityDetail.sendKeys(detail);
    }

    this.goToActivitysListclick = function(){
        goToActivitysList.click();
    }

    this.addActivityclick = function(){
        addActivity.click();
    }

    this.activityTimeclick = function(){
        activityTime.click();
    }

    this.todayclick = function(){
        today.click();
    }

    this.activityScaleclick = function(){
        activityScale.click();
    }

    this.activityScalenumberclick = function(){
        activityScalenumber.click();
    }

    this.submitclick = function(){
        submit.click();
    }

    this.commitclick = function(){
        commit.click();
    }

    this.commit01click = function(){
        commit01.click();
    }

    this.setactivityTitleClear = function(){
        activityTitle.clear();
    }

    this.setactivityLocationClear = function(){
        activityLocation.clear();
    }

    this.setactivitySponsorClear = function(){
        activitySponsor.clear();
    }

    this.setactivityGuidanceClear = function(){
        activityGuidance.clear();
    }
    this.setactivityOrganizerClear = function(){
        activityOrganizer.clear();
    }
    this.setactivitySponsorIntroduceClear = function(){
        activitySponsorIntroduce.clear();
    }

}

module.exports = new AddActivityPage();