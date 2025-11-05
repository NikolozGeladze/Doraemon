import React from 'react'
import './Head.css'
import Eyes from './Eyes/Eyes.jsx'
import Nose from './Nose/Nose.jsx'
import Moustache from './Moustache/Moustache.jsx'
import Mouth from './Mouth/Mouth.jsx'

export default function Head() {
    return (
        <>
            <div className="head">
                <div className="top">
                    <Eyes />
                    <Nose />
                </div>
                <div className="middle">
                    <Moustache />
                </div>
                <div className="bottom">
                    <Mouth />
                </div>
            </div>
        </>
    )
}
