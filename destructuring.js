//1. array destructuring
const numbers =[42,65];
// const x = numbers[0];
// const y = numbers[1];

// const [x,y] =[42,65];
// console.log(x,y);

// const [x,y] =numbers;
// console.log(x,y);

function makeArray (num1,num2){
    const nums = [num1,num2]
    return nums;
}
// console.log(makeArray(13,33));

const [first, second]=makeArray(44,55);
// console.log(first,second);


//Object Destructuring
const {name, age} ={name:'alu', age:14};


const employee={
    ide:'VS code',
    designation : 'developer',
    machine : 'mac',
    languages : ['html','css','js'],
    specification :{
        height : 66,
        weight : 63,
        address : 'madaripur',
        drink : 'water',
        watch:{
            color:'black',
            price:500,
            brand : 'casio'
        }
    }
}
const {machine, designation} = employee;
const {height, address} = employee.specification;
const {brand} = employee?.specification?.watch;