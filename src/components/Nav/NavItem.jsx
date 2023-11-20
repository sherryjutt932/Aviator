import clsx from "clsx";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavItem({ data, index }) {
  const location = useLocation();

  // Define a function to check if a link is active
  const isLinkActive = (pathname) => {
    return location.pathname === ("/" + pathname);
  };


  return (
    <li className={clsx("transition-all",
      isLinkActive(data.url) ? "opacity-100" : "opacity-50"
    )}>
      <Link className="flex gap-3" to={`/${data.url}`}>
        <span className="aspect-square  w-[20px] xl:w-[25px] border-2 border-mainB text-mainB rounded-full text-xs xl:text-sm font-semibold flex justify-center items-center">
          {index+1}
        </span>
        <span className="whitespace-nowrap text-sm xl:text-base font-medium tracking-wider" >{data.label}</span>
      </Link>
    </li>
  );
}
