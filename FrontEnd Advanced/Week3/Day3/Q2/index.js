const productObj =  require("./productModule");

var string = productObj.getProducts();
console.log(string);

var str = productObj.category("Electronics");
console.log("Products with category-Electronics");
console.log(str);

var string1 = productObj.price(2000,20000);
console.log("Products having price within the range 2000-20000");
console.log(string1);

var string2 = productObj.availin();
console.log("Products which are In Stock");
console.log(string2);

var string3 = productObj.availout();
console.log("Products which are Out Of Stock");
console.log(string3);
