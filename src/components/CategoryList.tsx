"use client";
// 해야하지만 연습겸 서버컴포넌트로 해봄!

import { apiRoutes } from "@/types/api-routes";
import React, { useEffect, useState } from "react";
import api from "../utils/request";

import CategoryInside from "./CategoryInside";

// const getCategoryList = async () => {
//   try {
//     const res = await server_api.get(`${apiRoutes.GET_CATEGORY_LIST}`);
//     return res.data.data.data;
//   } catch (err) {
//   } finally {
//   }
// };

export default function CategoryList() {
  // -> server 컴포넌트 만들려면a function 앞에 async붙여야한다!
  // const categoryList = wait getCategoryList();

  // 서버쪽 쿠키 얻는법
  // const cookieStore = cookies();
  // const kwhouse_user = JSON.parse(cookieStore.get("kwhouse_user")!.value); //get cookie from server side
  // console.log("check_cookie", kwhouse_user.user.name);

  // 서버 컴포넌트 쓰니 디테일페이지가서 리프레쉬한뒤 뒤로가기하니 오류뜸... 그래서 클라이언트컴포넌트로 바꿈
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
