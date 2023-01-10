import { useState } from "react";
function StudentDetails() 
{ 
const [studentArray, setStudentArray]  =  useState([]);
const [sid, setSid] = useState("");
const [name, setName] = useState("");
const [course, setCourse] = useState("");
const [age, setAge] = useState(0);
const [email,setEmail] = useState("");

    function  getData_click()
    {
        let tempArray  = [     
            { sid:1025, name:"Kritika", course:"BBA" , age:21 , email:"Kritika@gmail.com" },
            { sid:1026, name:"Samridhi", course:"MBA" , age:21 , email:"Samridhi@gmail.com" },
            { sid:1027, name:"Hemant", course:"BCA" , age:22 , email:"Hemant@gmail.com" },
            { sid:1028, name:"Sahil", course:"MBA" , age:22 , email:"Sahil@gmail.com" }
        ];
        setStudentArray(tempArray);
    }
    function addData_click()
    {   
        let studentObj = {};
        studentObj.sid = sid;
        studentObj.name = name;
        studentObj.course = course;
        studentObj.age = age;
        studentObj.email = email;

        let tempArray = [...studentArray]
        tempArray.push(studentObj);
        setStudentArray(tempArray);
    }
    function updateData_click()
    {
        let tempArray = [...studentArray]
        let studentObj=tempArray.find(item=>item.sid==sid);
        studentObj.sid = sid;
        studentObj.name = name;
        studentObj.course = course;
        studentObj.age = age;
        studentObj.email = email;

        setStudentArray(tempArray);

    }
    function deleteData_click(sid)
    {
       let tempArray = [...studentArray];
       let index = tempArray.findIndex(item=>item.sid==sid);
       tempArray.splice(index,1);
       setStudentArray(tempArray);
    }
    function selectData_click(sid)
    {
      let studentObj=studentArray.find(item=>item.sid==sid);
      setSid(studentObj.sid);
      setName(studentObj.name);
      setCourse(studentObj.course);
      setAge(studentObj.age);
      setEmail(studentObj.email);
    }
    let result = studentArray.map(item=>
        <tr>
            <td>{item.sid}</td>
            <td>{item.name}</td>
            <td>{item.course}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>
                <a href="javascript:void(0)" onClick={() => deleteData_click(item.sid)}>Delete</a> |
                <a href="javascript:void(0)" onClick={() => selectData_click(item.sid)}>Select</a>
            </td>
        </tr>
        );

return (
    <div>
        <h1>CRUD Operations on Students Details</h1>
        <hr/>
        <input type="text" placeholder="Student ID" onChange= {e => setSid(e.target.value)} /><br/><br/>
        <input type="text" placeholder="Student Name" onChange= {e => setName(e.target.value)} /><br/><br/>
        <input type="text" placeholder="Course" onChange= {e => setCourse(e.target.value)} /><br/><br/>
        <input type="number" placeholder="Student Age" onChange= {e => setAge(e.target.value)} /><br/><br/>
        <input type="email" placeholder="Student Email" onChange= {e => setEmail(e.target.value)} /><br/><br/>

        <input id="b1" type="button" value="Get Data" onClick= {getData_click} />
        <input id="b1" type="button" value="Add Data" onClick = {addData_click}/>
        <input id="b1" type="button" value="Update Data" onClick = {updateData_click} /><br/><br/>
        <table border="2" cellpadding="10">
              <tr>
                <th>Student ID</th>
                <th>Student Name</th>               
                <th>Course</th>
                <th>Age</th>
                <th>Email</th>
                <th></th>
              </tr>  
              {result}
        </table>
    </div>
);
}

export default StudentDetails
