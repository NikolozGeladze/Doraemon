import React from 'react'
import './Head.css'
import Eyes from './eyes/Eyes.jsx'
import Nose from './Nose/Nose.jsx'

export default function Head() {
    return (
        <>
            <div className="head">
                <div className="top">
                    <Eyes />
                    <Nose />
                </div>
                <div className="bottom">
                    
                </div>
            </div>
        </>
    )
}
