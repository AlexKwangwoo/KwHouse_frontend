"use client";
import { apiRoutes } from "@/types/api-routes";
import React, { useEffect, useState } from "react";
import server_api from "../utils/server_request";
import api from "../utils/request";

import axios from "axios";
import { FullCategory } from "@/model/category";
import { cookies } from "next/headers";
import Link from "next/link";

// const getCategoryList_server = async () => {
//   try {
//     const res = await server_api.get(`${apiRoutes.GET_CATEGORY_LIST}`);
//     return res.data.data.data;
//   } catch (err) {
//   } finally {
//   }
// }; -> server 컴포넌트 만들려면 function 앞에 async붙여야한다!

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    try {
      const res = await api.get(`${apiRoutes.GET_CATEGORY_LIST}`);
      return setCategoryList(res.data.data);
    } catch (err) {
    } finally {
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  // const cookieStore = cookies();
  // const kwhouse_user = JSON.parse(cookieStore.get("kwhouse_user")!.value); //get cookie from server side
  // console.log("check_cookie", kwhouse_user.user.name);

  return (
    <div className="w-full bg-gray-200 h-[60px] flex items-center">
      <Link className="mx-[5px]" href="/">
        All
      </Link>
      {categoryList?.map((each: FullCategory, index: number) => {
        return (
          <Link
            key={index}
            className="mx-[5px]"
            href={`/?category=${each.name}`}
          >
            {each.name}
          </Link>
        );
      })}
    </div>
  );
}
