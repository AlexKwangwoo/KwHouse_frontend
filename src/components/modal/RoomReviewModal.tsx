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

export default function RoomReviewModal({ setOpen }: Props) {
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
    <div className="w-[840px]  h-[740px] bg-white rounded-lg">
      <div className="px-[10px] h-[40px] flex justify-between items-center">
        <MdOutlineCancel
          onClick={() => setOpen(false)}
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>

      <div className="mt-[20px] px-[20px]"></div>
    </div>
  );
}
