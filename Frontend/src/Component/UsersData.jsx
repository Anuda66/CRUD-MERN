import React from 'react'

function UsersData(props) {

  const {_id, name, gmail, age, address } = props.user

  return (
    <div className='gap-24 '>
      <h1>ID:{_id}</h1>
      <h1>Name:{name}</h1>
      <h1>Gmail:{gmail}</h1>
      <h1>Age:{age}</h1>
      <h1>Address:{address}</h1>
      <br />
      <br />
    </div>
  )
}

export default UsersData