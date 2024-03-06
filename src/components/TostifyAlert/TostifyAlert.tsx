"use client";

import "./TostifyStyle.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

// const bounce = cssTransition({
//   enter: "animate__animated animate__bounceIn",
//   exit: "animate__animated animate__bounceOut",
// });

// // https://animista.net/
// // source animation inside style.css
// const swirl = cssTransition({
//   enter: "swirl-in-fwd",
//   exit: "swirl-out-bck",
// });

export function tostifyError(text: string) {
  toast.error(text, {
    style: { fontSize: "12px" },
    // className: css({
    //   background: "#00FF00 !important",
    //   color: "white !important",
    //   fontWeight: "bold",
    // }),
    // closeOnClick: false,
    // toastId: "my_toast",
    autoClose: 5000,
    // closeButton: true,
    position: "top-center",
  });
}

export function tostifySuccess(text: string) {
  console.log("triggeres", text);
  toast.success(text, {
    style: { fontSize: "12px" },
    autoClose: 1000,
    position: "top-center",
  });
}

export function animateNotification(text: string) {
  toast.info(text, {
    style: { fontSize: "12px" },
    autoClose: 3000,
    position: "top-center",
  });
}

// export function animista() {
//   toast.dark("Hey 👋, see how easy!", {
//     transition: swirl,
//   });
// }

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function TostifyAlert({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
