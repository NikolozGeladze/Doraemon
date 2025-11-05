import React from 'react'
import Collar from './Collar/Collar'
import './Body.css'
import Belly from './Belly/Belly'
import Legs from './Legs/Legs'

export default function Body() {
    return (
        <>
            <div className="body">
                <div className="collar-belly-container">
                    <Collar />
                    <Belly />
                </div>
                <Legs />
            </div>
        </>
    )
}
