// //describe block is used for testing of contens and it block realy test them

describe ("Adopt an animal on the zoo test site",function(){

  it("should able to correct page", function()
  {
    browser.get("http://www.thetestroom.com/jswebapp/"); 

    //using expect() we can perform validation

    expect(browser.getCurrentUrl()).toContain("jswebapp");
    expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");

  
  });

  it("should able to correct text", function()
  {
    browser.get("http://www.thetestroom.com/jswebapp/"); 

    //using expect() we can perform validation

      var textMessage="I will not subscribe"
    element(by.model("person.name")).sendKeys(textMessage);
    element(by.binding("person.name")).getText().then(function(text)
    {
      expect(text).toEqual("I will not subscribe");
    });
  
  });

  it("should able to correct number of item in dropdown", function()
  {
    browser.get("http://www.thetestroom.com/jswebapp/"); 

    //using expect() we can perform validation

    element(by.buttonText("CONTINUE")).click();
    element(by.model("animal")).$("[value='2']").click();

    element.all(by.css(".ng-pristine option")).then(function(items){
      expect(items.length).toBe(4);
      expect(items[1].getText()).toBe("George the Turtle");
    })
    

    element(by.buttonText("CONTINUE")).click();

   
  
  
  });


  it("should check user is on Thank you page ", function()
  {
    browser.get("http://www.thetestroom.com/jswebapp/"); 

    //using expect() we can perform validation

    element(by.buttonText("CONTINUE")).click();
    element(by.buttonText("CONTINUE")).click();
    expect(browser.getCurrentUrl()).toContain("confirm");
   
  
  
  });
})





// //describe block can contain one or more it block and another describe block as well


// describe ("test zoo site for input field on home page ",function(){
// //write test
//   it("to test input field and check text output",function(){

//     browser.get("http://www.thetestroom.com/jswebapp/"); 

//     element(by.model("person.name")).sendKeys("I will not subscribe this channel");
//     element(by.binding("person.name")).getText().then(function(text){
//       console.log(text);
//     });
//   });
// });
