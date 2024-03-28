"use client";
import Cookies from "universal-cookie";

import TokenService from "@/services/token.service";
import { apiRoutes } from "@/types/api-routes";
import api from "@/utils/request";
import { signIn } from "next-auth/react";

import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import SingleLoader from "../SingleLoader";
import { tostifySuccess } from "../TostifyAlert/TostifyAlert";

type Props = {
  setOpen: (open: boolean) => void;
  data: any;
};

interface LoginProps {}

export default function RoomReviewModal({ setOpen, data }: Props) {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("most");
  const [keyword, setKeyword] = useState("");
  const [reviewData, setReviewData] = useState<any>([]);

  const getReviewsData = async (type: string) => {
    try {
      let sort = "";
      if (type === "highest") {
        sort = "&sort=-overall_rating";
      } else if (type === "lowest") {
        sort = "&sort=overall_rating";
      }
      setLoading(true);
      const res = await api.get(
        `${apiRoutes.GET_ROOM_REVIEW}?room=${data._id}&limit=30&page=1${sort}`
      );
      // let newArray = [...original];
      // newArray.push(...res.data.data);
      setReviewData(res.data.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getReviewsData(selected);
  }, [selected]);

  return (
    <div className="w-[840px]  h-[740px] bg-white rounded-lg">
      <div className="px-[10px] h-[40px] flex justify-between items-center">
        <MdOutlineCancel
          onClick={() => setOpen(false)}
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>

      <div className="flex pl-[20px]">
        <div className="w-[30%]">
          <div className="w-full text-center">
            <span className="text-[60px]">
              {data.all_overall_rating_average}
            </span>

            <div className="text-[13px] font-medium"> Guest favourite</div>
            <div className="font-medium text-center text-[12px] text-gray-500 mt-[5px]">
              One of the most loved homes on Airbnb <br /> based on ratings,
              reviews, and reliability
            </div>

            <div className="w-full border-t-[1.5px] bprder-gray-800 my-[20px]"></div>

            <img
              className={`bg-white object-cover `}
              alt="review"
              src="/reviewPng.png"
              referrerPolicy="no-referrer" //액박 뜨는거 방지 가능
              onClick={() => {}}
            />

            <div className="w-full grid grid-cols-1 mt-[5px] text-[13px] ">
              <div className="flex justify-between py-[10px] border-b-[1.5px] border-gray-300">
                Cleanliness
                <div>{data.all_overall_cleanliness_rating_average}</div>
              </div>
              <div className="flex justify-between py-[10px] border-b-[1.5px] border-gray-300 ">
                Accuracy
                <div>{data.all_overall_accuracy_rating_average}</div>
              </div>
              <div className="flex justify-between py-[10px] border-b-[1.5px] border-gray-300 ">
                Check-in
                <div>{data.all_overall_check_in_rating_average}</div>
              </div>
              <div className="flex justify-between py-[10px] border-b-[1.5px] border-gray-300 ">
                Communication
                <div>{data.all_overall_communication_rating_average}</div>
              </div>
              <div className="flex justify-between py-[10px] border-b-[1.5px] border-gray-300 ">
                Location
                <div>{data.all_overall_location_rating_average}</div>
              </div>
              <div className="flex justify-between py-[10px] ">
                Value
                <div>{data.all_overall_value_rating_average}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[70%] ml-[30px] font-medium text-[20px]">
          <div className="flex flex-col h-[670px] overflow-y-auto mt-[10px]">
            <div className="fixed top-[145px] w-[540px] bg-white pr-[40px] pb-[10px]">
              <div className="flex justify-between items-center">
                <div>{data?.all_overall_rating_quantity} reviews</div>
                <div className="flex text-[12px]">
                  <div
                    onClick={() => {
                      setSelected("most");
                    }}
                    className={`${
                      selected === "most" ? "bg-gray-200" : ""
                    } cursor-pointer mr-[10px] border-[1px] border-black px-2 py-1 rounded-md`}
                  >
                    Most Recent
                  </div>
                  <div
                    onClick={() => {
                      setSelected("highest");
                    }}
                    className={`${
                      selected === "highest" ? "bg-gray-200" : ""
                    } cursor-pointer mr-[10px] border-[1px] border-black px-2 py-1 rounded-md`}
                  >
                    Highest rated
                  </div>
                  <div
                    onClick={() => {
                      setSelected("lowest");
                    }}
                    className={`${
                      selected === "lowest" ? "bg-gray-200" : ""
                    } cursor-pointer border-[1px] border-black px-2 py-1 rounded-md`}
                  >
                    Lowest rated
                  </div>
                </div>
              </div>

              <input
                // disabled={disabled}
                // type={intermediateType}
                // name={name}
                // id={name}
                // pr-10 removed
                className={`mt-[10px] px-[10px] !h-[30px] block w-full border-[1.5px] focus:outline-none sm:text-sm rounded-md placeholder:text-[11px] ${
                  false
                    ? "border-error text-error focus:ring-error focus:border-error"
                    : "border-lightGrey text-black focus:ring-black focus:border-black"
                } ${
                  false
                    ? "border-lightGrey text-lightGrey focus:ring-lightGrey focus:border-lightGrey"
                    : ""
                }`}
                placeholder={"Search Reviews"}
                value={keyword}
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
            </div>
            <div className="mt-[80px] pr-[40px]">
              {reviewData.map((each: any) => (
                <div className="mb-[30px] text-[13px]">
                  <div className="flex items-center">
                    {each.user?.profile_img !== undefined ? (
                      <img
                        src={each.user?.profile_img}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full"
                      />
                    ) : (
                      <div className="w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center text-white">
                        L
                      </div>
                    )}

                    <div className="flex flex-col ml-[10px]">
                      <span className="text-[15px] font-medium">
                        {each.user.name}
                      </span>
                      <span className="text-gray-400">{each.user.address}</span>
                    </div>
                  </div>
                  <div className="mt-[10px] text-[12px] mb-[3px]">
                    ★ {each.overall_rating} ----------{" "}
                    {each.createdAt.split("T")[0]}
                  </div>
                  <div className="text-gray-500 text-[12px]">{each.review}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
