// function sayHello(){
//     let you = prompt("What is your name?")
//     console.log("Hello "+you+"!")
// }

// sayHello();


// let varContainingFunction= function(){
//     let varInFunction = "I'm in a function";
//     console.log("hi there!",varInFunction);
// };

// varContainingFunction();

// function tester(para1,para2){
//     return para1 + " " + para2
// }

// const arg1 = "argument 1";
// const arg2 = "argument 2";
// console.log(tester(arg1,arg2));

// function addTwoNumbers(x,y){
//     console.log(x + y)
// }

// let a = parseInt(prompt("Enter the first number : "));
// let b = parseInt(prompt("Enter the Second number : "));

// let a = 20;
// let b = 30

// addTwoNumbers(a,b)

// let arr = [];
// arr.push("argument 1");
// console.log(arr)

// function addTwoNumbers(x=2,y=3){
//     console.log(x+y);
// }

// addTwoNumbers(4,8);
// addTwoNumbers();
// addTwoNumbers(10)

// Default arguments must be trailing arguments


//Arrow functions are great for sending functions around as parameters and using shorter notation



// let doingStuff = x => console.log(x);
// doingStuff(4);

// const arr = ["sqirrel","alpaca","buddy"]
// arr.forEach(e => console.log(e))

// let doingstuff=x=>console.log(x);
// doingstuff("Hello!!");

// const arr=["squirrel","alpaca","buddy"];
// arr.forEach(e => console.log(e));

// Spread Operater

// let Spread=["so","much","fun"];
// let message=["Javascript","is",...Spread,"and","very","powerful"];
// console.log(message)

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addFourNumbers(x,y,z,a){
//     console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr2=[6,7]
// addFourNumbers(...arr,...arr2);

// function somefunction(param1,param2){
//     console.log(param1,param2);
// }
// somefunction("hi","there!","How are you?");

// function somefunction(param1,...param2){
//     console.log(param1,param2);
// }
// somefunction("hi","there!","How are you?");

//Return function values

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let result=addTwoNumbers(4,5);
// console.log(result);

// function addTwoNumbers(x,y){
//     return x+y;
// }
// let resultArr=[];
// for(let i=0;i<10;i++){
//     let result=addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

// Return with arrow function

// let addTwoNumbers=(x,y)=>{
//     console.log("Adding...");
//     return x+y;
// }
// console.log(addTwoNumbers(12,17));

//          Variable scope in function

// function testAvailability(x){
//     console.log("Available here:",x);
// }
// testAvailability("Hi");
// console.log("Not available here:",x)

// function testAvailability(){
//     let y="Local variable!"
//     console.log("Available here:",y);
// }
// testAvailability();
// console.log("Not available here:",y);

// function testAvailability(){
//     let y="I'll return";
//     console.log("Available here:",y);
//     return y;
// }
// testAvailability();
// console.log("Outside the function:",z)
// console.log("Not available here:",y);

// function doingstuff(){
//     if(true){
//         var x="local";
//     }
//     console.log(x);
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         let x="local";
//     }
    
// }
// doingstuff();

// function doingstuff(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }
    
// }
// doingstuff();

// function doingstuff(){
//     if(true){
        
//         const x="local";
//     }
//     console.log(x);
// }
// doingstuff();

// let globalVar="Accessible everywhere!";
// console.log("Outside function:",globalVar);

// function creatingNewScope(x){
//     console.log("Access to global vars inside function.",globalVar);
// }

// creatingNewScope("some parameter");

// console.log("still available:",globalVar);

// let x="global";

// function doingstuff(){
//     let x="local";
//     console.log(x);
// }
// doingstuff();
// console.log(x);

// let x="global";
// function doingstuff(x){
//     console.log(x);
// }
// doingstuff("param");

// function confuseReader(){
//     x="Guess my scope...";
//     console.log("Inside the function",x);
// }

// confuseReader();
// console.log("Outside the function",x);

//             IIFE(immediately Invoke function expression)


// (function (){
//     console.log("IIFE!");
// })();

// (()=>{
//     console.log("run right away");
// })();

//          Recursive Funtion

// function getRecursive(nr){
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);

// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0)
//     {
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// function getRecursive(nr){
//     if(nr>0)
//     {
//         getRecursive(--nr);
//     }
//     console.log(nr);
// }
// getRecursive(3);

// function logRecusrive(nr){
//     console.log("Started function :",nr);
//     if(nr>0){
//         logRecusrive(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("Ended function:",nr);
// }
// logRecusrive(3);

//              Nested Functions

// function doOuterFunctionStuff(nr){
//     console.log("Outer Function");
//     function doInnerFunctionStuff(x){
//         console.log(x+7);
//         console.log("I can accessthe outer variable");
//     }
// }
// doOuterFunctionStuff(2);

// let functionVariable=function(){
//     console.log("Not so secret though");
// };
// functionVariable();

// function doFlexiblestuff(executeStuff){
//     executeStuff();
//     console.log("Inside doFlexibleStffFunction.");
// }
// doFlexiblestuff(functionVariable);

// let youGotThis=function(){
//     console.log("You are doing really well, keep coding!");
// };
// setTimeout(youGotThis,4000);
// setInterval(youGotThis,1000)