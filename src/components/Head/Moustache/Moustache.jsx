import React from 'react'
import './Moustache.css'

export default function Moustache() {
  return (
    <div className="moustache-container">
      <div className="moustache-left">
        <div className="moustache m_20deg"></div>
        <div className="moustache m_0deg"></div>
        <div className="moustache m_-20deg"></div>
      </div>
        <div className="moustache-right">
        <div className="moustache m_-20deg"></div>
        <div className="moustache m_0deg"></div>
        <div className="moustache m_20deg"></div>
      </div>
    </div>
  )
}
