import React from "react";
import game from "../../assets/images/home1.png";
import Outline from "../../components/Buttons/Outline";
import Text from "../../components/Buttons/Text";
import Filled from "../../components/Buttons/Filled";

export default function Flightpaper({darkMode}) {
  return (
    <div className="h-full w-full  flex sm:flex-row flex-col items-center 2xl:pr-20 gap-10 sm:gap-0">
      <div className="flex-1 sm:basis-2/3 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="h-[30px] 2xl:h-[40px] w-[3px] bg-mainB rounded-sm"></div>
          <p className="uppercase text-xl 2xl:text-3xl">Flight</p>
        </div>
        <h1 className="uppercase text-5xl sm:text-7xl 2xl:text-9xl font-bold leading-none -tracking-wide">
          Paper
        </h1>
        <p className="max-w-xl 2xl:max-w-4xl text-base 2xl:text-xl textbody">
          Welcome to Aviator, a unique Web3 gaming project that embraces true
          decentralization. Led by our expansive team of: developers, designers,
          marketers, and advisors; we aim to empower our DAO voters and explore
          new innovative technologies.
        </p>
        <ul className="text-base 2xl:text-xl list-disc pl-5 text-mainY">
          <li>
            <span className="textbody">
              Design project tokenomics, including token distribution, utility,
              and deployment
            </span>
          </li>
          <li>
            <span className="textbody">Stealth launch on Uniswap V2 and liquidity lock</span>
          </li>
          <li>
            <span className="textbody">Launch DAO beta on snapshot.org</span>
          </li>
          <li>
            <span className="textbody">2023 roadmap release</span>
          </li>
        </ul>

        <div className="flex pt-5 gap-5 flex-wrap">
        <Text label="View" darkMode={darkMode}/>
        <Outline label="Get Detail" darkMode={darkMode}/>
        <Filled label="Start" darkMode={darkMode}/>

        <Outline label="Get Detail" color="yellow" darkMode={darkMode}/>
        <Filled label="Start" color="yellow" darkMode={darkMode}/>
        </div>

      </div>
      <div className="flex-1 sm:basis-1/3 w-full">
        <img className="block w-full" src={game} alt="" />
      </div>
    </div>
  );
}
