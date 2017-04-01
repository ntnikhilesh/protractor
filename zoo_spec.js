//describe block is used for testing of contens and it block realy test them
//describe block can contain one or more it block and another describe block as well


describe ("test zoo site for input field on home page ",function(){
//write test
  it("to test input field and check text output",function(){

    browser.get("http://www.thetestroom.com/jswebapp/"); 

    element(by.model("person.name")).sendKeys("I will not subscribe this channel");
    element(by.binding("person.name")).getText().then(function(text){
      console.log(text);
    });
  });
});
