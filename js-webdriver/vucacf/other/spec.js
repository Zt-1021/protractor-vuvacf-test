const { promise } = require("selenium-webdriver");
const { get } = require("http");
const { exception } = require("console");
const { serialize } = require("v8");

function waitFor(testElement, msg) {
  return new Promise(function(resolve, reject) {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(testElement), 5000, msg);
  });
}

function waitForUrlElse() {
  browser.getCurrentUrl().then(function(currentUrl){
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.not(EC.urlIs(currentUrl)), 10000, 'waitForUrlElse() timeout: ' + currentUrl);
  });
}

function login(){
  var username = $('[name=username]'),
        password = $('[name=password]'),
        vercode = $('[name=vercode]'),
        login = element(by.buttonText('登录'));//定位登录页面各元素

    browser.waitForAngularEnabled(false);

    browser.get('http://rdt.vucacf.com/');
    waitFor(username, 'wait for username').then(
      waitFor(password, 'wait for password').then(
        waitFor(vercode, 'wait for vercode').then(
          waitFor(login, 'wait for login button'))));

    //browser.waitForAngularEnabled(true);
    
    username.sendKeys('zt111');//username.sendKeys('v15568568677');
    password.sendKeys("0000000");//password.sendKeys("000000");
    vercode.sendKeys("0");
    login.click();
}
describe('Protractor Demo App', function() {
  login();
  browser.sleep(3000);
  it('should have a title', function() {    
    //browser.sleep(3000);
    //waitForUrlElse();//等待页面加载
    expect(browser.getCurrentUrl())
     .not.toBe('http://rdt.vucacf.com/#/login');//以登录后的页面url与登录之前不一致，判断是否成功登录    
     //browser.sleep(3000);
  });
})

var submit = element(by.buttonText('发布'));
var back = element(by.buttonText("返回"));
var commit = element(by.buttonText("确定"));//弹窗上的确定
var myBoard = element(by.xpath('//ul[@class="ng-star-inserted"]/li[1]'));//我的板块

describe('board should have boardlist',function(){
  var board = element(by.xpath('//li[@class="ant-menu-item ng-star-inserted"][2]'));
  board.click();//进入板块列表页
  browser.sleep(3000);
  var boardlist01 = element.all(by.xpath('//div[@class="menu"]//li')).all(by.xpath('span'));
  //console.log(boardlist01.getText());
  browser.sleep(3000);
  var boardname01 = element(by.xpath('//div[@class="content1 ng-star-inserted"][1]//span[@class="span1"]'));
  browser.sleep(3000);
  boardname01.click();//进入“上海移动互联网创新园”的信息页
  browser.sleep(3000);
  var title01 = element(by.xpath('//div[@class="left-middle block-color"]/div[@class="left-middle-title"]/h1[@class="board"]'));
  
  it('board is "板块"',function(){
    expect(board.getText()).toEqual('板块');
  })

  it('boardnumber and first is "园区"',function(){
    expect(boardlist01.getText()).toEqual(['园区','区域','商会','市场','行业']);
  })

  it('title is equal',function(){
    expect(title01.getText()).toEqual(boardname01.getText());//判断信息页的标题与点击进入的板块是否一致
  })

  describe('goto manager',function(){ 
    browser.sleep(3000);
    var img01 = element(by.xpath('//div[@class="ng-tns-c4-0 ant-menu-submenu-title"]/span[@class="img-circle"]/img'));//进入后台的图片
    var manager = element(by.xpath('//*[@id="cdk-overlay-1"]/div/ul/ul/li[1]'));//管理
    img01.click(); 
    browser.sleep(2000);  
    manager.click();
    //console.log(browser.getCurrentUrl());
    it('goto the boardlist',function(){ 
      expect(browser.getCurrentUrl())
       .toBe('http://rdt.vucacf.com/#/jurisdiction/board/myboard/chooseBoard');
      //expect(element(by.xpath('//div[@class="left-title-wrapper"]/span')).getText()).toEqual("请选择要管理的板块");//点击管理，进入后台，根据进入的页面是否有“请选择要管理的板块”进行判断
    })
    browser.sleep(3000);

    describe("enter into one board",function(){
      browser.sleep(3000);
      manager_board = element.all(by.xpath('//*[@id="btn1"]'));
      manager_board.get(2).click();
      browser.sleep(3000);
      //进入管理板块，判断进入后的页面标题处的板块名是否与编辑处的板块名一致
      it("boardbname is same",function(){
        expect(element(by.xpath('//div[@class="detailName ng-star-inserted"]')).getText()).toEqual(element(by.xpath('//div[@class="name-jurisdiction"]')).getText());
      })     
    });
  })
})













