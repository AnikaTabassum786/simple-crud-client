import React from 'react';
import { useLoaderData } from 'react-router';


const UpdateUser = () => {

    const user = useLoaderData()
    console.log(user)

    const handleUpdate = (e) => {
        e.preventDefault();

        const name = e.target.name.value
        const email = e.target.email.value

        // console.log(name,email)

        const updatedUser = { name, email }
        console.log(updatedUser)



        fetch(`http://localhost:3000/users/${user._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log('Update Done', data)
                }

            })
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