const numbers = [89,35,25,78];

const student ={
    name:'arafat',
    age:24,
    study:['jsc','ssc','hsc']
}

//1. Template String
const about = `My name is ${student.name} age of ${student.age}has numbers ${numbers[2]} also passed ${student.study[2]}`;
console.log(about);

//2. arrow Function
const getFiftyFive =()=>55;
const addSixtyFive = num => num+65;
const isEven = x => x % 2 ==0;
const addThree =(x,y,z) => x+y+z;
const doMath = (num1,num2)=>{
    const sum = num1 + num2;
    return sum;
} 

//Spread Operator
const newNumbers = [...numbers];

//Create a new array from an older array and an element
const currentNumbers =[...numbers, 55]