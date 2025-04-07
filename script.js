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

function confuseReader(){
    x="Guess my scope...";
    console.log("Inside the function",x);
}

confuseReader();
console.log("Outside the function",x);