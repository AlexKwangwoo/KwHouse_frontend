"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiRoutes } from "../types/api-routes";
import api from "../utils/request";
import axios from "axios";
import { FullRoom } from "@/model/room";

export default function Home() {
  const [data, setData] = useState<FullRoom[] | null>(null);

  const getRoomList = async () => {
    try {
      const res = await api.get(
        `http://localhost:4000/${apiRoutes.GET_ROOM_LIST}`
      );

      setData(res?.data?.data);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    getRoomList();
  }, []);

  return (
    <div className=" w-full h-full">
      {data &&
        data.map((each) => {
          return <div>{each?.name}</div>;
        })}
    </div>
  );
}
