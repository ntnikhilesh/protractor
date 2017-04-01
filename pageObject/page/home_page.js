var home_page=function()
{
        this.enterFieldValue=function(value)
        {
            element(by.model('person.name')).sendKeys(value)
        };

        this.getDynamicText=function()
        {
            return element(by.binding('person.name')).getText();
        };

        this.clickContinue=function()
        {
            element(by.buttonText('CONTINUE')).click();
        };
};

module.exports=new home_page();