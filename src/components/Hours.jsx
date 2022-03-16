import React from 'react'
import '../styles/Day.css'

export default function Hours(props) {
    return (
        <div className="Day">
            <p>{props.hours}</p>
            <p><img src={props.image} alt="weather" height="85" width="85"></img></p>
            <p>{props.label1}°C </p>
        </div>
    )
}

           