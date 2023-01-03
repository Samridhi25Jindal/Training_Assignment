   let productsArray = [
    {name:"Headphones",category:"Electronics",price:2000,availability:"Yes"},
    {name:"Treadmill",category:"Fitness",price:20000,availability:"No"},
    {name:"Speaker",category:"Electronics",price:5000,availability:"No"},
    {name:"Cricket Bat",category:"Sports",price:1000,availability:"Yes"},
    {name:"Weight Machines",category:"Fitness",price:4500,availability:"No"},
    {name:"Baseball Bat",category:"Sports",price:1000,availability:"Yes"},
    {name:"Smart TV",category:"Electronics",price:50000,availability:"Yes"},
   ];

exports.getProducts = function()
{
    return productsArray;
}
 exports.category = function(cat)
 {
    let arr = [];
    for(let item of productsArray)
    {
        if(item.category == cat)
        arr.push(item);
    }
    return arr;
 }
 exports.price = function(minimum,maximum)
 {
    let arr = [];
    for(let item of productsArray)
    {
        if(item.price < maximum && item.price > minimum)
        arr.push(item);
    }
    return arr;
 }
 exports.availin = function()
 {
    let arr = [];
    for(let item of productsArray)
    {
       if(item.availability == "Yes")
       arr.push(item);
    }
    return arr;
 }
 exports.availout = function()
 {
    let arr = [];
    for(let item of productsArray)
    {
       if(item.availability == "No")
       arr.push(item);
    }
    return arr;
 }