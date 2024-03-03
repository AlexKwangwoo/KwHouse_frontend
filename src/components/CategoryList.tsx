import { apiRoutes } from "@/types/api-routes";
import React from "react";
import server_api from "../utils/server_request";
import axios from "axios";
import { FullCategory } from "@/model/category";

const getCategoryList = async () => {
  try {
    const res = await server_api.get(`${apiRoutes.GET_CATEGORY_LIST}`);
    return res.data.data.data;
  } catch (err) {
  } finally {
  }
};

export default async function CategoryList() {
  const categoryList = await getCategoryList();

  return (
    <div className="w-full bg-gray-200 h-[60px] flex items-center">
      {categoryList?.map((each: FullCategory) => {
        return <div className="mx-[5px]">{each.name}</div>;
      })}
    </div>
  );
}
