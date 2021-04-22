import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const UseEffectSecondArgument = () => {
    const url = 'https://api.github.com/users'
    const [users, setUsers] = useState([])

    const getUsers = () => {
        fetch(url).then(resp => resp.json())
            .then(users => setUsers(users))

    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='container'>
            <h2 className='bg-dark text-light text-center p-3'>Github users</h2>
            <ul className='list-group '>
                {users.map(user => {
                    const { id, avatar_url, html_url, login } = user
                    return (
                        <li className='list-group-item d-flex ' key={id}>
                            <img src={avatar_url} alt="" />
                            <div className='ml-4 text-capitalize'>
                                <h4>{login}</h4>
                                <a href={html_url}>profile</a>
                            </div>
                        </li>)
                })}
            </ul>
        </div>
    )
}

export default UseEffectSecondArgument
