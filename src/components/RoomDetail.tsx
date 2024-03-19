"use client";
import { usePathname } from "next/navigation";
import React, { use } from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaDesktop } from "react-icons/fa";
import { LiaCitySolid } from "react-icons/lia";

type Props = any;

export default function RoomDetail({ room_detail }: Props) {
  const currentPage = usePathname();

  console.log("room_detail", room_detail);
  return (
    <div className={`flex justify-center mb-[40px]`}>
      <div
        className={`text-[14px] ${
          currentPage?.split("/")[1] === "room" ? "w-[1000px]" : "w-full"
        }`}
      >
        <div className="font-medium text-[24px] my-[15px]">
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

        <div className="mt-[20px]">
          <div>
            <div className="text-[18px] font-medium">
              {room_detail.house_type} In {room_detail.country},{" "}
              {room_detail.country}
            </div>
            <div>
              {room_detail.maximum_guests} guests • {room_detail.number_of_bed}{" "}
              bedrooms • {room_detail.number_of_bed} beds •{" "}
              {room_detail.number_of_toilet} baths
            </div>
            <div>★ No reviews yet</div>
          </div>
        </div>
        <div className="mt-[20px] flex">
          <img
            src={room_detail.owner.profile_img}
            className="rounded-full w-[40px] h-[40px]"
          ></img>
          <div className="text-[12px] ml-[15px]">
            <div className="text-[14px] font-semibold">
              Hosted by {room_detail.owner.name}
            </div>
            <div>Superhost • 4 years hosting</div>
          </div>
        </div>
        <div className="w-[600px] border-t-[1.5px] bprder-gray-800 my-[20px]"></div>
        <div>
          <div className="flex items-center">
            <div>
              <MdOutlineCheckBox className="w-[30px] h-[30px]" />
            </div>
            <div className="ml-[24px]">
              <div className="text-[15px] font-semibold">Self check-in</div>
              <div className="text-gray-600">
                Check yourself in with the keypad.
              </div>
            </div>
          </div>
          <div className="flex items-center mt-[15px]">
            <div>
              <CiLocationOn className="w-[30px] h-[30px] " />
            </div>
            <div className="ml-[24px]">
              <div className="text-[15px] font-semibold">Great location</div>
              <div className="text-gray-600">
                100% of recent guests gave the location a 5-star rating.
              </div>
            </div>
          </div>
          <div className="flex items-center mt-[15px]">
            <div>
              <FaDesktop className="w-[30px] h-[30px]" />
            </div>
            <div className="ml-[24px]">
              <div className="text-[15px] font-semibold">
                Dedicated workspace
              </div>
              <div className="text-gray-600">
                A common area with wifi that’s well suited for working.
              </div>
            </div>
          </div>
        </div>

        <div className="w-[600px] border-t-[1.5px] bprder-gray-800 my-[20px]"></div>
        <div className="w-[600px]">{room_detail.description}</div>
        <div className="w-[600px] border-t-[1.5px] bprder-gray-800 my-[20px]"></div>
        <div className="w-[600px] flex flex-col">
          {" "}
          <span className="text-[20px] font-medium">
            What this place offers
          </span>
          <div className="grid grid-cols-2 mt-[15px] gap-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((each, index) => (
              <div key={index} className="w-[600px] flex items-center">
                <div>
                  <LiaCitySolid className="w-[25px] h-[25px] mr-[10px]" />
                </div>
                <div>City skyline view</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full border-t-[1.5px] bprder-gray-800 my-[20px]"></div>
        <div className="w-full">
          <div className="w-full text-center">
            <span className="text-[60px]">
              {room_detail.all_overall_rating_average}
            </span>

            <div className="text-[20px] font-medium"> Guest favourite</div>
            <div className="font-medium text-center text-[16px] text-gray-700 mt-[5px]">
              {" "}
              One of the most loved homes on Airbnb <br /> based on ratings,
              reviews, and reliability
            </div>
          </div>

          <div className="w-full grid grid-cols-6 mt-[40px] text-[16px]">
            <div className="flex flex-col px-[10px] border-r-[1.5px] border-gray-300">
              Cleanliness
              <div>{room_detail.all_overall_cleanliness_rating_average}</div>
            </div>
            <div className="flex flex-col px-[10px] border-r-[1.5px] border-gray-300 ">
              Accuracy
              <div>{room_detail.all_overall_accuracy_rating_average}</div>
            </div>
            <div className="flex flex-col px-[10px] border-r-[1.5px] border-gray-300 ">
              Check-in
              <div>{room_detail.all_overall_check_in_rating_average}</div>
            </div>
            <div className="flex flex-col px-[10px] border-r-[1.5px] border-gray-300 ">
              Communication
              <div>{room_detail.all_overall_communication_rating_average}</div>
            </div>
            <div className="flex flex-col px-[10px] border-r-[1.5px] border-gray-300 ">
              Location
              <div>{room_detail.all_overall_location_rating_average}</div>
            </div>
            <div className="flex flex-col px-[10px] ">
              Value
              <div>{room_detail.all_overall_value_rating_average}</div>
            </div>
          </div>
          <div className="w-full border-t-[1.5px] bprder-gray-800 my-[20px]"></div>

          <div className="w-full mt-[30px] grid grid-cols-2 gap-8">
            {room_detail.reviews.map((each: any, index: number) => (
              <div>
                <div>
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
                        {" "}
                        {each.user.name}
                      </span>
                      <span className="text-gray-400">
                        {" "}
                        {each.user.address}
                      </span>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    ★★★★★ • Jan 4 • Stayed with kids
                  </div>
                  <div className="text-gray-500">{each.review}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
