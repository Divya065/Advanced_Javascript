//   Callbacks

//  it it=s just a function that takes the another funcrtion as an argument, then called when the rest of the initial function has finished. In 
// other words its just a function calling function

// function doSomething(Callbacks){
//     Callbacks();
// }
// function sayHi(){
//     console.log("hi");
// }

// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade=="A":
//         console.log("you got an",grade, ": amazing");
//         break;
//         case grade=="B":
//         console.log("you got an",grade, ": good");
//         break;
//         case grade=="C":
//         console.log("you got an",grade, ": ok");
//         break;
//         case grade=="D":
//         console.log("you got an",grade, ": improve");
//         break;
//         default:
//         console.log("you got an",grade,": fail");
//     }
// }

// function getgrade(score,Callback){
//     let grade;
//     switch(true){
//         case score>=90:
//             grade="A";
//             break;
//         case score>=80:
//             grade="B";
//             break;
//         case score>=70:
//             grade="C";
//             break;
//         case score>=90:
//             grade="D";
//             break;
//         default:
//             grade="F"
//     }
//     Callback();
// }

// getgrade(89,judge);

//            Promises

// This fucntion need two parameters and both parameters are callbacks(resolve,reject)



// let promise=new Promise(function(resolve,reject){
//     let x=20;
//     if(x>10){
//         resolve(x);
//     }
//     else{
//         reject("Too low");
//     }
// });

// promise.then(
//     function(value){
//         console.log("Success:",value);
//     },
//     function(error){
//         console.log("Error:",error);
//     }
// );

// const promise=new Promise((resolve,reject)=>{
//     resolve("Success !");
//     reject("Oops!!")
// }).then(value=>{
//     console.log(value);
//     return  "we";
// }).then(value=>{
//     console.log(value);
//     return "can"
// }).then(value=>{
//     console.log(value);
//     return "chain";
// }).then(value=>{
//     console.log(value);
//     return "promises"
// }).catch(value=>{
//     console.log(value);
// })

function saySomething(x){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("something"+x);
        },2000);
    });
}
async function talk(x) {
    const words=await saySomething(x);
    console.log(words);
}

talk(2);
talk(4);
talk(8);