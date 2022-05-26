import React, { useState } from 'react'

export default function FormD () {
   const [checkedEarth, setCheckedEarth] = useState(false)
   const [checkedSpace, setCheckedSpace] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(`Submitted`)
        setCheckedEarth(false);
        setCheckedSpace(false)
       // setNo(false);
    
    }



    return (
        <div>
            <form className='formD' id="FormD" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <h2>Were you born on Earth?</h2>

                    <ul>

                        <li>
                            <input 
                            class="radio"
                            type="radio"
                            name = "checkedEarth"
                            checked={checkedEarth}
                            onChange={(e) => setCheckedEarth(e.target.checked)}/>
                            <label>Yes</label>
                        </li>

                        <li>
                            <input 
                            class="radio"
                            type="radio" 
                            name = "checkedSpace" 
                            checked={checkedSpace}
                            onChange={(e) => setCheckedSpace(e.target.checked)}/>
                            <label>Nah, I'm from space.</label>
                        </li>

                    </ul>

                <button id="buttonD" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}