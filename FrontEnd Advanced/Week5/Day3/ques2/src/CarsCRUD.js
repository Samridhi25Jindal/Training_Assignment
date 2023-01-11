import { useState } from "react";
import carsDataServiceObj from "./carsDataService";

function CarsCRUD()
{
    const [carsArray, setCarsArray] = useState([]);
    const [sno, setSno] = useState(0);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [fuel, setFuel] = useState("");
    const [driveType, setDriveType] = useState("");
    const [mileage, setMileage] = useState("");

    function  getCars_click()
    {
       carsDataServiceObj.getData().then( resData => 
        {
            setCarsArray(resData.data);
        });
    }

    function  addCars_click()
    {
        let carsObj = {};
        carsObj.image=image;
        carsObj.name = name; 
        carsObj.price = price; 
        carsObj.fuel = fuel; 
        carsObj.driveType = driveType;
        carsObj.mileage = mileage; 

        carsDataServiceObj.addData( carsObj).then(resData => 
        { alert("New car have been saved to the server");
          getCars_click();
        });
        
    }
    
    function  deleteCars_click(sno)
    {

        carsDataServiceObj.deleteData( sno ).then(resData => 
        {
          getCars_click();
        });
    }
    function  SelectCars_click(sno)
    {

        carsDataServiceObj.selectData( sno ).then(resData => 
        {
            let x=resData.data;
            setSno(x.sno)
            setImage(x.image);
            setFuel(x.fuel);
            setName(x.name);
            setMileage(x.mileage);
            setDriveType(x.driveType);
            setPrice(x.price);
          
        });
    }

    function  updateCars_click()
    {
        alert("Item Updated");
        let carsObj = {}; 
        carsObj.sno=sno;
        carsObj.name = name; 
        carsObj.image=image;
        carsObj.price = price; 
        carsObj.fuel = fuel; 
        carsObj.driveType = driveType;
        carsObj.mileage = mileage; 

        carsDataServiceObj.updateData(carsObj).then(resData => 
        {
            alert("Data updated");
            getCars_click();
        });
        
    }
    
    let result = carsArray.map( item => 
        <div id="division">
            <img src={item.image}/><br/><br/>
            <p><strong>Name:</strong>{item.name}</p>
            <p><strong>Price:</strong>{item.price}</p>
            <p><strong>Fuel Type:</strong>{item.fuel}</p>
            <p><strong>Drive Type:</strong>{item.driveType}</p>
            <p><strong>Mileage:</strong>{item.mileage}</p>
            <p><span><a href="javascript:void(0);"    onClick={() => deleteCars_click(item.sno)}>Delete</a> | <a href="javascript:void(0);"    onClick={() => SelectCars_click(item.sno)}>Select</a> </span> </p>
               </div>
        );

  
  return (
      <>
          <h3>Some Mercedes Classes</h3>
          <hr/>
          <input placeholder="S.No" value={sno} onChange={e=>setSno(e.target.value)}/>
          <input placeholder="Image Link" value={image} onChange={e => setMileage(e.target.value)} />
          <input placeholder="name"  value={name}  onChange={e => setName(e.target.value)}  />
          <input placeholder="price"  value={price} onChange={e => setPrice(e.target.value)}  />
          <input placeholder="fuel" value={fuel}  onChange={e => setFuel(e.target.value)}  />
          <input placeholder="drive type" value={driveType}  onChange={e => setDriveType(e.target.value)}  />
          <input placeholder="mileage" value={mileage}  onChange={e => setMileage(e.target.value)}  />
        <br/><br/>

          <input type="button" className="btn btn-primary" value="Get Cars" onClick={getCars_click} />
          <input type="button" className="btn btn-success" value="Add Car" onClick={addCars_click} />
          <input type="button" className="btn btn-warning" value="Update Cars" onClick={updateCars_click} />
        <br/><br/>
                {result}
      </>   
  );
}

export default CarsCRUD;
