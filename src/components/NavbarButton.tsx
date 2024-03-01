import React from "react";

type Props = {
  name: string;
  link: string;
  width: string;
  selectedName: string;
  changeName: (a: string) => void;
  always: boolean;
};

export default function NavbarButton({
  name,
  link,
  width,
  selectedName,
  always,
  changeName,
}: Props) {
  return (
    <div
      className={`${
        always ? "!text-black !font-normal" : ""
      } ${width} mx-[2px] cursor-pointer hover:bg-gray-100  py-[10px] rounded-full flex justify-center items-center ${
        selectedName === name
          ? "text-black font-medium	hover:bg-gray-200"
          : "text-gray-500 font-normal hover:bg-gray-200"
      }`}
      onClick={() => changeName(name)}
    >
      {name}
    </div>
  );
}
