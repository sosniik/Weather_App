import React from 'react'
import '../styles/Day.css'


export default function Day(props) {
    return (
        <div className="Day">
            <p>{props.hours}</p>
            <p className="centerDay">{props.day}</p>
            <div>
                <p>
                    <img src={props.image} alt="weather" height="85" width="85"></img>
                </p>
            </div>
            <p>
                <span className="tempMin">{props.label1}°C | </span>{props.label2}°C
            </p>
        </div>
    )
}
