"use client";
import React, { useEffect, useState } from "react";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import HeartIcon from "./ui/icons/HeartIcon";

import { FaStar } from "react-icons/fa";
import { apiRoutes } from "@/types/api-routes";
import api from "../utils/request";
import Link from "next/link";

type Props = {
  index: number;
  data: any;
  user: any;
  wishlist?: any;
};

export default function RoomCard({ index, data, user, wishlist }: Props) {
  const [like, setLike] = useState(false);
  useEffect(() => {
    // console.log("user", user);
    if (
      wishlist?.length > 0 &&
      wishlist?.filter((each: any) => each.id === data.id).length > 0
    )
      setLike(true);
  }, [wishlist]);

  const changeWishList = async (type: string, id: string) => {
    if (type === "add") {
      setLike(true);
    } else {
      setLike(false);
    }
    try {
      const res = await api.patch(`${apiRoutes.UPDATE_WISHLIST}`, {
        wishlistId: id,
      });
    } catch (err) {
    } finally {
    }
  };

  return (
    <Link href={`/room/${data.id}`} key={index} className="cursor-pointer">
      <div
        style={{ backgroundImage: `url(${data?.pictures[0]})` }}
        className="relative aspect-square bg-cover rounded-lg pt-[10px] pl-[10px]"
      >
        <div className="text-center bg-white rounded-lg w-[110px] text-[12px] font-medium">
          Guest favourite
        </div>
        {like ? (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              changeWishList("remove", data.id);
            }}
          >
            <HeartFillIcon className="absolute top-2 right-2 w-[20px] h-[20px]" />
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              changeWishList("add", data.id);
            }}
          >
            <HeartIcon className="absolute top-2 right-2 w-[20px] h-[20px]" />
          </button>
        )}
      </div>
      <div className=" mt-[10px] text-[12px] text-medium">
        <div className="flex justify-between">
          <div className="font-semibold">{data?.name}</div>
          <div className="flex items-center">
            <FaStar className="mr-[3px]" /> 4.92
          </div>
        </div>
        <div className="text-gray-500">226 km away</div>
        <div className="text-gray-500">May 12 - 17</div>
        <div className="mt-[5px]">
          <span className="font-semibold">$209 CAD</span> night
        </div>
      </div>
    </Link>
  );
}
