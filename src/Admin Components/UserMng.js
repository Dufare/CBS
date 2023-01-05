import React from 'react'
import "./AdminHome.css";

const UserMng = () => {
  return (
    <div className='user_table conatiner '>
      <table className="table">
  <thead className='thread_user'>
    <tr>
      <th scope="col">USERNAME</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">EMIAL</th>
      <th scope="col">PHONE</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">RIDES</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      
      <td>@mdo</td>
      <td><i class="bi bi-pen"></i></td>
      <td><i class="bi bi-trash"></i></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
      <td>@fat</td>
      <td><i class="bi bi-pen"></i></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default UserMng
