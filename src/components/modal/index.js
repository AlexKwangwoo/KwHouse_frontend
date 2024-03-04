// @src/components/Modal.tsx
import React, { useState } from "react";
import ReactPortal from "../ReactPortal";

// Modal component.
function Modal({
  isOpen,
  setOpen,
  children,
  animation = "animate-modalMoving",
  position = "justify-center",
}) {
  if (!isOpen) return null;
  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`z-[1000]  animate-fastShowing bg-[#6e6e6e9f] justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 outline-none bg-darkBlue/30 focus:outline-none`}
      >
        <div className={`${animation} flex flex-1 items-center ${position}`}>
          {React.cloneElement(children, { isOpen, setOpen })}
        </div>
      </div>
    </ReactPortal>
  );
}
export default Modal;
