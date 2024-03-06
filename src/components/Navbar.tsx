"use client";

import React, { useState } from "react";
import NavbarButton from "./NavbarButton";
import { RiEarthFill } from "react-icons/ri";
import Modal from "./modal";
import LoginModal from "./modal/LoginModal";

export default function Navbar() {
  const [selectedName, setSelectedName] = useState("Stays");
  const [open, setOpen] = useState(false);
  const changeName = (name: string) => {
    setSelectedName(name);
  };
  return (
    <div className="flex items-center justify-between py-[20px]">
      <img
        className={`bg-white object-cover h-[40px]`}
        alt="logo"
        src="/logo.png"
        referrerPolicy="no-referrer" //액박 뜨는거 방지 가능
      />
      <div className="flex items-center">
        <NavbarButton
          name="Stays"
          width="w-[100px]"
          link=""
          always={false}
          selectedName={selectedName}
          changeName={changeName}
        />
        <NavbarButton
          width="w-[140px]"
          name="Experiences"
          link=""
          always={false}
          selectedName={selectedName}
          changeName={changeName}
        />
        <NavbarButton
          width="w-[160px]"
          name="Online Experience"
          link=""
          always={false}
          selectedName={selectedName}
          changeName={changeName}
        />
      </div>
      <div className="flex items-center">
        <NavbarButton
          width="w-[170px]"
          name={"Airbnb your home"}
          link=""
          always
          selectedName={selectedName}
          changeName={changeName}
        />
        <div className="cursor-pointer hover:bg-gray-200 rounded-full h-[50px] w-[50px] flex justify-center items-center">
          <RiEarthFill className="w-[30px] h-[30px]" />
        </div>
        <div
          onClick={() => {
            setOpen(true);
          }}
          className="cursor-pointer"
        >
          Login
        </div>
      </div>

      <Modal
        isOpen={open}
        setOpen={setOpen}
        animation="animate-modalMovingFromBottom"
        position="justify-center mr-6"
      >
        {/* <UserDetailModal userId={selectedPersonnel?.id} /> */}
        <LoginModal setOpen={setOpen} />
      </Modal>
    </div>
  );
}
