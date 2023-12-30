import React from 'react'
import './Key.css'

export default function Key(props) {
  return (
    <button className='key flex justify-center items-center m-2 w-20' onClick={() => props.onClick(props.str)}>
      <h1 className="3xl">{props.str}</h1>
    </button>
  )
}
