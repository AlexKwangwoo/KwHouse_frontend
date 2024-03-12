"use client";
import React from "react";
import { FullRoom } from "@/model/room";
import { apiRoutes } from "../types/api-routes";
import api from "../utils/request";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import RoomCard from "./RoomCard";
import Cookies from "universal-cookie";

export default function RoomList() {
  const [data, setData] = useState<FullRoom[] | []>([]);
  const [wishlist, setWishlist] = useState(null);
  // https://stackoverflow.com/questions/74580728/get-url-params-next-js-13
  const search_param = useSearchParams()?.get("category");
  // const pathname = usePathname();

  const cookies = new Cookies();
  const user = cookies.get("kwhouse_user", cookies.get("kwhouse_user"))?.user;

  const getUserWishlist = async () => {
    try {
      const res = await api.get(`${apiRoutes.WISHLIST}`, {});

      setWishlist(res?.data?.data?.wishlist);
    } catch (err) {
    } finally {
    }
  };
  useEffect(() => {
    getUserWishlist();
  }, []);

  console.log("wishlist", wishlist);
  const getRoomList = async () => {
    if (search_param) {
      try {
        let params = {
          category: search_param,
          // fields: "name house_type price country pictures",
        };

        console.log("params", params);
        const res = await api.get(`${apiRoutes.GET_ROOM_LIST_BY_CATEGORY}`, {
          params: params,
        });

        setData(res?.data?.data);
      } catch (err) {
      } finally {
      }
    } else {
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
    }
  };

  useEffect(() => {
    getRoomList();
  }, [search_param]);

  return (
    <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-3 gap-[15px] mt-[20px]">
      {data?.length > 0 &&
        data.map((each, index) => {
          return (
            <RoomCard
              data={each}
              index={index}
              user={user}
              wishlist={wishlist}
            />
          );
        })}
    </div>
  );
}
