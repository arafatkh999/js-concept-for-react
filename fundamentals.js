//1. How to declare a variable using let and const
const myName = 'Zero';
let season = 'summer';
season = 'rainy';

//2. Conditions
//6 Basic conditions: <, >, ===, !==, <=, >=
//multiple conditions: && , ||

if(myName === 'zero' || season === 'summer'){

}
else if(myName==='Zero'){

}
else{

}


//3. array declare
// index
// length, push, 
const numbers = [89,35,25,78];
numbers[0]=21;

//4. for loop 
for(let i=0; i<numbers.length;i++){
const number = numbers[i];
console.log(number);
}

//5. function
function multiply(num1, num2){
    const result = num1 * num2;
    console.log(result);

}
const output = multiply(12,34);


//6. Object
// 3 ways to access property by name
const student ={
    name:'arafat',
    age:24,
    study:['jsc','ssc','hsc']
}
const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']); //access via property name string
console.log(student[myVariable]); //access via property name in a variable