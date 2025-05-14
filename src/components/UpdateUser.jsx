import React from 'react';
import { useLoaderData } from 'react-router';


const UpdateUser = () => {

    const user = useLoaderData()
    console.log(user)

    const handleUpdate=(e)=>{
        e.preventDefault();

        const name = e.target.name.value
        const email =e.target.email.value

        console.log(name,email)
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' placeholder='name' defaultValue={user.name} /> <br />
                <input type="text" name='email' placeholder='email' defaultValue={user.email} /> <br />
                <button type='submit'>Update user</button>
            </form>
        </div>
    );
};

export default UpdateUser;