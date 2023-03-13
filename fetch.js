//1. JSON => Stringify, Parse
const student ={
    name:'arafat',
    age:24,
    study:['jsc','ssc','hsc']
}

const studentJSON = JSON.stringify(student);
// console.log(studentJSON); 

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj); 


//2. fetch
// fetch(url)
// .then(res=>res.json())
// .then(data=>console.log(data));

//Keys, values
const keys = Object.keys(student);
// console.log(keys);

const values = Object.values(student);
// console.log(values);


//For
const numbers = [12,23,34,45,56,67,78,89,98]
// numbers.forEach(num=>console.log(num));
const output = numbers.map(num=>num*2)
// console.log(output);


// for of on array like object
// loop on an object using for in


//add or remove from an array

const products =[
    {name:'laptop',price:25000,brand:'dell',color:'black'},
    {name:'phone',price:7000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'casio',color:'silver'},
    {name:'sunglass',price:300,brand:'rybon',color:'yellow'},
    {name:'camera',price:9000,brand:'canon',color:'gray'}
];

const newProduct ={name:'webcam', price:5000, brand:'sundisk',color:'green'};

//Copy Products array and then add newProduct
const newProducts =[...products,newProduct];
// console.log(newProducts);

// Create a new array without specific item
// remove phone means create a new array without the phone

const remaining = products.filter(p=>p.name !== 'phone');
console.log(remaining);