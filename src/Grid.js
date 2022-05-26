
import React from 'react'
import FormA from './FormA'
import FormB from './FormB'
import FormC from './FormC'
import FormD from './FormD'

export default function Grid () {

    return (

        <div className="container">
            <div className="item"><FormA /></div>
            <div className="item"><FormB /></div>
            <div className="item"><FormC /></div>
            <div className="item"><FormD /></div>
        </div>
    )
}