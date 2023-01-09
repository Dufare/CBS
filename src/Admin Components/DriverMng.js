import React from 'react'
import "./AdminHome.css";

const DriverMng = () => {
  
  return (
    <div>

<div class="col-auto text-usermng">
    <h3> Drivers</h3>
  </div>
      <div class="row  ">
 
  <div class="col-auto my-2">
    <input type="serach" id="inputPassword6" class="form-control d-flex flex-row-reverse search-box" aria-describedby="passwordHelpInline" placeholder="Search"/>
  </div>
 
</div>

    <table class="table">
      <thead class="table-thread">
        <tr>
          <th scope="col">Customer Id</th>
          <th scope="col">User Name</th>
          <th scope="col">Mobile</th>
          <th scope="col">Address</th>
          <th scope="col">Email Id</th>
          <th scope="col">Edit User</th>
          <th scope="col">Delete User</th>
        </tr>
      </thead>
      {/* <tbody className="user-body">
        {user.map((user) => {
          return (
          <tr>
            <th scope="row">{user.id}</th>
            <td>{user.userName}</td>
            
            <td>{user.mobile}</td>
            <td>{user.address}</td>
            <td>{user.email}</td>
            <td><i class="bi bi-clipboard2-check"></i></td>
            <td><i class="bi bi-trash"onClick={()=>(user.id)}></i></td>
          </tr>
       )})}
      </tbody> */}
    </table>
    </div>
    
  )
}

export default DriverMng
