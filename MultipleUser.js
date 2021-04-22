import React, { useState, useEffect } from 'react'

function MultipleReturns() {
    const url = 'https://api.github.com/users/frankmilito'

    const [user, setUser] = useState('default user')
    const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                const { login } = data
                setUser(login)
                setisLoading(false)
            })
    }, [])

    if (isLoading) {
        return <h3>Is loading content...</h3>
    }
    return (
        <div>
            <h1>{user}</h1>
        </div>
    )
}

export default MultipleReturns
