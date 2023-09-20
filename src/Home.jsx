import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from './UserReducer';

export default function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDel = (id)=>{
        dispatch(deleteUser({id: id}))
    }
  return (
    <div className='container my-5 mx-auto'>
        <h1 className='text-center'>Todo list using redux</h1>
        <Link to="/create" className='btn btn-success'>Create</Link>
      <table className='table mt-4'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user) => {
            return <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/update/${user.id}`} class="btn btn-primary">Edit</Link>
                <button onClick={()=>handleDel(user.id)} class="btn btn-danger mx-2">Delete</button>
              </td>
            </tr>
            })}
        </tbody>
      </table>      
    </div>
  )
}
