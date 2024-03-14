"use client";
import { usePathname } from "next/navigation";
import React, { use } from "react";

type Props = any;

export default function RoomDetail({ room_detail }: Props) {
  const currentPage = usePathname();
  return (
    <div className={`flex justify-center `}>
      <div
        className={`w-full text-[14px] ${
          currentPage?.split("/")[1] === "room" ? "w-[1000px]" : "w-full"
        }`}
      >
        <div className="font-semibold text-[24px] mt-[10px] mb-[10px]">
          {" "}
          {room_detail.name}
        </div>
        <div className="w-full grid grid-rows-2 grid-flow-col gap-3">
          {room_detail.pictures.map((each: any, index: number) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${each})` }}
              className={`${
                index === 0
                  ? "row-span-2 col-span-2 rounded-l-lg"
                  : "row-span-1 col-span-1"
              } ${index === 3 ? "rounded-tr-lg" : ""}   ${
                index === 4 ? "rounded-br-lg" : ""
              } aspect-square bg-cover  `}
            ></div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}
