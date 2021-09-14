import React from 'react'
import "./block.scss"

export default function Block(props) {
    return (
        <div className="block" style={{ backgroundColor : props.color }}>
        <p>{props.p} <span>{props.head}</span></p>
        <h1>{props.data}</h1>
            
        </div>
    )
}
