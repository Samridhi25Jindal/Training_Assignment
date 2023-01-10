function Student()
{
    var details= {sid:1025 , sname:"Scott" , course:"React JS" , age:25 , total:50000};
    return(
        <tr>
            <td>{details.sid}</td>
            <td>{details.sname}</td>
            <td>{details.course}</td>
            <td>{details.age}</td>
            <td>{details.total}</td>
        </tr>
    );

}
export default Student