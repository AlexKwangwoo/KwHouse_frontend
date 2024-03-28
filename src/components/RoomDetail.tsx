"use client";
import { usePathname } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import { MdOutlineCheckBox } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaDesktop } from "react-icons/fa";
import { LiaCitySolid } from "react-icons/lia";
import { apiRoutes } from "@/types/api-routes";
import api from "@/utils/request";
import Cookies from "universal-cookie";
import { tostifySuccess } from "./TostifyAlert/TostifyAlert";
import SingleLoader from "./SingleLoader";
import Modal from "./modal";
import LoginModal from "./modal/LoginModal";
import RoomReviewModal from "./modal/RoomReviewModal";

type Props = any;

interface ReserveRoomProps {
  kind: string;
  room: string;
  user: string;
  check_in: string;
  check_out: string;
  guest: number;
}

export default function RoomDetail({ room_detail }: Props) {
  const currentPage = usePathname();
  const cookies = new Cookies();
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState("2024-04-01");
  const [endDate, setEndDate] = useState("2024-04-02");
  const [numberOfDay, setNumberOfDay] = useState(1);
  const [guest, setGuest] = useState<any | null>(1);
  const [loading, setLoading] = useState(false);
  const user = cookies.get("kwhouse_user", cookies.get("kwhouse_user"))?.user;

  useEffect(() => {
    if (+endDate?.split("-")[2] > +startDate?.split("-")[2]) {
      setNumberOfDay(+endDate?.split("-")[2] - +startDate?.split("-")[2]);
    }
  }, [startDate, endDate]);

  const ReserveRoom = async () => {
    try {
      setLoading(true);
      const res = await api.post<ReserveRoomProps>(
        `${apiRoutes.BOOKING_ROOM}`,
        {
          kind: "room",
          room: room_detail.id,
          user: user._id,
          check_in: startDate,
          check_out: endDate,
          guests: guest,
        }
      );

      // console.log("check cookies", cookies.get("kwhouse_user")); //get cookie from client

      tostifySuccess("Successfully Reserved!!");
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  console.log("room_detail", room_detail);
  return (
    <div className={`flex justify-center mb-[40px]`}>
      <div
        className={`text-[14px] ${
          currentPage?.split("/")[1] === "room" ? "w-[1000px]" : "w-full"
        }`}
      >
        <div>
          <div className="font-medium text-[24px] my-[15px]">
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
          <div className="flex justify-between">
            {/* Right side!!! */}

            <div>
              <div className="mt-[20px]">
                <div>
                  <div className="text-[18px] font-medium">
                    {room_detail.house_type} In {room_detail.country},{" "}
                    {room_detail.country}
                  </div>
                  <div>
                    {room_detail.maximum_guests} guests •{" "}
                    {room_detail.number_of_bed} bedrooms •{" "}
                    {room_detail.number_of_bed} beds •{" "}
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
                    <div className="text-[15px] font-semibold">
                      Self check-in
                    </div>
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
                    <div className="text-[15px] font-semibold">
                      Great location
                    </div>
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
            </div>

            {/* Left side!!! */}
            <div className="w-full mt-[10px] ml-[50px] pl-4 py-4">
              <div className="border-[1px] border-gray-400 rounded-md w-full h-[420px] p-3 text-[20px]">
                ${room_detail.price} CAD{" "}
                <span className="text-[13px] text-gray-500">night</span>
                <button
                  onClick={() => {
                    ReserveRoom();
                  }}
                  className="mt-[10px] text-[14px] flex justify-center items-center text-white hover:bg-[#dd1f48] bg-[#dd1f62] w-full h-[45px] rounded-md"
                >
                  {loading ? (
                    <div className="-mb-1">
                      <SingleLoader loadingSize={22} />
                    </div>
                  ) : (
                    "Reserve"
                  )}
                </button>
                <div className="text-[12px] flex mt-[10px]">
                  <div className="mr-[10px]">
                    <div>Start Date</div>
                    <input
                      // disabled={disabled}
                      // type={intermediateType}
                      // name={name}
                      // id={name}
                      // pr-10 removed
                      className={` px-[10px] h-[30px] block w-full border-[1.5px] focus:outline-none sm:text-sm rounded-md placeholder:text-[11px] ${
                        false
                          ? "border-error text-error focus:ring-error focus:border-error"
                          : "border-lightGrey text-black focus:ring-black focus:border-black"
                      } ${
                        false
                          ? "border-lightGrey text-lightGrey focus:ring-lightGrey focus:border-lightGrey"
                          : ""
                      }`}
                      placeholder={"YYYY-MM-DD"}
                      value={startDate}
                      onChange={(e) => {
                        setStartDate(e.target.value);
                      }}
                    />
                  </div>

                  <div className="">
                    <div>End Date</div>
                    <input
                      // disabled={disabled}
                      // type={intermediateType}
                      // name={name}
                      // id={name}
                      // pr-10 removed
                      className={` px-[10px] h-[30px] block w-full border-[1.5px] focus:outline-none sm:text-sm rounded-md placeholder:text-[11px] ${
                        false
                          ? "border-error text-error focus:ring-error focus:border-error"
                          : "border-lightGrey text-black focus:ring-black focus:border-black"
                      } ${
                        false
                          ? "border-lightGrey text-lightGrey focus:ring-lightGrey focus:border-lightGrey"
                          : ""
                      }`}
                      placeholder={"YYYY-MM-DD"}
                      value={endDate}
                      onChange={(e) => {
                        setEndDate(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="text-[12px] mt-[10px]">
                  <div>Guests</div>
                  <input
                    // disabled={disabled}
                    // type={intermediateType}
                    // name={name}
                    // id={name}
                    // pr-10 removed
                    className={` px-[10px] h-[30px] block w-full border-[1.5px] focus:outline-none sm:text-sm rounded-md placeholder:text-[11px] ${
                      false
                        ? "border-error text-error focus:ring-error focus:border-error"
                        : "border-lightGrey text-black focus:ring-black focus:border-black"
                    } ${
                      false
                        ? "border-lightGrey text-lightGrey focus:ring-lightGrey focus:border-lightGrey"
                        : ""
                    }`}
                    placeholder={"YYYY-MM-DD"}
                    value={guest}
                    onChange={(e) => {
                      setGuest(e.target.value);
                    }}
                  />
                </div>
                <div className="text-[14px] mt-[20px] w-full flex justify-between">
                  <span>
                    ${room_detail.price} x {numberOfDay} nights
                  </span>
                  <span>${room_detail.price * numberOfDay} </span>
                </div>
                <div className="text-[14px] mt-[20px] w-full flex justify-between">
                  <span>Cleaning Fee</span>
                  <span>${room_detail.cleaning_fee}</span>
                </div>
                <div className="text-[14px] mt-[20px] w-full flex justify-between">
                  <span>Tax</span>
                  <span>
                    $
                    {(room_detail.price * numberOfDay +
                      room_detail.cleaning_fee) /
                      10}
                  </span>
                </div>
                <div className="w-full border-t-[1px] border-gray-300 mt-[20px]"></div>
                <div className="text-[14px] mt-[20px] w-full flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    $
                    {(room_detail.price * numberOfDay +
                      room_detail.cleaning_fee) /
                      10 +
                      room_detail.price * numberOfDay +
                      room_detail.cleaning_fee}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------- ----------------- ---------------- --------------*/}
        <div className="w-full border-t-[1.5px] bprder-gray-800 my-[20px]"></div>
        <div className="w-full">
          <div className="w-full text-center">
            <span className="text-[60px]">
              {room_detail.all_overall_rating_average}
            </span>

            <div className="text-[20px] font-medium"> Guest favourite</div>
            <div className="font-medium text-center text-[16px] text-gray-700 mt-[5px]">
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
                        {each.user.name}
                      </span>
                      <span className="text-gray-400">{each.user.address}</span>
                    </div>
                  </div>
                  <div className="mt-[10px]">
                    ★★★★★ • Jan 4 • Stayed with kids
                  </div>
                  <div className="text-gray-500">
                    {each.review.substr(0, 150)}{" "}
                    {each.review.length > 150 ? "..." : ""}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-[30px] ">
            <div
              className="rounded-md cursor-pointer px-2 py-2 border-black text-center border-[1px] inline"
              onClick={() => {
                setOpen(true);
              }}
            >
              Show all {room_detail.all_overall_rating_quantity} reviews
            </div>
          </div>
          <div className="w-full border-t-[1.5px] bprder-gray-800 my-[20px] mt-[40px]"></div>

          <div className="mt-[20px] flex items-center">
            <img
              src={room_detail.owner.profile_img}
              className="rounded-full w-[50px] h-[50px]"
            ></img>
            <div className="text-[12px] ml-[15px]">
              <div className="text-[18px] font-semibold">
                Hosted by {room_detail.owner.name}
              </div>
              <div>Superhost • 4 years hosting</div>
            </div>
          </div>
          <div className="mt-[10px]">
            ★ {room_detail.owner.total_review} Reviews
          </div>
        </div>
      </div>

      <Modal
        isOpen={open}
        setOpen={setOpen}
        animation="animate-modalMovingFromBottom"
        position="justify-center mr-6"
      >
        {/* <UserDetailModal userId={selectedPersonnel?.id} /> */}
        <RoomReviewModal setOpen={setOpen} data={room_detail} />
      </Modal>
    </div>
  );
}
