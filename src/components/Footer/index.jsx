import React from 'react'
import {logos} from "./logos"
import "./style.css"

export default function Footer({darkMode}) {
  return (
    <div className='h-[100px] flex justify-center items-end fixed bottom-0 left-1/2 -translate-x-1/2 w-full'>
      <div className='lg:w-[70%] w-[95%] flex justify-around items-center gap-2 py-3 px-20 footerCon'>
      {logos.map((item,i)=>{
        return(
          <a href={item.url} className=''>
            <span className='opacity-[.25] hover:opacity-60 transition-all' >{item.icon(!darkMode?"#ffffff90":"#000")}</span>
          </a>
        )
      })}
      </div>
    </div>
  )
}
