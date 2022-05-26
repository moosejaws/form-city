import React, { useState } from 'react'

export default function FormC () {
    

    const [checked1, setChecked1] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const [checked3, setChecked3] = useState(false)
    const [checked4, setChecked4] = useState(false)
    const [checked5, setChecked5] = useState(false)
    const [checked6, setChecked6] = useState(false)





    

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Submitted")
        setChecked1(false)
        setChecked2(false)
        setChecked3(false)
        setChecked4(false)
        setChecked5(false)
        setChecked6(false)
    }

    return (
        <div>
            <form className='formC' id="FormC" onSubmit={handleSubmit}>
                <div className='form-control'>
                    <h3 class="headerC">What kind of pets do you have?</h3>

                            <ul>

                            <li>
                                <input
                                    className='checkbox'
                                    name="check1"
                                    type="checkbox"
                                    checked={checked1}
                                    onChange={(e) => setChecked1(e.target.checked)}
                                />
                                <label>Cat</label>
                            </li>

                            <li>
                                <input
                                    className='checkbox'
                                    name="check2"
                                    type="checkbox"
                                    checked={checked2}
                                    onChange={(e) => setChecked2(e.target.checked)}
                                />
                                <label>Dog</label>
                            </li>
                            
                            <li>
                                <input
                                    className='checkbox'
                                    name="check3"
                                    type="checkbox"
                                    checked={checked3}
                                    onChange={(e) => setChecked3(e.target.checked)}
                                />
                                <label>Bird</label>
                            </li>

                            <li>
                            <input
                                className='checkbox'
                                name="check4"
                                type="checkbox"
                                checked={checked4}
                                onChange={(e) => setChecked4(e.target.checked)}
                            />
                            <label>Reptile</label>
                            </li>


                            <li>
                                <input
                                    className='checkbox'
                                    name="check5"
                                    type="checkbox"
                                    checked={checked5}
                                    onChange={(e) => setChecked5(e.target.checked)}
                                />
                                <label>Rodent</label>
                            </li>

                            <li>
                                <input
                                    className='checkbox'
                                    name="check6"
                                    type="checkbox"
                                    checked={checked6}
                                    onChange={(e) => setChecked6(e.target.checked)}
                                />
                                <label>Fish</label>
                            </li>

                    </ul>
                </div>
                <button id="buttonC" type='submit'>Submit</button>
            </form>
        </div>
    )
}