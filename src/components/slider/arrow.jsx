import { useSwiper } from "swiper/react";
import ArrowLeft from "@assets/arrow-left.svg";
import ArrowRight from "@assets/arrow-right.svg";

function Arrow() {
  const swiper = useSwiper();
  return (
    <>
      <div className="arrow-left">
        <img
          onClick={() => swiper?.slidePrev()}
          src={ArrowLeft}
          alt="arrow-left"
        />
      </div>
      <div className="arrow-right">
        <img
          onClick={() => swiper?.slideNext()}
          src={ArrowRight}
          className=" z-50"
          alt="arrow-right"
        />
      </div>
    </>
  );
}

export default Arrow;
