import React from "react";
import Card from "../../components/Card";
import { data } from "./Data";
import fox from "../../assets/images/fox on rocket.png";

export default function Roadmap() {
  return (
    <div className="h-full py-5 pb-0 grid grid-cols-8 grid-rows-8 gap-5">
      
      <div className=" h-full col-span-8 sm:col-span-2 row-span-8 flex flex-col justify-center gap-5">
        <div className="basis-[calc(66%-00px)] p-5 flex items-center">
          <img src={fox} alt="" />
        </div>
        <div className="basis-[calc(33%-0px)]">
          <Card data={data[0]} custom />
        </div>
      </div>

      <div className=" h-full sm:col-start-3 col-span-8 sm:col-span-6 row-span-8 flex flex-wrap gap-5 items-stretch">
        <Card data={data[1]} big={true} />
        <Card data={data[2]} big={true} />
        <Card data={data[3]} />
        <Card data={data[4]} />
        <Card data={data[5]} />
        <Card data={data[6]} />
        <Card data={data[7]} />
        <Card data={data[8]} />
      </div>
    </div>
  );
}
