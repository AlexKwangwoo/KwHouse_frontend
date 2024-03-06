"use client";
import Cookies from "universal-cookie";

import TokenService from "@/services/token.service";
import { apiRoutes } from "@/types/api-routes";
import api from "@/utils/request";
import { signIn } from "next-auth/react";

import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import SingleLoader from "../SingleLoader";
import { tostifySuccess } from "../TostifyAlert/TostifyAlert";

type Props = {
  setOpen: (open: boolean) => void;
};

interface LoginProps {
  user: any;
  token: string | null;
}

export default function LoginModal({ setOpen }: Props) {
  const [email, setEmail] = useState<string>("test@gmail.com");
  const [password, setPassword] = useState<string>("Test@123");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      const res = await api.post<LoginProps>(`${apiRoutes.LOGIN}`, {
        email,
        password,
      });

      const cookies = new Cookies();
      cookies.set(
        "kwhouse_user",
        { user: res.data.user, token: res.data.token },
        { path: "/" }
      );
      // console.log("check cookies", cookies.get("kwhouse_user")); //get cookie from client

      TokenService.setUser({ user: res.data.user, token: res.data.token });
      tostifySuccess("Successfully Login!!");
      setOpen(false);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[500px] h-[350px] bg-white rounded-lg">
      <div className="px-[20px] h-[60px] border-b-[2px] border-gray-300 flex justify-between items-center">
        <MdOutlineCancel
          onClick={() => setOpen(false)}
          className="w-[20px] h-[20px] cursor-pointer"
        />
        <div className="text-[14px] font-semibold">Log in or sign up</div>
        <div className="w-[20px] h-[20px]"></div>
      </div>

      <div className="mt-[20px] px-[20px]">
        <div className="font-semibold text-[18px]">Welcome to Airbnb</div>
        <input
          // disabled={disabled}
          // type={intermediateType}
          // name={name}
          // id={name}
          // pr-10 removed
          className={`mt-[10px] px-[10px] h-[42px] block w-full border-[1.5px] focus:outline-none sm:text-sm rounded-md placeholder:text-[13px] ${
            false
              ? "border-error text-error focus:ring-error focus:border-error"
              : "border-lightGrey text-black focus:ring-black focus:border-black"
          } ${
            false
              ? "border-lightGrey text-lightGrey focus:ring-lightGrey focus:border-lightGrey"
              : ""
          }`}
          placeholder={"Email"}
          aria-invalid="true"
          aria-describedby="email-error"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          // disabled={disabled}
          type={"password"}
          name={"password"}
          // id={name}
          // pr-10 removed
          className={`mt-[10px] px-[10px] h-[42px] block w-full border-[1.5px] focus:outline-none sm:text-sm rounded-md placeholder:text-[13px] ${
            false
              ? "border-error text-error focus:ring-error focus:border-error"
              : "border-lightGrey text-black focus:ring-black focus:border-black"
          } ${
            false
              ? "border-lightGrey text-lightGrey focus:ring-lightGrey focus:border-lightGrey"
              : ""
          }`}
          placeholder={"Password"}
          aria-invalid="true"
          aria-describedby="email-error"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="mt-[10px] text-[12px] ">
          We’ll call or text you to confirm your number. Standard message and
          data rates apply.{" "}
          <span className="font-semibold underline cursor-pointer">
            Privacy Policy
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            // handleClicked(e);
            login();
          }}
          // disabled={disabled}
          type={"button"}
          className={`w-full text-white primary mt-6 p-3  rounded-md justify-center text-center ${
            false
              ? "bg-middleGrey text-white cursor-not-allowed"
              : "bg-main text-black hover:bg-mainHover cursor-pointer"
          }`}
        >
          {loading ? (
            <div className="-mb-1">
              <SingleLoader loadingSize={22} />
            </div>
          ) : (
            "Continue"
          )}
        </button>
      </div>
    </div>
  );
}
