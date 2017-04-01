// Page object

var util=require('util')


describe("To test the animal adoption flow",function(){

    beforeEach(function () 
  {
    browser.get("http://www.thetestroom.com/jswebapp/index.html");
  })

//x befor it represent that ignore this test
  xit("should be able to adopt an animal",function(){
     
     element(by.model('person.name')).sendKeys('Akash from CC');
     var dynamicText=element(by.binding('person.name')).getText();
     expect(dynamicText).toBe("Akash from CC");
     element(by.buttomText('CONTINUE')).click();

     element(by.model('animal')).$('[value="2"]').click();
     element(by.buttomText('CONTINUE')).click();

     var thankYouText=element(by.css('h1')).getText();
     expect(thankYouText).toBe("Thank you");

  });

var home_page=require('../page/home_page.js');

  it("should be able to adopt an animal by page object",function(){
      home_page.enterFieldValue("Alok from CC");
      var getHomePageText=home_page.getDynamicText();
      expect(getHomePageText).toBe("Alok from CC"); 
      home_page.clickContinue();
  });
});




//end page  object





// //start css expression

// describe("Testing the JavaScript zoo site",function(){

//     beforeEach(function () 
//   {
//     browser.get("http://www.thetestroom.com/jswebapp/");
//   })

//   it("should test by CSS expression",function(){
//     //CSS tag

//     element(by.css('input')).sendKeys("Vinay from CC") //there is only 1 input tag on that page that y we havt any problem to specify unique

//     //CSS class

//     element(by.css('.ng-binding')).getText().then(function(text){
//       console.log(text)
//     });

//     //CSS ids

//     element(by.css('#continue_button')).click();

//     //CSS chaining

//     element(by.css('button#continue_button')).click();

//     //CSS child nodes

//     element(by.css('table td a')).getText().then(function(text){
//       console.log(text);

//       //CSS attribute
//       element(by.css('[id="title"]')).getText().then(function(text){
//       console.log(text);

//     });
  
//   });

// });

// });


// // end CSS expressions








// //Start beforeEach and afterEach


// // //describe block is used for testing of contents and it block realy test them

// describe("Adopt an animal on the zoo test site", function () 
// {

//   beforeEach(function () 
//   {
//     browser.get("http://www.thetestroom.com/jswebapp/");
//   })

//   afterEach(function () {
//     console.log("After method executed");
//   })

//   it("should able to correct page", function () 
//   {

//     //using expect() we can perform validation

//     expect(browser.getCurrentUrl()).toContain("jswebapp");
//     expect(browser.getCurrentUrl()).toEqual("http://www.thetestroom.com/jswebapp/");


//   });

//   describe("should generate correct text", function () 
//   {

//     var textMessage;
//     beforeEach(function () 
//     {
//       textMessage = "I will not subscribe";
//     });



//     it("should check correct text", function () 
//     {



//       element(by.model("person.name")).sendKeys(textMessage);
//       element(by.binding("person.name")).getText().then(function (text) 
//       {
//         expect(text).toEqual("I will not subscribe");
//       });

//     });

//     // it("should check incorrect text", function () 
//     //{



//     //   element(by.model("person.name")).sendKeys(textMessage);
//     //   element(by.binding("person.name")).getText().then(function (text) 
//     //{
//     //     expect(text).toNotEqual("I will not subscribe");
//     //   });

//   });



//   describe("should able to correct number of item in dropdown", function () 
//   {

//     var lengthOfItems
//     beforeEach(function () 
//     {
//       lengthOfItems = 4;
//     });

//     it("should check number of items", function () 
//     {


//       element(by.buttonText("CONTINUE")).click();
//       element(by.model("animal")).$("[value='2']").click();

//       element.all(by.css(".ng-pristine option")).then(function (items) 
//       {
//         expect(items.length).toBe(lengthOfItems);
//         expect(items[1].getText()).toBe("George the Turtle");
//       })


//       element(by.buttonText("CONTINUE")).click();
//     })






//   });


//   it("should check user is on Thank you page ", function () 
//   {
//     //browser.get("http://www.thetestroom.com/jswebapp/"); 

//     //using expect() we can perform validation

//     element(by.buttonText("CONTINUE")).click();
//     element(by.buttonText("CONTINUE")).click();
//     expect(browser.getCurrentUrl()).toContain("confirm");



//   });
// });

// //End beforeEach and afterEach









// // //describe block can contain one or more it block and another describe block as well


// // describe ("test zoo site for input field on home page ",function(){
// // //write test
// //   it("to test input field and check text output",function(){

// //     browser.get("http://www.thetestroom.com/jswebapp/"); 

// //     element(by.model("person.name")).sendKeys("I will not subscribe this channel");
// //     element(by.binding("person.name")).getText().then(function(text){
// //       console.log(text);
// //     });
// //   });
// // });
