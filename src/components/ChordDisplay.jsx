import React from 'react'

export default function ChordDisplay(props) {
  return (
    <div className='flex flex-col'>
      <span>{props.chord}</span>
      <span>{props.cheer}</span>
    </div>
  )
}
