import React from 'react'
import {data}  from "./Data";
import TableData from "./TableData";

export default function Table({darkMode}) {
  return (
    <div className={darkMode?"p-5 w-auto rounded-2xl bg-[#3181B725] max-h-[45vh] overflow-y-scroll customscroller max-w-[900px]":"p-5 w-auto rounded-2xl bg-[#3181B715] max-h-[45vh] overflow-y-scroll customscroller max-w-[900px]"}>
        <table className="border-collapse w-full">
  <thead >
    <tr >
      <th className={darkMode? "rounded-s-xl bg-[#00000015] py-3 pl-3 text-left": "rounded-s-xl bg-[#ffffff10] py-3 pl-3 text-left"}>Id</th>
      <th className={`${darkMode?'bg-[#00000015]':'bg-[#ffffff10]'} py-3 px-1`}>Date</th>
      <th className={`${darkMode?'bg-[#00000015]':'bg-[#ffffff10]'} py-3 px-1`}>TX Hash</th>
      <th className={`${darkMode?'bg-[#00000015]':'bg-[#ffffff10]'} py-3 px-1`}>Amount</th>
      <th className={`${darkMode?'bg-[#00000015]':'bg-[#ffffff10]'} py-3 px-1`}>Detail</th>
      <th className={`${darkMode?'bg-[#00000015]':'bg-[#ffffff10]'} rounded-e-xl py-3 px-1`}>Status</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item, index)=>{
        return(
          <TableData key={index} item={item} darkMode={darkMode}/>
        )
    })
    }
    
  </tbody>
</table>
    </div>
  )
}
