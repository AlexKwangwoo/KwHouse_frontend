import { apiRoutes } from "@/types/api-routes";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import server_api from "@/utils/server_request";
import RoomDetail from "@/components/RoomDetail";

type Props = { params: { room_id: string } };

const getRoomDetail = async (room_id: string) => {
  try {
    const res = await server_api.get(`${apiRoutes.GET_ROOM_DETAIL}/${room_id}`);
    return res.data.data.data;
  } catch (err) {
  } finally {
  }
};

const getRoom = cache(async (room_id: string) => getRoomDetail(room_id));

export default async function RoomPage({ params: { room_id } }: Props) {
  const room_detail = await getRoom(room_id);

  return (
    <div className="w-full">
      <div></div>
      {room_detail && <RoomDetail room_detail={room_detail} />}
    </div>
  );
}

export async function generateMetadata({
  params: { room_id },
}: Props): Promise<Metadata> {
  const room_detail = await getRoom(room_id);
  return {
    title: `${room_detail?.name} · Kwangbnb House`,
    description: `${room_detail?.name}'s all house posts`,
  };
}
