import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';


export default function Create() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUser({id: users[users.length-1].id+1, name, email}));
        navigate('/');
    }
  return (
    <div className='container'>
      <div class="w-50 mx-auto my-5 bg-secondary-subtle px-5 py-5">
        <form onSubmit={handleSubmit}>
        <label for="" class="form-label">Name</label>
        <input type="text" class="form-control" placeholder="Arayan Memon" onChange={(e) => setName(e.target.value)}/>
        <label for="" class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="abc@mail.com" onChange={(e) => setEmail(e.target.value)}/>
        <input type="submit" class="btn btn-primary mt-3" value="Create" />
        </form>
      </div>
    </div>
  )
}
