var AddNewPage = function(){
    var goToNewsList = element(by.xpath('//div[@class="right-item"]/div[4]//div[@class="title-right"]'));
    var addNew = element(by.buttonText("添加新闻"));
    var newTitle = element(by.xpath('//input[@placeholder="请输入新闻标题"]'));//新闻标题
    var newTab = element(by.xpath('//input[@placeholder="请输入新闻标签"]'));//新闻标签
    var newContent = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//新闻内容
    var newTop = element(by.xpath('//label[@nzvalue="1"]'));//置顶展示
    var newNotTop = element(by.xpath('//label[@nzvalue="0"]'));//不置顶展示
    var submit = element(by.xpath('//div[@class="operatelist"]/button[1]'));//发布
    var commit = element(by.xpath("//button[@class='theme-purple spanY']"));//确定


    this.setnewTitle = function(title){
        newTitle.sendKeys(title);
    }

    this.setnewTab = function(tab){
        newTab.sendKeys(tab);
    }

    this.setnewContent = function(content){
        newContent.sendKeys(content);
    }

    this.goToNewsListclick = function(){
        goToNewsList.click();
    }

    this.addNewclick = function(){
        addNew.click();
    }

    this.newContentclick = function(){
        newContent.click();
    }

    this.newTopclick = function(){
        newTop.click();
    }

    this.newNotTopclick = function(){
        newNotTop.click();
    }

    this.submitclick = function(){
        submit.click();
    }

    this.commitclick = function(){
        commit.click();
    }

    this.setnewTitleClear = function(){
        newTitle.clear();
    }

    this.setnewTabClear = function(){
        newTab.clear();
    }

    this.setnewContentClear = function(){
        newContent.clear();
    }

}

module.exports = new AddNewPage();