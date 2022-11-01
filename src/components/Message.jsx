import React, { Component } from 'react'
import './style-Message.scss'

export const Message = (props) => {
    return (
    <div className='firstBlock'>
        <h1 className='article'>
        It is my first page on React.JS
        </h1>   
        <h2 className='myName'>
        my name is {props.name}
        </h2>
    </div>
  )
}

Message.defaultProps = { name: 'Anton' };
