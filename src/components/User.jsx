import React, { use, useState } from 'react';

const User = ({userPromise}) => {

    const initialUsers = use(userPromise);
    console.log(initialUsers)

    
    const [users,setUsers] = useState(initialUsers)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const email =e.target.email.value
        const newUser = {name,email}
        console.log(newUser)


        //create user in DB

        fetch('http://localhost:3000/users',{

            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log('data after creating user in DB',data)
            if(data.insertedId){
              newUser._id = data.insertedId;
              const newUsers=[...users,newUser]
              setUsers(newUsers)
              alert('User added successfully')
              e.target.reset()
            }
        })
    }

    const handleDelete=(id)=>{
      console.log('Deleted',id)
      fetch(`http://localhost:3000/users/${id}`, {
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='name' /> <br />
                <input type="text" name='email' placeholder='email' /> <br />
                <button type='submit'>Submit</button>
            </form>

            {
                users?.map((user)=>{
                    return(
                        <div key={user._id} >
                          <p>{user.name}:{user.email}</p>
                          <button onClick={()=>handleDelete(user._id)} className='btn'>X</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default User;