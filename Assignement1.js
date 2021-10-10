// Create a single line comment than contains at least five letters.

/*
- Create a multi-line comment than contains at least five letters.
- Create a multi-line comment than contains at least five letters.
*/

/* Declare 3 JavaScript variables using all different keywords for declaring a variable, and 
store any values.
*/


//    let First='Jamaal';
//    let age=22;
//    let results=false;

// Q3: Declare a function with
// function func(number1, number2)
// {
//     if(isNaN(num1 && num2)){
//      return false
//     }else{
//     Sum=number1+number2;
//     document.write(Sum);
//     } 
// }
// let num1 = parseFloat(prompt("Enter Numberka 1Aaad:"));
// let num2 = parseFloat(prompt("Second Numberka 2Aad:"));
// func(num1, num2);

//Q4: Copy the following code and use both solutions ‘if else’ & ‘switch’ to solve the problem

// var today = new Date();
// if(today.getDay()==0){
// console.log("Axada");
// }else if(today.getDay()==1){
//     console.log("Isniin");
// }else if(today.getDay()==2){
//     console.log("Talaado");
// }else if(today.getDay()==3){
//     console.log("Arbaco");
// }else if(today.getDay()==4){
//     console.log("Khamiis");
// }else if(today.getDay()==5){
//     console.log("Jimco");
// }else{
//     console.log("Sabti");
// }


//SWITCH or CASE

// switch (new Date().getDay()) {
//     case 0:
//      console.log("Axada");
//         break;
//     case 1:
//         console.log("Isniin");
//         break;
//     case 2:
//         console.log("Talaado");
//         break;
//     case 3:
//         console.log("Arbaco");
//         break;
//     case 4:
//         console.log("Khamiis");
//         break;
//     case 5:
//         console.log("Jimco");
//         break;
//     case 6:
//         console.log("Sabti");
//     }

//Q5: Using all ‘for loop’ and ‘while loop’ and ‘do while loop’, print from 0 to 10.

//For loop 0 to 10
// for(i=0;i<=10;i++){
//   console.log(i);
// }


// //While loop 0 to 10

// let i=0;
// while(i<=10){
//     console.log(i);
//     i++;
// }


// //DO WHILE LOOP 0 to 10

// let i=0;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

//Q6: Create array with at least 5 values

//    let array=['Sabti','Axada','Isniin','Talaado','Arabaco'];
//    for (const i of array) {
//    console.log(i)
//   }

//Q7: Create an object with at least 5 key/value pairs

// var person = {
//     firstName: 'AbdiJamaal',
//     LastName: 'Gedi',
//     BirthYear: 1999,
//     Family : ['AbdiJaliil', 'Ismail', 'Mahad', 'Sahra'],
//     Job: ' Designer',
//     IsMarried: false
// };

// console.log(person);

//8: Create an array with at least 5 values

// let AJ=['AbdiJamaal','Gedi','Osman','Addoow',100];
//     function arr(){
//         console.log("Array length:"+' '+AJ.length);
//         console.log(" array:"+' '+AJ);
//         console.log(" toString method:"+' '+AJ.toString());
//         AJ.pop();
//         console.log(" pop method:"+' '+AJ);
//         AJ.push("AbdiJaliil");
//         console.log(" push method:"+' '+AJ);
//         console.log(" join methode:"+' '+AJ.join('_'));
//         AJ.shift();
//         console.log(" shift method:"+' '+AJ);
//         AJ.unshift("Ismail");
//         console.log(" unshift method:"+' '+AJ);
//         AJ.reverse();
//         console.log(" revrse method:"+' '+AJ);
      
//     }
//     console.log=arr();

//Q9: Create a ‘car’ object with ‘drive’ & ‘stop’ methods

//  let car={
//  start: function(){
// return 'Driving'
//  },
//  stop: function(){
//     return 'Stopping'
//      }
// }
// console.log(car.start());
// console.log(car.stop());

// Q10: Copy the following function

// function throwError(){
//     throw Error('Kaboom')
//     }
//     try{
//        throwError();
//     }catch(e){
//        console.error(e.message);
//     }