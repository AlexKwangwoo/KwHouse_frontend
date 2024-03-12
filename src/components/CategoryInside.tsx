"use client";

import React from "react";
import ScrollableBar from "./ui/ScrollableBar";
import { FullCategory } from "@/model/category";
import Link from "next/link";
import { FaChartBar } from "react-icons/fa";
import { TbSnowflake } from "react-icons/tb";
import { IoStorefrontSharp } from "react-icons/io5";
import { SiAntdesign } from "react-icons/si";
import { MdCabin } from "react-icons/md";
import { FaLandmarkDome } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import { GiThornyVine } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { PiParkFill } from "react-icons/pi";
import { FaRoad } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdCastle } from "react-icons/md";
import { TbCamper } from "react-icons/tb";
import { GiCampingTent } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { MdOutlineSurfing } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaGolfBall } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";
import { useSearchParams } from "next/navigation";

const css = "w-[40px] h-[40px] mb-[5px]";

const icon_returner = (name: string) => {
  if (name === "Arctic") {
    return <TbSnowflake className={css} />;
  } else if (name === "Lakefront") {
    return <IoStorefrontSharp className={css} />;
  } else if (name === "Design") {
    return <SiAntdesign className={css} />;
  } else if (name === "Cabins") {
    return <MdCabin className={css} />;
  } else if (name === "Domes") {
    return <FaLandmarkDome className={css} />;
  } else if (name === "Tree Houses") {
    return <FaTree className={css} />;
  } else if (name === "Vineyards") {
    return <GiThornyVine className={css} />;
  } else if (name === "Caves") {
    return <GiCaveEntrance className={css} />;
  } else if (name === "National parks") {
    return <PiParkFill className={css} />;
  } else if (name === "Countryside") {
    return <FaRoad className={css} />;
  } else if (name === "Beach") {
    return <FaUmbrellaBeach className={css} />;
  } else if (name === "Castles") {
    return <MdCastle className={css} />;
  } else if (name === "Campers") {
    return <TbCamper className={css} />;
  } else if (name === "Camping") {
    return <GiCampingTent className={css} />;
  } else if (name === "Amazing pools") {
    return <MdOutlinePool className={css} />;
  } else if (name === "Surfing") {
    return <MdOutlineSurfing className={css} />;
  } else if (name === "Trending") {
    return <FaFire className={css} />;
  } else if (name === "Golfing") {
    return <FaGolfBall className={css} />;
  } else if (name === "Bed & breakfasts") {
    return <MdFreeBreakfast className={css} />;
  } else if (name === "Mansions") {
    return <FaBuilding className={css} />;
  } else if (name === "Earth homes") {
    return <MdOutlineSurfing className={css} />;
  } else if (name === "Historical Homes") {
    return <FaEarthAfrica className={css} />;
  } else if (name === "Creative spaces") {
    return <FaMusic className={css} />;
  }
};

type Props = {
  categoryList: FullCategory[];
};

export default function CategoryInside({ categoryList }: Props) {
  const search_param = useSearchParams()?.get("category");

  return (
    categoryList &&
    categoryList.length > 0 && (
      <ScrollableBar>
        <Link
          className={`${
            search_param === null ? "!text-black !font-medium" : ""
          }  hover:!text-black text-[#8a8a8a]  pt-[4px] mr-[20px] h-[60px] flex flex-col items-center justify-center text-[14px]`}
          href="/"
        >
          <FaChartBar className={`${css}`} />

          <div className="whitespace-nowrap pb-[5px] border-b-2 border-[#fafafa] hover:border-black ">
            All Category
          </div>
        </Link>
        {categoryList.map((each: FullCategory, index: number) => {
          return (
            <Link
              key={index}
              className={`${
                search_param === each.name ? "!text-black !font-medium " : ""
              }   hover:!text-black text-[#666666]  pt-[4px] mx-[20px] h-[60px] flex flex-col items-center justify-center text-[14px]`}
              href={`/?category=${each.name}`}
            >
              {icon_returner(each.name)}

              <div
                className={`${
                  search_param === each.name ? "border-black" : ""
                }  whitespace-nowrap pb-[5px] border-b-2 border-[#fafafa] hover:border-black `}
              >
                {each.name}
              </div>
            </Link>
          );
        })}
      </ScrollableBar>
    )
  );
}
