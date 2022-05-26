import React, { useState } from 'react';

export default function FormA () {
    const [graduate, setGraduate] = useState('');


    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(`Year: ${graduate}`)
        setGraduate('');
    
    }

    return (
        <div>
            <form className='formA' id="FormA" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <h4>What year did you graduate high school?</h4>
                    <input
                        className='inputA'
                        type='number'
                        id='graduate'
                        name='graduate'
                        value={graduate}
                        onChange={(e) => setGraduate(e.target.value)}
                    />
                </div>
                <button id="buttonA" type='submit'>Submit</button>
            </form>
        </div>
    )
}