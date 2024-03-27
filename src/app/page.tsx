"use client";
import CategoryList from "@/components/CategoryList";
import RoomList from "@/components/RoomList";
import { Suspense } from "react";

function Home() {
  return (
    <div className=" w-full h-full pb-[80px]">
      <CategoryList />
      <RoomList />
    </div>
  );
}

export default function WrappedHome() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
