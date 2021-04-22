import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function ControlledInputs() {
    const [firstName, setName] = useState('')
    const [email, setEmail] = useState('')
    const [detail, setDetails] = useState([])
    const [errormsg, setErrormsg] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        if (firstName && email) {
            const agbo = { id: new Date().getTime().toString(), firstName: firstName, email: email }
            setDetails(detail => {
                return [...detail, agbo]
            })
            setName(''); setEmail('')
        } else {
            setErrormsg('Please fill all inputs')
        }

    }
    return (
        <article>
            <h3 className="container w-50 bg-danger text-light text-center">{errormsg}</h3>
            <form className='container w-50 mt-5' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName"
                        id='firstName' >Firstname</label>
                    <input type="text" className='form-control'
                        value={firstName}
                        name='firstName' id='firstName' placeholder='Firstname'
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email" id='email'>Email</label>
                    <input value={email} type="text" className='form-control' name='email' id='email' placeholder='email'
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className="btn btn-dark btn-block">Add to List</button>
            </form>
            <div className="container w-50 mt-5">

                {detail.map(data => {
                    const { id, firstName, email } = data

                    return (
                        <div className="item" key={id}>
                            <h4>{firstName}</h4>
                            <h4>{email}</h4>
                        </div>
                    )
                })}
            </div>
        </article>
    )
}

export default ControlledInputs
