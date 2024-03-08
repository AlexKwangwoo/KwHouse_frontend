import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const responsive = {
  desk: {
    breakpoint: { max: 4000, min: 1800 },
    items: 15,
  },
  large: {
    breakpoint: { max: 1800, min: 1200 },
    items: 13,
  },
  middle: {
    breakpoint: { max: 1200, min: 576 },
    items: 10,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 5,
  },
};

type Props = {
  onClick?: any;
};

const CustomLeftArrow = ({ onClick, ...rest }: Props) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  }: any = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      className="absolute left-[5px] bg-white flex justify-center items-center w-[30px] h-[30px] rounded-full hover:scale-[1.1] border-2 border-gray-500"
      onClick={() => onClick()}
    >
      <FaChevronLeft />
    </button>
  );
};

const CustomRightArrow = ({ onClick, ...rest }: Props) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  }: any = rest;
  // onMove means if dragging or swiping in progress.

  return (
    <button
      className="absolute right-[5px] bg-white flex justify-center items-center w-[30px] h-[30px] rounded-full hover:scale-[1.1] border-2 border-gray-500"
      onClick={() => onClick()}
    >
      <FaAngleRight />
    </button>
  );
};

export default function ScrollableBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Carousel
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      className="gd-carousel"
      ssr={true}
      infinite={true}
      containerClass="w-full flex "
      // customTransition="all .5"
      responsive={responsive}
      itemClass=""
      slidesToSlide={3}
      // transitionDuration={3}
      // transitionDuration={500}
      // autoPlay={true}
      // autoPlaySpeed={3000}
    >
      {children}
    </Carousel>
  );
}
