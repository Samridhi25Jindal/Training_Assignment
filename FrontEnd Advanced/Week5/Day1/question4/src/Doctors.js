import {AiFillStar} from "react-icons/ai";
function Doctors()
{
    var docArray = [{src:"https://th.bing.com/th/id/R.b0831a461107a205d0711c8f21137231?rik=%2fn1pIVzGUF%2fdEg&riu=http%3a%2f%2fdoctorwellsnaturalhealth.com%2fwp-content%2fuploads%2f2014%2f09%2fDr-Wells-dreamstime_xl_13011820.jpg&ehk=M3AdOuBK1d4Zgax2QQBpXkpOT3TPI%2bg4FNBguWtbKoY%3d&risl=1&pid=ImgRaw&r=0" , name:"Patey Cruiser" , designation:"Neurosurgeon" , star:3},
    {src:"https://th.bing.com/th/id/R.307c588a1e7b89889034e195d8e16d43?rik=wamzqu6ozFnjjw&riu=http%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f210000%2fvelka%2fdoctor-1490804643Rfi.jpg&ehk=xVsfwkQ4RsL0lPNklpn0uYssY%2fJJqHho%2bhw1KPmGMXU%3d&risl=&pid=ImgRaw&r=0" , name:"Mario Speedway" , designation:"Cardiologist" , star:5},
    {src:"https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" , name:"Anna Sthesia" , designation:"Surgeon" , star:3},
    {src:"https://th.bing.com/th/id/R.a8d4a227b3ea55bf51db83740ffe1b7b?rik=EOxcyWfOtXK2sg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f2%2f6%2f1%2f302428.jpg&ehk=CCiTrMm4y7Cu6M1OrV2RLZTjjvPY4%2bhJ6Yg4MWlFAFc%3d&risl=&pid=ImgRaw&r=0" , name:"Paul Moliv" , designation:"Dentist" , star:2},
    {src:"https://th.bing.com/th/id/R.df3b9830ec8fe2bf76adb7832e8c55d8?rik=0DsXJkY4l4bChg&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2012%2f10%2fdoctor.jpg&ehk=uSWfgu39YN6o6gcj%2f5IBdyaxJRt%2fBlPJPH1doSUulFg%3d&risl=&pid=ImgRaw&r=0" , name:"Anna Maul" , designation:"Eye Specialist" , star:4},
    {src:"https://templates.hibootstrap.com/medizo/default/assets/img/doctors/doctors-details.png" , name:"Gail Forcewind" , designation:"Urology" , star:4},
    {src:"https://th.bing.com/th/id/R.b0831a461107a205d0711c8f21137231?rik=%2fn1pIVzGUF%2fdEg&riu=http%3a%2f%2fdoctorwellsnaturalhealth.com%2fwp-content%2fuploads%2f2014%2f09%2fDr-Wells-dreamstime_xl_13011820.jpg&ehk=M3AdOuBK1d4Zgax2QQBpXkpOT3TPI%2bg4FNBguWtbKoY%3d&risl=1&pid=ImgRaw&r=0" , name:"Patey Cruiser" , designation:"Neurosurgeon"  , star:4},
    {src:"https://th.bing.com/th/id/R.b0831a461107a205d0711c8f21137231?rik=%2fn1pIVzGUF%2fdEg&riu=http%3a%2f%2fdoctorwellsnaturalhealth.com%2fwp-content%2fuploads%2f2014%2f09%2fDr-Wells-dreamstime_xl_13011820.jpg&ehk=M3AdOuBK1d4Zgax2QQBpXkpOT3TPI%2bg4FNBguWtbKoY%3d&risl=1&pid=ImgRaw&r=0" , name:"Patey Cruiser" , designation:"Neurosurgeon"  , star:4}
    ];
      let result = docArray.map(item=>
        <>
    
        <div id="d1">
            <br/>
            <img src = {item.src}/>
            <p id="first" style={{backgroundColor:"white"}}>{item.name}</p>
            <span style={{backgroundColor:"white"}}>{item.designation}</span>
            <p style={{backgroundColor:"white"}}>{new Array(item.star).fill(1).map(item=><AiFillStar style={{backgroundColor:"white" ,fontSize:"20px" ,color:"green"}}></AiFillStar> )}</p>
            <button>Book Appointment</button><br/>
        </div>
        </>
        );
    return(<>
            {result}
            </>
         
    );
}
export default Doctors