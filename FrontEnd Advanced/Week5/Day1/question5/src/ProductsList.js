function ProductsList(props)
{
    let prosArray = [
        {company:"HP" , category:"Laptop" , price:100000 },
        {company:"Oppo" , category:"Phone" , price:25000 },
        {company:"Samsung" , category:"Phone" , price:18000 },
        {company:"Dell" , category:"Laptop" , price:450000 },
        {company:"Apple" , category:"Phone" , price:50000 },
        {company:"Apple" , category:"Laptop" , price:200000 },
        {company:"OnePlus" , category:"Phone" , price:28000 }
    ];
let catArray;
if(props.cat =="")
{
    catArray = prosArray;
}
else if(props.cat == "Laptop")
{
    catArray = prosArray.filter(item=>item.category == "Laptop");
}
else if(props.cat == "Phone")
{
    catArray = prosArray.filter(item=>item.category == "Phone");
}
else{
    catArray=prosArray;
}

return(
    catArray.map(item=><li>{item.company}</li>)
);
}
export default ProductsList