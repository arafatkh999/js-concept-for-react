const products =[
    {name:'laptop',price:25000,brand:'dell',color:'black'},
    {name:'phone',price:7000,brand:'iphone',color:'golden'},
    {name:'watch',price:3000,brand:'casio',color:'silver'},
    {name:'sunglass',price:300,brand:'rybon',color:'yellow'},
    {name:'camera',price:9000,brand:'canon',color:'gray'}
];
//1.Map
const brands = products.map(product=>product.brand)
// console.log(brands);

//2.ForEach
// products.forEach(product=>console.log(product));
// products.forEach(product=>console.log(product.color));


//3.Filter
const cheap = products.filter(product => product.price <= 50);
console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
// console.log(specificName);


//4. Find
 const special = products.find(product=> product.name.includes('n'));
//  console.log(special);