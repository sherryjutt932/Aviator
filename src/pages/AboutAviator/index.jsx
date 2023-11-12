import React from "react";
import fox from "../../assets/images/aviatorhomefox.png";
import home1 from "../../assets/images/home1.png";
import home2 from "../../assets/images/home2.png";
import home3 from "../../assets/images/home3.png";
import { Link } from "react-router-dom";

export default function AboutAviator() {
  const imgArray = [home1, home2, home3];
  return (
    <div className="h-full flex items-center xl:pr-20">
      <div className="flex-1 basis-2/3 flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div className="h-[30px] xl:h-[40px] w-[3px] bg-mainB rounded-sm"></div>
          <p className="uppercase text-xl xl:text-3xl">welcome</p>
        </div>
        <h1 className="uppercase text-7xl xl:text-9xl  font-bold leading-none -tracking-wide">
          AVIATORS
        </h1>
        <p className="max-w-xl xl:max-w-4xl text-base xl:text-lg textbody xl:pb-6">
          Welcome to Aviator, a unique Web3 gaming project that embraces true
          decentralization. Led by our expansive team of: developers, designers,
          marketers, and advisors; we aim to empower our DAO voters and explore
          new innovative technologies.
        </p>

        <div className="flex flex-col w-fit">
          <p className="uppercase text-base xl:text-xl">latest</p>
          <div className="w-full h-[3px] bg-mainY rounded-sm"></div>
        </div>
        <div className="flex gap-4">
          {imgArray.map((item, i) => {
            return (
              <Link to="/" className="relative overflow-hidden rounded-2xl shadow-lg shadow-[#00000030]">
                <img
                key={i}
                className="w-[150px] xl:w-[250px] aspect-[5/3] object-cover"
                src={item}
                alt="latest pic"
              />
              <div className="hover:opacity-100 opacity-0 transition-all absolute w-full h-full
              flex items-end p-3 top-0 bg-gradient-to-t from-[#00000090] to-[#00000010]">
                <p className="capitalize tracking-wider text-light">Aviator</p>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex-1 basis-1/3 ">
        <img src={fox} alt="" />
      </div>
    </div>
  );
}
