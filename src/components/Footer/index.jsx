import React from 'react'
import {logos} from "./logos"
import "./style.css"

export default function Footer({darkMode}) {
  return (
    <div className='h-[100px] flex justify-center items-end fixed bottom-0 left-1/2 -translate-x-1/2 w-full'>
      <div className='lg:w-[70%] sm:w-[95%] w-full flex justify-around items-center gap-0 py-3 px-10 sm:px-20 footerCon flex-wrap sm:flex-nowrap sm:gap-2'>
      {logos.map((item,i)=>{
        return(
          <a href={item.url} className='basis-[16%] sm:basis-0 sm:block flex items-center justify-center'>
            <span className='w-8 h-10 sm:w-full sm:h-full flex items-center justify-center sm:block opacity-[.35] sm:opacity-[.25] hover:opacity-60 transition-all' >{item.icon(!darkMode?"#ffffff90":"#000")}</span>
          </a>
        )
      })}
      </div>
    </div>
  )
}
