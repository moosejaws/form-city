import React, { useState } from 'react'

export default function FormB () {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');




    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(`First Name: ${firstName}; Last Name: ${lastName}; Phone: ${phone}; Email: ${email}; Message: ${message}`)
        setFirstName('');
        setLastName('');
        setPhone('');
        setEmail('');
        setMessage('');

    
    }

    return (
        <div>
            <form className='formB' id="FormB" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <h3>Contact Info</h3>

                    <input
                        className='inputB'
                        type='text'
                        id='firstName'
                        name='firstName'
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />

                    <input
                        className='inputB'
                        type='text'
                        id='lastName'
                        name='lastName'
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />

                    <input
                        className='inputB'
                        type='number'
                        id='phone'
                        name='phone'
                        placeholder='Phone Number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <input
                        className='inputB'
                        type='text'
                        id='email'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        className='inputC'
                        type='text'
                        id='message'
                        name='message'
                        placeholder='Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button id="buttonB" type='submit'>Submit</button>
            </form>
        </div>
    )
}