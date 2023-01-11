import axios from 'axios';

let carsDataServiceObj = {};

let url = "http://localhost:3400/cars/";

carsDataServiceObj.getData = function()
{
    return axios.get(url);
};
carsDataServiceObj.selectData=function(sno)
{
    return axios.get(url+sno)
}
carsDataServiceObj.addData = function( carsObj )
{
    return axios.post(url, carsObj);
};

carsDataServiceObj.updateData = function( carsObj )
{
    return axios.put(url+carsObj.sno,carsObj);
};

carsDataServiceObj.deleteData = function( sno )
{
    return axios.delete(url + sno);
};

export default carsDataServiceObj;