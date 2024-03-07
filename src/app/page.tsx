import CategoryList from "@/components/CategoryList";
import RoomList from "@/components/RoomList";

export default function Home() {
  return (
    <div className=" w-full h-full pb-[80px]">
      <CategoryList />
      <RoomList />
    </div>
  );
}
