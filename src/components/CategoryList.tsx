import { apiRoutes } from "@/types/api-routes";
import React, { useEffect, useState } from "react";
import server_api from "../utils/server_request";
import { FullCategory } from "@/model/category";
import Link from "next/link";
import { FaChartBar } from "react-icons/fa";
import { TbSnowflake } from "react-icons/tb";
import { IoStorefrontSharp } from "react-icons/io5";
import { SiAntdesign } from "react-icons/si";
import { MdCabin } from "react-icons/md";
import { FaLandmarkDome } from "react-icons/fa6";
import { FaTree } from "react-icons/fa";
import { GiThornyVine } from "react-icons/gi";
import { GiCaveEntrance } from "react-icons/gi";
import { PiParkFill } from "react-icons/pi";
import { FaRoad } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa";
import { MdCastle } from "react-icons/md";
import { TbCamper } from "react-icons/tb";
import { GiCampingTent } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { MdOutlineSurfing } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { FaGolfBall } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa6";

const getCategoryList = async () => {
  try {
    const res = await server_api.get(`${apiRoutes.GET_CATEGORY_LIST}`);
    return res.data.data.data;
  } catch (err) {
  } finally {
  }
};

export default async function CategoryList() {
  // -> server 컴포넌트 만들려면 function 앞에 async붙여야한다!
  const categoryList = await getCategoryList();
  // const [categoryList, setCategoryList] = useState([]);

  // const getCategoryList = async () => {
  //   try {
  //     const res = await api.get(`${apiRoutes.GET_CATEGORY_LIST}`);
  //     return setCategoryList(res.data.data);
  //   } catch (err) {
  //   } finally {
  //   }
  // };

  // useEffect(() => {
  //   getCategoryList();
  // }, []);
  const css = "w-[40px] h-[40px] mb-[5px]";

  // console.log("categoryList", categoryList);

  const icon_returner = (name: string) => {
    if (name === "Arctic") {
      return <TbSnowflake className={css} />;
    } else if (name === "Lakefront") {
      return <IoStorefrontSharp className={css} />;
    } else if (name === "Design") {
      return <SiAntdesign className={css} />;
    } else if (name === "Cabins") {
      return <MdCabin className={css} />;
    } else if (name === "Domes") {
      return <FaLandmarkDome className={css} />;
    } else if (name === "Tree Houses") {
      return <FaTree className={css} />;
    } else if (name === "Vineyards") {
      return <GiThornyVine className={css} />;
    } else if (name === "Caves") {
      return <GiCaveEntrance className={css} />;
    } else if (name === "National parks") {
      return <PiParkFill className={css} />;
    } else if (name === "Countryside") {
      return <FaRoad className={css} />;
    } else if (name === "Beach") {
      return <FaUmbrellaBeach className={css} />;
    } else if (name === "Castles") {
      return <MdCastle className={css} />;
    } else if (name === "Campers") {
      return <TbCamper className={css} />;
    } else if (name === "Camping") {
      return <GiCampingTent className={css} />;
    } else if (name === "Amazing pools") {
      return <MdOutlinePool className={css} />;
    } else if (name === "Surfing") {
      return <MdOutlineSurfing className={css} />;
    } else if (name === "Trending") {
      return <FaFire className={css} />;
    } else if (name === "Golfing") {
      return <FaGolfBall className={css} />;
    } else if (name === "Bed & breakfasts") {
      return <MdFreeBreakfast className={css} />;
    } else if (name === "Mansions") {
      return <FaBuilding className={css} />;
    } else if (name === "Earth homes") {
      return <MdOutlineSurfing className={css} />;
    } else if (name === "Historical Homes") {
      return <FaEarthAfrica className={css} />;
    } else if (name === "Creative spaces") {
      return <FaMusic className={css} />;
    }
  };

  // 서버쪽 쿠키 얻는법
  // const cookieStore = cookies();
  // const kwhouse_user = JSON.parse(cookieStore.get("kwhouse_user")!.value); //get cookie from server side
  // console.log("check_cookie", kwhouse_user.user.name);

  return (
    <div
      id="hjournal-scroll"
      className="w-full  h-[80px] flex items-center overflow-y-auto"
    >
      <Link
        className={`hover:!text-black text-[#666666] border-b-2 border-[#fafafa] hover:border-black pt-[4px] mr-[20px] h-[60px] flex flex-col items-center justify-center text-[14px]`}
        href="/"
      >
        <FaChartBar className={css} />
        All
      </Link>

      {categoryList.map((each: FullCategory, index: number) => {
        return (
          <Link
            key={index}
            className={`hover:!text-black text-[#666666] border-b-2 border-[#fafafa] hover:border-black pt-[4px] mx-[20px] h-[60px] flex flex-col items-center justify-center text-[14px]`}
            href={`/?category=${each.name}`}
          >
            {icon_returner(each.name)}

            <div className="whitespace-nowrap"> {each.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
