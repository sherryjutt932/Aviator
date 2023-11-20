import React from 'react'

export default function TableData({item, darkMode}) {
  return (
    <tr className='border-b-slate-700 border-b text-center text-[#E0E6E9]'>
    <td className={`${darkMode?'text-[#222]':''} py-5 px-1 text-left`}>{item.id}</td>
    <td className={`${darkMode?'text-[#222]':''} py-5 px-1`}>{item.date}</td>
    <td className={`${darkMode?'text-[#222]':''} py-5 px-1`}>{item.hash}</td>
    <td className={`${darkMode?'text-[#222]':''} py-5 px-1`}>{item.amount}</td>

    <td className="py-5">
      <input type="text" className={`${darkMode?'bg-[#00000015] border-[#00000025] text-[#222]':'bg-[#ffffff10] border-[#ffffff20]'} border py-[6px] px-[10px] rounded-lg w-[80%]`} value={item.detail} />
    </td>
    <td className="py-5 px-1">
      <div className={`py-1 px-3 rounded-full w-fit mx-auto ${item.status==="new"?darkMode?'bg-[#9290FE55] text-[#706ee9]':'bg-[#9290FE25] text-[#9290FE]' :!darkMode?'bg-[#6BE2BE25] text-[#50D1AA]':'bg-[#6BE2BE65] text-[#35bc94]'}`}>
        {item.status}
      </div>
      </td>
    </tr>
  )
}
