var AddOneCompanyPage = function(){
    var boardEnterprise = element(by.xpath("//li[@class='ant-menu-item']/div[@class='newPos']"));//板块企业
    var addEnterprise = element(by.xpath('//div[@class="right-title-wrapper"]/button'));//添加企业
    var addOneEnterprise = element(by.xpath('//div[@class="dialog_btn ng-star-inserted"]/button[1]'));//添加企业--单个添加
    var companyName = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入公司名称"]'));
    var companySocialCreditCode = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入社会信用代码"]'));
    var contactName = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入联系人姓名"]'));//联系人信息三个可不填，要填必须全填
    var contactPosition = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入联系人职位"]'));
    var contactNumber = element(by.xpath('//div[@class="right_info"]/input[@placeholder="请输入联系方式"]'));
    //var submit = element(by.xpath('//div[@class="operatelist"]/button[1]'));//发布
    var commit = element(by.xpath("//button[@class='theme-purple spanY']"));//确定
    var commit02 = element(by.xpath('//div[@class="operate_btn"]/button[1]'));//确认

    this.setcompanyName = function(companyname){
        companyName.sendKeys(companyname);
    }

    this.setcompanySocialCreditCode = function(code){
        companySocialCreditCode.sendKeys(code);
    }

    this.setcontactName = function(contactname){
        contactName.sendKeys(contactname);
    }
    
    this.setcontactNumber = function(contactnumber){
        contactNumber.sendKeys(contactnumber);
    }
    
    this.setcontactPosition = function(contactposition){
        contactPosition.sendKeys(contactposition);
    }

    this.boardEnterpriseclick = function(){
        boardEnterprise.click();
    }

    this.addEnterpriseclick = function(){
        addEnterprise.click();
    }

    this.addOneEnterpriseclick = function(){
        addOneEnterprise.click();
    }

    this.commit02click = function(){
        commit02.click();
    }

    this.commitclick = function(){
        commit.click();
    }
}

module.exports = new AddOneCompanyPage();