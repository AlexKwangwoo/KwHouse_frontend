"use client";

import React, { useState } from "react";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
  const [selectedName, setSelectedName] = useState("Stays");
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
      <div>
        <NavbarButton
          width="w-[170px]"
          name="Airbnb your home"
          link=""
          always
          selectedName={selectedName}
          changeName={changeName}
        />
      </div>
    </div>
  );
}
