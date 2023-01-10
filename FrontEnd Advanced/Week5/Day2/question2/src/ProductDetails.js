import {useState} from 'react';
function ProductDetails()
{
        const[name,setName] = useState("");
        const[price,setPrice] = useState(0);
        const[qty,setQty] = useState(0);
        const[result,setResult] = useState("");
        const[string,setString] = useState("");
    
    
    function nameChange(event)
    {
       setName(event.target.value);
    }
    function priceChange(event)
    {
       setPrice(event.target.value);
    }
    function qtyChange(event)
    {
       setQty(event.target.value);
    }
    function showResult()
    {
        setString(name);
       setResult(price * qty);
    }

    return(
        <div>
              <h1>Products Details from User</h1>
              <hr/>
            Product Name:
            <input type="text" onChange={nameChange}/><br/><br/>
            Unit Price:
            <input type="number" onChange={priceChange}/><br/><br/>
            Quantity:
            <input type="number" onChange={qtyChange}/><br/><br/>
            <input type="button" value="Show Result" onClick={showResult}/>
            <h3>Product: {string}</h3>
            <h3>Total: {result}</h3>
        </div>
    );
}
export default ProductDetails;