import React from 'react'
import "./style.css"

export default function Filled({label, darkMode, color}) {
  return (
    <button className={`w-fit text-xl font-medium leading-8 px-6 py-3 rounded-2xl btn-filled tracking-wider ${color==='yellow'?'yellow':'blue'}`}>
        {label}
    </button>
  )
}
