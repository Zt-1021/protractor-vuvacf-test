var managerboardPage = function(){
    var manager_board = element.all(by.xpath('//*[@id="btn1"]'));

    this.managerboardclick = function(){
        manager_board.get(7).click();
    }

}

module.exports = new managerboardPage();