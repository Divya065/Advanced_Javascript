// class ClassName{
//     constructor(prop1,prop2){
//         this.prop1=prop1;
//         this.prop2=prop2;
//     }
// }
// let obj=new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// class Dog{
//     constructor(dogName,wight,colour,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.colour=colour;
//         this.breed=breed;
//     }
// }
// let obj=new Dog("Dog1",20,"Black","Pug");
// console.log(Dog.dogName);
// console.log(Dog.weight);
// console.log(Dog.colour);
// console.log(Dog.breed);

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("John","Doe");
// console.log("Hi",p.firstName);

// class Person{
//     constructor(firstName,lastName="Doe"){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("John");
// console.log("Hi",p.firstName);
// let q=new Person("John");
// console.log("hi",p.firstName,p.lastName);
// let r=new Person("John");
// console.log("hi",p.firstName,p.lastName);

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// greet(){
//     console.log("Hi there! I'm",this.firstName);
// }
// }let p =new Person("Maaoke","Van Putten");
// p.greet();

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// greet(){
//     console.log("Hi there! I'm",this.firstName);
// }
// compliment(name,object){
//     return"That's a wonderful"+object+","
// }
// }
// let p=new Person("Harry","Doe");
// let x=p.greet();
// console.log(x)
// let compliment=p.compliment("Harry","hat");
// console.log(compliment);

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName=firstName;
//         this.#lastName=lastName;
//     }
// }let p =new Person("Maria","Saga");
// console.log(p.firstName);

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         if(firstName.startsWith("M"))
//         {
//         this.#firstName=firstName;
//         }
//         else{
//             this.#firstName="M"+firstName
//         }
//         this.#lastName=lastName;
//     }
// }

// class Person{
//     #firstName;
//     #lastName;
//     constructor(firstName,lastName){
//         this.#firstName=firstName;
//         this.#lastName=lastName;
//     }
//     get firstName(){
//         return this.#firstName;
//     }
//     set firstName(firstName){
//         this.#firstName=firstName;
//     }
//     get lastName(){
//         return this.#lastName;
//     }
//     set lastName(lastName){
//         this.#lastName=lastName;
//     }
// }
// let p=new Person("John","Doe");
// console.log(p.firstName);
// console.log(p.firstName="Mickey")
// console.log(p.lastName);

//                                              INHERITENCE

class Vehicle{
    constructor(color,currentspeed,maxspeed){
        this.color=color;
        this.currentspeed=currentspeed;
        this.maxspeed=maxspeed;
    }
    move(){
        console.log("moving at",this.currentspeed);
    }
    accelerate(amount){
        this.currentspeed+=amount;
    }
}

class motocycle extends Vehicle{
    constructor(color,currentspeed,maxspeed,fuel){
        super(color,currentspeed,maxspeed);
        this.fuel=fuel;
    }
    dowheelie(){
        console.log("Doriving on one wheel!");
    }
}
let motor=new motocycle("blue",30,70,"Petrol");
console.log(motor.fuel);
console.log(motor.color);
console.log(motor.maxspeed);
motor.accelerate(50);
motor.move();