/*
//进入管理后台
describe("manager", function() {
  
  //it("manager board",function(){
  //    expect(boardlist02.length).toEqual(boardName.length);     
  //});
  
  //进入管理板块，判断进入后的页面标题处的板块名是否与编辑处的板块名一致；
  it("enter into one board",function(){
    //element(by.xpath('//*[@id="btn1"]')).click();//只有一个板块，后面待优化多个板块的
    manager_board = element.all(by.xpath('//*[@id="btn1"]'));
    manager_board.get(2).click();
    browser.sleep(3000);
    expect(element(by.xpath('//div[@class="detailName ng-star-inserted"]')).getText()).toEqual(element(by.xpath('//div[@class="name-jurisdiction"]')).getText());      
  });
  
  //编辑板块的基本信息
  it("redact board ",function(){
    var editBoard = element(by.css('.edit_clas'));//编辑按钮
    var boardname = element(by.xpath('//input[@placeholder="请输入辖区名称"]'));
    var officialWebsite = element(by.xpath('//input[@placeholder="请输入官方网站"]'));
    var contactNumber = element(by.xpath('//input[@placeholder="请输入联系电话"]'));
    var fax = element(by.xpath('//input[@placeholder="请输入传真"]'));
    var email = element(by.xpath('//input[@placeholder="请输入联系邮箱"]'));
    var officialAddress = element(by.xpath('//input[@placeholder="请输入办公地址"]'));
    var introduce = element(by.xpath('//*[@id="textArea"]'));//辖区介绍
    var photoInput = element(by.xpath('//div[@class="uploadList"]//div[@class="ant-upload"]/input'));//辖区照片
    var logoInput = element(by.xpath('//app-upload[@class="avatar-uploader"]//div[@class="ant-upload"]/input'));//辖区logo
    
    editBoard.click();
    boardname.clear();
    boardname.sendKeys("汪东板块");
    officialWebsite.clear();
    officialWebsite.sendKeys("www.wangdong.com");
    contactNumber.clear();
    contactNumber.sendKeys("021-12345");
    fax.clear();
    fax.sendKeys("021-1234567");
    email.clear();
    email.sendKeys("wd@163.com");
    officialAddress.clear();
    officialAddress.sendKeys("上海富由");
    introduce.clear();
    introduce.sendKeys("上海富由");
    photoInput.clear();
    photoInput.sendKeys("C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\T.png");
    browser.sleep(3000);
    logoInput.sendKeys("C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\NoPath - 副本.png");
    browser.sleep(3000);
    submit.click();
    browser.sleep(3000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功");
    commit.click();
    //expect(element(by.xpath('//div[@class="container-l"]/img"]')).attr("src")).not.toEqual("/assets/jurisdiction/companyLogo.png");

  });


  //板块领导
  it("edit the leader",function(){
    //进入领导列表页
    goToLeaderList = element(by.xpath('//div[@class="right-item"]/div[1]//div[@class="title-right"]'));
    goToLeaderList.click();
    browser.sleep(1000);
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual("所有领导");

    //进入添加领导页面
    addLeader = element(by.buttonText("添加领导"));
    addLeader.click();
    browser.sleep(1000);
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual('添加领导');

    //填写领导信息
    var leaderName = element(by.xpath('//input[@placeholder="请键入名字"]'));//领导名字
    var leaderPosition = element(by.xpath('//input[@placeholder="请键入职位"]'));//领导职位
    var leaderRecord = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//领导履历
    var leaderPhotoInput = element(by.xpath('//div[@class="ant-upload"]/input'));//上传照片

    leaderName.sendKeys('测试领导');
    leaderPosition.sendKeys('测试');
    leaderRecord.click();
    leaderRecord.sendKeys('测试领导，测试领导，测试领导，测试测试测试');

    browser.sleep(1000);
    leaderPhotoInput.sendKeys("C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\wKgCbF2RlfyAL1NPAAAa1E29Ncg770.png");
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功！");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("测试领导");
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[2]')).getText()).toEqual("测试");

    //返回板块主页面，查看新添加的领导是否显示
    //myBoard.click();
    //browser.sleep(1000);
    //expect(element(by.xpath('//div[@class="right-item"]/div[@class="list-item"][1]//div[@class="item-content"]/div[1]')).getText()).toEqual("测试领导");
     
    //修改领导信息
    //goToLeaderList.click();
    var editLead = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));
    editLead.click();
    browser.sleep(1000);
    leaderPosition.clear();
    leaderPosition.sendKeys("测试领导职位");
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功！");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[2]')).getText()).toEqual("测试领导职位");


    //删除领导
    var deleteLead = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));
    deleteLead.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("删除成功");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).not.toEqual("测试领导");
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[2]')).getText()).not.toEqual("测试领导职位");

    //返回板块主页面，查看删除领导是否显示
    //myBoard.click();
    //browser.sleep(1000);
    //expect(element(by.xpath('//div[@class="right-item"]/div[@class="list-item"][1]//div[@class="item-content"]/div[1]')).getText()).not.toEqual("测试领导");
  
  });
  
  
  myBoard.click();
  browser.sleep(1000);
  //通知公告
  it("edit the notify",function(){

    //进入公告列表页
    goToNotifyList = element(by.xpath('//div[@class="right-item"]/div[2]//div[@class="title-right"]'));
    goToNotifyList.click();
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual('通知公告');

    //进入添加公告页面

    addLeader = element(by.buttonText("添加公告"));
    addLeader.click();
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual('添加公告');

    //公告所需元素
    notifyTitle = element(by.xpath('//div[@class="form-group"]//input[@placeholder="请键入公告题目"]'));//标题
    notifyKeyWorld = element(by.xpath('//div[@class="form-group"]//input[@placeholder="请输入三个关键词，以“，”隔开"]'));//关键字
    notifySource = element(by.xpath('//div[@class="form-group"]//select'));//公告来源;
    notifyLinkChoose = element(by.xpath('//div[@class="form-group"]//select/option[2]'));//外链公告
    notifyContent = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//自由公告所需填写的公告内容
    notifyAccessory = element(by.xpath('//div[@class="ant-upload"]/input'));//上传附件，非必选项
    notifyLink = element(by.xpath('//div[@id="container"]/input'));//外链公告的外链地址

    //添加自有公告
    notifyTitle.sendKeys("自有公告");
    notifyKeyWorld.sendKeys("自有");
    notifyContent.click();
    notifyContent.sendKeys("自有公告添加测试");
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功！");

    //添加外链公告
    commit.click();
    browser.sleep(1000);
    addLeader.click();
    notifyTitle.sendKeys("外链公告");
    notifyKeyWorld.sendKeys("外链");
    notifySource.click();
    notifyLinkChoose.click();
    notifyLink.sendKeys('http://www.jlccs.org/index/Lists/show/catid/15/id/393.html');
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功！");


    //修改公告
    commit.click();
    browser.sleep(1000);
    var editNotify = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));
    editNotify.click();
    browser.sleep(1000);
    notifyTitle.clear();
    notifyTitle.sendKeys("重新编辑外链公告");
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功！");
    browser.sleep(1000);
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("重新编辑外链公告");


    //删除公告
    //commit.click();
    browser.sleep(1000);
    var deleteNotify = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));
    deleteNotify.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("删除成功");
    browser.sleep(1000);
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).not.toEqual("重新编辑自有公告");
    myBoard.click();
    browser.sleep(1000);
  });
  
  it("organization chart",function(){

    //进入组织架构编辑页
    goToOrganization = element(by.xpath('//div[@class="right-item"]/div[3]//div[@class="title-right"]'));
    goToOrganization.click();
    expect(element(by.xpath('//nz-breadcrumb[@class="breadcrumb ant-breadcrumb"]/nz-breadcrumb-item[3]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual('组织架构');

    //添加组织架构图
    addPhoto = element(by.buttonText("添加图片"));
    addPhoto.click();
    choosePhoto = element(by.xpath('//div[@class="ant-upload"]/input'));
    choosePhoto.sendKeys("C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\157.png");//C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\wKgCbF2RlfyAL1NPAAAa1E29Ncg770.png；C:\\Users\\Administrator\\Desktop\\测试需求文档\\图片\\157.png
    browser.sleep(2000);
    commit.click();
    browser.sleep(5000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功");
    browser.sleep(1000);
    cc = element(by.xpath('//button[@class="theme-purple spanY"]'));
    cc.click();
    browser.sleep(1000);
    myBoard.click();
    browser.sleep(1000);
  });

  it("edit the news",function(){
    //进入新闻列表页
    goToNewsList = element(by.xpath('//div[@class="right-item"]/div[4]//div[@class="title-right"]'));
    goToNewsList.click();
    browser.sleep(1000);
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual("所有新闻");

    //进入添加新闻页面
    addNew = element(by.buttonText("添加新闻"));
    addNew.click();
    browser.sleep(1000);
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual('添加新闻');

    //填写新闻信息
    var newTitle = element(by.xpath('//input[@placeholder="请输入新闻标题"]'));//新闻标题
    var newTab = element(by.xpath('//input[@placeholder="请输入新闻标签"]'));//新闻标签
    var newContent = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//新闻内容
    var newTop = element(by.xpath('//label[@nzvalue="1"]'));//置顶展示
    var newNotTop = element(by.xpath('//label[@nzvalue="0"]'));//不置顶展示

    newTitle.sendKeys('测试新闻');
    newTab.sendKeys('测试');
    newContent.click();
    newContent.sendKeys('测试新闻，测试新闻测试新闻，测试新闻测试新闻');
    newTop.click();
    browser.sleep(1000);
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("测试新闻");
   
    //修改新闻信息
    var editNew = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));
    editNew.click();
    browser.sleep(1000);
    newTitle.clear();
    newTitle.sendKeys("重新编辑新闻标题");
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("重新编辑新闻标题");


    //删除新闻
    var deleteNew = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));
    deleteNew.click();
    browser.sleep(2000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("删除成功");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).not.toEqual("重新编辑新闻标题");
  })
  
  it("edit the activity",function(){
    //进入活动列表页
    goToActivitysList = element(by.xpath('//div[@class="bottom-left"]//div[@class="title-right"]'));
    goToActivitysList.click();
    browser.sleep(1000);
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual("所有活动");

    //进入添加活动页面
    addActivity = element(by.buttonText("添加活动"));
    addActivity.click();
    browser.sleep(1000);
    expect(element(by.xpath('//nz-breadcrumb-item[@class="breadcrumb-item"]/span[@class="ant-breadcrumb-link"]')).getText()).toEqual('添加活动');

    //填写活动信息
    var activityTitle = element(by.xpath('//input[@placeholder="请输入活动主题"]'));//活动主题
    var activityTime = element(by.xpath('//input[@placeholder="请选择活动时间"]'));//活动时间
    var today = element(by.xpath('//div[@class="ant-calendar-footer  "]//today-button'));//活动时间的今天
    var activityLocation = element(by.xpath('//input[@placeholder="请输入活动地点"]'));//活动地点
    var activityScale = element(by.xpath('//div[@class="ant-select-selection ant-select-selection--single"]'));//活动规模
    var activitySponsor = element(by.xpath('//input[@placeholder="请输入主办单位名称"]'));//主办单位
    var activityGuidance = element(by.xpath('//input[@placeholder="请输入指导单位名称"]'));//指导单位
    var activityOrganizer  = element(by.xpath('//input[@placeholder="请输入承办单位名称"]'));//承办单位
    var activitySponsorIntroduce = element(by.xpath('//div[@class="input_bg_txt"]/textarea'));//主办单位介绍
    var activityDetail = element(by.xpath('//div[@class="edui-editor-iframeholder edui-default"]/iframe'));//活动详情
    var activityPhotoIframe = element(by.xpath('//*[@title="单图上传"]//iframe'))//活动详情内的图片

    activityTitle.sendKeys('测试活动');
    activityTime.click();
    today.click();
    //activityTime.sendKeys('2020-07-21');
    activityLocation.sendKeys('上海富由');
    activityScale.click();
    element(by.xpath('//ul[@class="ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical"]/li[2]')).click();
    activitySponsor.sendKeys('上海富由');
    activityGuidance.sendKeys('上海富由');
    activityOrganizer.sendKeys('上海富由');
    activitySponsorIntroduce.sendKeys('上海富由');
    activityDetail.sendKeys('上海富由');
    activityDetail.sendKeys('<img src="group1/M00/00/67/77c6a7efce1b9d160a062583fedeb48f8d54640b.png"/>');//链接存进数据库，但是显示有问题，待解决

    //browser.switchTo().frame(activityPhotoIframe);//.getWebElement()
    //activityPhoto = element(by.xpath('//div[@class="edui-default"]//input'));
    //activityPhoto.sendKeys("http://192.168.2.108:8888/group1/M00/00/67/77c6a7efce1b9d160a062583fedeb48f8d54640b.png");
    //browser.switch_to_default_content()//返回默认的iframe
    
    browser.sleep(1000);
    submit.click();
    browser.sleep(1000);
    //expect(element(by.xpath('//div[@class="btn_pic2')).getText()).toEqual(" 保存成功!");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("测试活动");
   
    //修改活动信息
    var editAcvitify = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][1]'));
    editAcvitify.click();
    browser.sleep(1000);
    activityTitle.clear();
    activityTitle.sendKeys("重新编辑活动主题");
    submit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("保存成功");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("重新编辑活动主题");

    //删除活动
    var deleteAcvitify = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"][2]'));
    deleteAcvitify.click();
    browser.sleep(2000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("删除成功");
    commit.click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).not.toEqual("重新编辑活动主题");
    
  })

  
  //板块企业导入
  it("uploadEnterprise" , function(){
    
    boardEnterprise = element(by.xpath("//li[@class='ant-menu-item']/div[@class='newPos']"));//板块企业
    addEnterprise = element(by.xpath('//div[@class="right-title-wrapper"]/button'));//添加企业
    addOneEnterprise = element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[1]'));//添加企业--单个添加
    manyAddEnterprise = element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[2]'));//批量导入企业
    //clickChooseFile = element(by.xpath('//div[@class="choose-txt ng-star-inserted"]'));//点击选择文件
    clickChooseFile = element(by.xpath('//div[@class="ant-upload"]/input'));
    companyName = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入公司名称"]'));
    companySocialCreditCode = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入社会信用代码"]'));
    contactName = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入联系人姓名"]'));//联系人信息三个可不填，要填必须全填
    contactPosition = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入联系人职位"]'));
    contactNumber = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入联系方式"]'));

    //1.单个导入企业
    boardEnterprise.click();
    addEnterprise.click();
    addOneEnterprise.click();
    companyName.sendKeys('深圳市京深大通商贸有限公司');
    companySocialCreditCode.sendKeys('91440300305929662M');
    element(by.xpath('//div[@class="operate_btn"]/button[1]')).click();
    browser.sleep(2000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("添加成功！");
    element(by.xpath('//button[@class="theme-purple spanY"]')).click();
    browser.sleep(2000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("深圳市京深大通商贸有限公司");
    browser.sleep(2000);

    //搜索公司
    searchCompany = element(by.xpath('//div[@class="search-box-wrapper"]/input'));
    searchButton = element(by.xpath('//div[@class="search-box-wrapper"]/button'));
    searchCompany.sendKeys('深圳市京深大通商贸有限公司');
    searchButton.click();
    browser.sleep(2000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).toEqual("深圳市京深大通商贸有限公司");
    searchCompany.clear();
    searchButton.click();
    browser.sleep(4000);

    //删除单家公司
    var deleteCompany = element(by.xpath('//tr[@class="ng-star-inserted"][1]//img[@class="icon"]'));
    deleteCompany.click();
    browser.sleep(2000);
    element(by.xpath('//app-enterprise-list[@class="ng-star-inserted"]/div/div/div[@class="dialog_btn"]/button[1]')).click();
    browser.sleep(1000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).toEqual("删除成功！");
    element(by.xpath('//button[@class="theme-purple spanY"]')).click();
    browser.sleep(1000);
    expect(element(by.xpath('//tr[@class="ng-star-inserted"][1]/td[1]')).getText()).not.toEqual("深圳市京深大通商贸有限公司");



    
    //2.批量导入
    boardEnterprise.click();
    addEnterprise.click();
    manyAddEnterprise.click();
    //browser.execute_script(arguments[0].value = 'D:\js-webdriver\files\模板7.xls',clickChooseFile);
    clickChooseFile.sendKeys("D:\\js-webdriver\\files\\模板7.xls");
  
    browser.sleep(2000);
    //expect(element(by.xpath('//span[@class="ant-upload-list-item-name ng-tns-c15-5 ng-star-inserted"]')).getText()).toContain('.xls');
    element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[1]')).click();
    browser.sleep(100000);
    expect(element(by.xpath('//div[@class="btn_pic2"]')).getText()).not.toBe("添加失败")
    


  });
  
});
*/