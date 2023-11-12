import React from 'react'
import {data} from "./Data";
import NavItem from "./NavItem";

export default function Nav({darkMode}) {

  return (
    <nav className='h-[40px] flex items-center'>
          <ul className='flex justify-center gap-4 w-full xl:gap-14'>
            {data.map((item,i)=>{
              return(
                <NavItem key={i} data={item} index={i}/>
              )
            })}
          </ul>
        </nav>
  )
}
