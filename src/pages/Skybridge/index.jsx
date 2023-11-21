import React from 'react'
import bridge from "../../assets/images/bridge.png";

export default function Skybridge() {
  return (
    <div className="h-full w-full  flex items-center flex-col sm:flex-row 2xl:pr-20 gap-5 2xlgap-12">
      <div className="flex-1 basis-1/2 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="h-[30px] 2xl:h-[40px] w-[3px] bg-mainB rounded-sm"></div>
          <p className="uppercase text-xl 2xl:text-3xl">Bridge</p>
        </div>
        <p className=" text-base 2xl:text-xl textbody w-[90%]">
          Welcome to Aviator, a unique Web3 gaming project that embraces true
          decentralization. Led by our expansive team of: developers, designers,
          marketers, and advisors; we aim to empower our DAO voters and explore
          new innovative technologies.
        </p>
        <img className="block w-full sm:max-w-[60%] 2xl:max-w-[80%]" src={bridge} alt="" />
      </div>
      <div className="flex-1 basis-1/2 flex flex-col gap-5 ">
      <div className="flex flex-col w-fit">
          <p className="uppercase text-base xl:text-xl">latest</p>
          <div className="w-full h-[3px] bg-mainY rounded-sm"></div>
        </div>
        <p className=" text-base 2xl:text-xl textbody">
        Our token distribution ensures a fair and  allocation of AVI tokens. 60% is allocated to Uniswap, ensuring a broad distribution among our community.
<br />
<br />
As we strive for sustained growth, Aviator has developed a meticulous roadmap that includes strategic token burns at significant market cap milestones. These token burns are planned at 10k, 100k, 1m, 10m, 100m, and future market caps, collectively burning approximately 11.5% of the total supply. 
<br />
<br />
Furthermore, we welcome proposals through the DAO to select additional Grant Initiatives, enabling the community to decide on worthy projects to support. By implementing these token burns and engaging in philanthropic endeavors, we aim to increase scarcity, strengthen the value of $AVI, and generously reward our dedicated Pilots for their unwavering support.
        </p>
      </div>
    </div>
  )
}
