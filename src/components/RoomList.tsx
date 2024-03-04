"use client";
import React from "react";
import { FullRoom } from "@/model/room";
import { apiRoutes } from "../types/api-routes";
import api from "../utils/request";
import { useEffect, useState } from "react";
import HeartIcon from "./ui/icons/HeartIcon";
import HeartFillIcon from "./ui/icons/HeartFillIcon";
import { FaStar } from "react-icons/fa6";

export default function RoomList() {
  const [data, setData] = useState<FullRoom[] | []>([]);

  const getRoomList = async () => {
    try {
      const res = await api.get(`${apiRoutes.GET_ROOM_LIST}`, {
        params: {
          fields: "name house_type price country pictures",
        },
      });

      setData(res?.data?.data);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    getRoomList();
  }, []);

  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 gap-[15px] mt-[20px]">
      {data?.length > 0 &&
        data.map((each) => {
          return (
            <div>
              <div
                style={{ backgroundImage: `url(${each?.pictures[0]})` }}
                className="relative aspect-square bg-cover rounded-lg pt-[10px] pl-[10px]"
              >
                <div className="text-center bg-white rounded-lg w-[110px] text-[12px] font-medium">
                  Guest favourite
                </div>
                <HeartFillIcon className="absolute top-2 right-2" />
              </div>
              <div className=" mt-[10px] text-[12px] text-medium">
                <div className="flex justify-between">
                  <div className="font-semibold">{each?.name}</div>
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
            </div>
          );
        })}
    </div>
  );
}
