import React, { useState, useEffect } from "react";
import Piechart from "../../components/Charts/piechart";
import Donutchart from "../../components/Charts/donutchart";
import { data } from "./Data";
import Table from "../../components/Table";
export default function Tokenomics({darkMode}) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Update the key whenever darkMode changes to trigger a re-render of Piechart
    setKey((prevKey) => prevKey + 1);
  }, [darkMode]);

  return (
    <div className="h-full flex items-center">
      <div className="w-[70%] flex flex-col gap-4">
        <div className=" flex gap-4 items-center">
          <div className="h-[30px] 2xl:h-[40px] w-[3px] bg-mainB rounded-sm"></div>
          <p className="uppercase text-xl 2xl:text-3xl">welcome</p>
        </div>
        <p className=" 3xl:max-w-xl 2xl:max-w-4xl text-base 2xl:text-lg textbody 2xl:pb-6">
          As we strive for sustained growth, Aviator has developed a meticulous
          roadmap that includes strategic token burns at significant market cap
          milestones. These token burns are planned at 10k, 100k, 1m, 10m, 100m,
          and future market caps, collectively burning approximately 11.5% of
          the total supply.
        </p>

        <div className="table">
          <Table darkMode={darkMode} />
        </div>
      </div>
      <div className="w-[40%] min-w-[450px] max-w-[600px]">
        <Piechart key={key} data={data} darkMode={darkMode} />
        {/* <Donutchart/> */}
      </div>
    </div>
  );
}
