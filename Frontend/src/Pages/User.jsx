import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UsersData from '../Component/UsersData';

const URL = 'http://Localhost:5000/users';

//Get data using const fetchHandler 
const fetchHandler = async()=>{
  return await axios.get(URL).then((res)=>res.data);
}

function User() {

  const[users, setUsers] = useState();
  
  useEffect(()=>{
    fetchHandler().then((data)=>setUsers(data.users));
  })
  
  return (
    <div className='px-24 pt-32'>
      <h1>User Details dispaly</h1>
      <div>
        {users && users.map((user, i)=>(
          <div key={i}>
           <UsersData user={user}/> {/* Passing user prop correctly */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default User