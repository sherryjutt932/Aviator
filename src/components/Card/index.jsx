import React from "react";

export default function Card({ data, big, custom }) {
  return (
    <div className={`bg-[#3181B715] border border-[#ffffff15] rounded-2xl p-5 flex-grow basis-[100%]
    ${(big) ? 'sm:basis-[calc(49%-10px)]' : (custom)?'h-full':'sm:basis-[calc(33%-10px)]'}`}>
      <div className="flex hmax gap-3 items-stretch">
        <h2 className="bg-[#FABD30] text-black w-7 font-bold text-lg 2xl:text-xl rounded-md flex items-center justify-center">
          {data.index}
        </h2>
        <h1 className="text-lg 2xl:text-xl font-semibold">{data.title}</h1>
      </div>
      <ul className="pl-5 pt-3 list-disc textbody text-[15px] leading-6">
        {data.detail.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
