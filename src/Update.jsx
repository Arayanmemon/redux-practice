import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './UserReducer';
import { useNavigate, useParams } from 'react-router-dom';


export default function Update() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const user = users.filter((u) => u.id == id);
    const name= user[0].name;
    const email= user[0].email;
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    console.log(user);

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser({
            id: id, 
            name: uname, 
            email: uemail
        }));
        navigate('/');
    }
  return (
    <div className='container'>
      <div class="w-50 mx-auto my-5 bg-secondary-subtle px-5 py-5">
        <form onSubmit={handleSubmit}>
        <label for="" class="form-label">Name</label>
        <input type="text" class="form-control" placeholder="Arayan Memon" value={uname} onChange={(e) => setName(e.target.value)}/>
        <label for="" class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="abc@mail.com" value={uemail} onChange={(e) => setEmail(e.target.value)}/>
        <input type="submit" class="btn btn-primary mt-3" value="Update" />
        </form>
      </div>
    </div>
  )
}
