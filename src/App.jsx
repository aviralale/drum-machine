import React from 'react'
import Keypad from './components/Keypad'

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-center text-6xl uppercase'>Drum Machine</h1>
      <Keypad/>
    </div>
  )
}
