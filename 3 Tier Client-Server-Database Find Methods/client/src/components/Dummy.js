import React, { useState } from 'react'

function Dummy() {
    let [dummy,setDummy] = useState([])
    let getEmployeeData = async ()=>{
        
        let requestOption = {method:"GET"};
let jsonData = await fetch("http://localhost:2121/dummyData",requestOption);
let jsoData = await jsonData.json();
console.log(jsoData);
setDummy(jsoData);

    }

  return (
    <div>
        <form>
        <button type="button"
        onClick={()=>{
            getEmployeeData();
        }}>Get Employees Data</button>
        </form>
        <table>
        <thead>
    <tr>
      <th>S.No</th>
      <th>Id</th>
      <th>Profile Pic</th> 
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Marital Status</th>
      <th>Department</th>
      <th>Age</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
  {dummy.map((ele, i) => {
        return (
          
            <tr>
              <td>{i+1}</td>
            <td>{ele.id}</td>
            <td><img src={ele.profilePic} alt=''></img></td>
            <td>{ele.firstName}</td>
            <td>{ele.lastName}</td>
            <td>{ele.gender}</td>
            <td>{ele.email}</td>
            <td>{ele.maritalStatus}</td>
            <td>{ele.department}</td>
            <td>{ele.age}</td>
            <td>{ele.country}</td>
            </tr>
        
        );
      })}
  </tbody>
  <tfoot></tfoot>
</table>
       
    </div>
  )
}

export default Dummy