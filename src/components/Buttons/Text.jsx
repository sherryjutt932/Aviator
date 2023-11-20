import React from 'react'
import "./style.css"

export default function Text({label, darkMode}) {
  return (
    <button className='w-fit text-xl font-medium leading-8 px-6 py-3 rounded-2xl btn-text tracking-wider'>
        {label}
    </button>
  )
}
