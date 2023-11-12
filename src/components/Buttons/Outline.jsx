import React from 'react'
import "./style.css"

export default function Outline({label, darkMode}) {
  return (
    <button className='text-xl font-medium leading-8 px-6 py-3 rounded-2xl btn-outline tracking-wider'>
        {label}
    </button>
  )
}
