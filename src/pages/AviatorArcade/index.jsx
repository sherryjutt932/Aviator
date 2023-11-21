import React, { useState, useEffect } from "react";
import Search from "../../assets/svgs/search";
import data from "./Data"

export default function AviatorArcade({darkMode}) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Update the key whenever darkMode changes to trigger a re-render of Piechart
    setKey((prevKey) => prevKey + 1);
  }, [darkMode]);


  const [selectedOption, setSelectedOption] = useState(0);

  const handleSelectChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedOption(selectedIndex);
  };

  return (
    <div className="h-full flex flex-col gap-6">
      <div className={`${darkMode?' bg-[#3181B725] border-[#00000020]':'bg-[#3181B715] border-[#ffffff20]'} w-full flex justify-between rounded-xl p-3 border sm:flex-row flex-col-reverse gap-4`}>
        <select
          type="text"
          className={`${darkMode?'border-[#00000020] bg-[#00000010]':'border-[#ffffff20] bg-[#ffffff10]'} border  py-[6px] px-[10px] rounded-lg`}
          onChange={handleSelectChange}
          value={selectedOption}
        >
          {data.map((item, index) => {
            return (
              <option
                key={index}
                className= {`${darkMode?' bg-[#fff] border-[#00000020]':'bg-[#000] border-[#ffffff20]'} border py-[6px] px-[10px]`}
                value={index}
                disabled={selectedOption == index}
              >
                {item.title}
              </option>
            );
          })}
        </select>

        <div className="flex gap-1 ">
          <input
            type="text"
            className= {`${darkMode?'bg-[#00000010] border-[#00000020]':'bg-[#ffffff10] border-[#ffffff20]'}   border py-[6px] px-[10px] rounded-lg`}
            placeholder={"Search"}
          />
          <div className="rounded-xl h-full aspect-square">
            <Search key={key} darkMode={darkMode}  />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 pr-3 overflow-y-auto customscroller">
      <div className="flex gap-5 w-full  sm:flex-row flex-col">
        <div className="flex-1 basis-1/3 ">
          <img
            className="block w-full h-full object-cover aspect-[5/3] rounded-[30px]"
            src={data[selectedOption].mainImage}
            alt=""
          />
        </div>

        <div className="flex-1 basis-2/3 flex flex-col gap-4">
          <div className="flex gap-4">
            {data[selectedOption].otherImages.map((item, i) => {
              return (
                <img
                  key={i}
                  className="w-[45%] flex-grow sm:flex-grow-0 sm:w-[250px] xl:w-[350px] aspect-[5/3] object-cover"
                  src={item}
                  alt="latest pic"
                />
              );
            })}
          </div>

          <div className="flex flex-col w-fit">
            <p className="uppercase text-base xl:text-xl">
              {data[selectedOption].title}
            </p>
            <div className="w-full h-[3px] bg-mainY rounded-sm"></div>
          </div>

          <p className=" text-base 2xl:text-xl textbody">
            {data[selectedOption].detail}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1 w-full">
        <p className="uppercase text-base xl:text-xl">More</p>

        <p className="text-base 2xl:text-xl textbody">
        {data[selectedOption].more}
        </p>
      </div>
      </div>
    </div>
  );
}
