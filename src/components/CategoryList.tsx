// use client 해야하지만 연습겸 서버컴포넌트로 해봄!

import { apiRoutes } from "@/types/api-routes";
import React, { useEffect, useState } from "react";
import server_api from "../utils/server_request";

import CategoryInside from "./CategoryInside";

const getCategoryList = async () => {
  try {
    const res = await server_api.get(`${apiRoutes.GET_CATEGORY_LIST}`);
    return res.data.data.data;
  } catch (err) {
  } finally {
  }
};

export default async function CategoryList() {
  // -> server 컴포넌트 만들려면 function 앞에 async붙여야한다!
  const categoryList = await getCategoryList();

  // 서버쪽 쿠키 얻는법
  // const cookieStore = cookies();
  // const kwhouse_user = JSON.parse(cookieStore.get("kwhouse_user")!.value); //get cookie from server side
  // console.log("check_cookie", kwhouse_user.user.name);

  return (
    <div
      // id="hjournal-scroll"

      className="w-full  h-[80px] flex items-center overflow-y-auto"
    >
      {categoryList && categoryList.length > 0 && (
        <CategoryInside categoryList={categoryList}></CategoryInside>
      )}
    </div>
  );
}
